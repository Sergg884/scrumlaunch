import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { parse, format } from "date-fns";
import { renderOptions } from '@/utils.js'

const client = Contentful.createClient({
  space: 'psyys3eoga8f',
  accessToken: 'bOobZ65YNxX9q52-lWtWpmOmQZgdsjAR5sWkhJopKfg',
})

export const state = () => ({
  articles: [],
  tags: [],
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_TAGS(state, tags) {
    state.tags = tags
  },
}

let lastFetchParams = null;
let fetchInProgress = false;

export const actions = {
  async fetchArticles({ commit }, params = {}) {
    const paramsKey = JSON.stringify(params);
    
    if (fetchInProgress && lastFetchParams === paramsKey) {
      return;
    }
    
    fetchInProgress = true;
    lastFetchParams = paramsKey;
    
    try {
      const { tags = [], sortOrder = '-fields.date' } = params;
      
      const queryParams = {
        content_type: 'blog',
        order: sortOrder,
        limit: 200,
      }
      
      if (tags.length > 0) {
        queryParams['fields.tags[in]'] = tags.join(',');
      }
      
      const res = await client.getEntries(queryParams);
  
      const articles = res.items.map((el) => {
        const parsedDate = parse(el.fields.date, 'dd/MM/yyyy', new Date());
  
        return {
          category: el.fields.category,
          date: format(parsedDate, 'MM/dd/yyyy'),
          isoDate: format(parsedDate, 'yyyy-MM-dd'),
          metaDescription: el.fields.metaDescription,
          metaTitle: el.fields.metaTitle,
          shortText: el.fields.shortText,
          title: el.fields.title,
          tags: el.fields.tags,
          previewImage: {
            url: `https:${el.fields.previewImage.fields.file.url}`,
          },
          slug: el.fields.slug,
          text: documentToHtmlString(el.fields.ttt, renderOptions()),
          authorImg: {
            url: `https:${el.fields.authorImage.fields.file.url}`,
          },
          authorName: el.fields.author,
        };
      });
  
      if (sortOrder.includes('date')) {
        articles.sort((a, b) => {
          return sortOrder.startsWith('-')
            ? b.isoDate.localeCompare(a.isoDate)
            : a.isoDate.localeCompare(b.isoDate);
        });
      }
  
      commit('SET_ARTICLES', articles);
      return articles;
  
    } catch (error) {
      console.error('Error fetching articles:', error);
    } finally {
      fetchInProgress = false;
    }
  },

  async fetchTags({ commit, state }) {
    if (state.tags && state.tags.length > 0) {
      return state.tags;
    }
    
    try {
      const res = await client.getEntries({
        content_type: 'blog',
        select: 'fields.tags',
        limit: 200,
      });
  
      const allTags = [];
  
      res.items.forEach(item => {
        if (item.fields && item.fields.tags) {
          allTags.push(...item.fields.tags);
        }
      });
      
      const uniqueTags = [...new Set(allTags)];
      
      commit('SET_TAGS', uniqueTags);
      return uniqueTags;
    } catch (error) {
      console.error('Error fetching tags:', error);
      return [];
    }
  }
}

export const getters = {
  getAllArticles: (state) => {
    return state.articles
  },
  getTags: (state) => {
    return state.tags
  },
  getCategories: (state) => {
    return state.tags
  },
  getHeaderItems: (state) => {
    if (state.articles) {
      const rawArticles = state.articles.map(item => {
        return {
          title: item.title,
          path: item.slug,
        };
      }).slice(-5).reverse()
      rawArticles.push({
        title: 'View all',
        path: '/blog',
      })
      return rawArticles
    }
    return [{
      title: 'View all',
      path: '/blog',
    }]
  },
  searchArticles: (state) => (query) => {
    if (!query || query.trim() === '') return [];
    
    query = query.toLowerCase().trim();
    const results = [];
    
    state.articles.forEach(article => {
      const titleMatch = article.title.toLowerCase().includes(query);
      if (titleMatch) {
        const titleIndex = article.title.toLowerCase().indexOf(query);
        results.push({
          type: 'title',
          article,
          matchText: article.title,
          matchIndex: titleIndex,
          relevance: titleIndex === 0 ? 2 : 1
        });
      }
    });

    if (results.length === 0) {
      state.articles.forEach(article => {
        const shortTextMatch = article.shortText.toLowerCase().includes(query);
        if (shortTextMatch) {
          const textIndex = article.shortText.toLowerCase().indexOf(query);
          const snippetStart = Math.max(0, textIndex - 30);
          const snippetEnd = Math.min(article.shortText.length, textIndex + query.length + 30);
          const matchText = article.shortText.slice(snippetStart, snippetEnd);
          
          results.push({
            type: 'content',
            article,
            matchText,
            matchIndex: textIndex,
            relevance: 0
          });
        }

        const strippedText = article.text.replace(/<[^>]*>/g, '');
        const textMatch = strippedText.toLowerCase().includes(query);
        if (textMatch && !shortTextMatch) {
          const textIndex = strippedText.toLowerCase().indexOf(query);
          const snippetStart = Math.max(0, textIndex - 30);
          const snippetEnd = Math.min(strippedText.length, textIndex + query.length + 30);
          const matchText = strippedText.slice(snippetStart, snippetEnd);
          
          results.push({
            type: 'content',
            article,
            matchText,
            matchIndex: textIndex,
            relevance: 0
          });
        }
      });
    }

    return results
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 5);
  }
}
