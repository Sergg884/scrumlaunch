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
  categories: [],
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}

export const actions = {
  async fetchArticles({ commit }, { categories = [], sortOrder = '-fields.date' } = {}) {
    try {
      const queryParams = {
        content_type: 'blog',
        order: sortOrder,
        limit: 100
      }

      let allItems = []

      if (categories.length === 0) {
        const res = await client.getEntries(queryParams)
        allItems = res.items
      } else {
        const allPromises = []
        
        categories.forEach(category => {
          allPromises.push(client.getEntries({
            ...queryParams,
            'fields.category': category
          }))
          
          allPromises.push(client.getEntries({
            ...queryParams,
            'fields.category[match]': `^${category},`
          }))
          
          allPromises.push(client.getEntries({
            ...queryParams,
            'fields.category[contains]': `, ${category},`
          }))
          
          allPromises.push(client.getEntries({
            ...queryParams,
            'fields.category[match]': `, ${category}$`
          }))
          
          allPromises.push(client.getEntries({
            ...queryParams,
            'fields.category[contains]': category
          }))
        })
        
        const results = await Promise.all(allPromises)
        
        const uniqueItems = new Map()
        results.forEach(res => {
          res.items.forEach(item => {
            uniqueItems.set(item.sys.id, item)
          })
        })
        
        allItems = Array.from(uniqueItems.values())
      }
      
      let articles = allItems.map(el => {
        const parsedDate = parse(el.fields.date, 'dd/MM/yyyy', new Date())
        const categoriesArray = el.fields.category ? 
          el.fields.category.split(',').map(cat => cat.trim()).filter(Boolean) : 
          []
        
        return {
          category: el.fields.category,
          categories: categoriesArray,
          date: format(parsedDate, 'MM/dd/yyyy'),
          isoDate: format(parsedDate, 'yyyy-MM-dd'),
          metaDescription: el.fields.metaDescription,
          metaTitle: el.fields.metaTitle,
          shortText: el.fields.shortText,
          title: el.fields.title,
          previewImage: {
            url: `https:${el.fields.previewImage.fields.file.url}`,
          },
          slug: el.fields.slug,
          text: documentToHtmlString(el.fields.ttt, renderOptions()),
          authorImg: {
            url: `https:${el.fields.authorImage.fields.file.url}`,
          },
          authorName: el.fields.author,
        }
      })
      
      if (categories.length > 0) {
        articles = articles.filter(article => {
          return categories.some(category => 
            article.categories.includes(category)
          )
        })
      }
      
      if (sortOrder.includes('date')) {
        articles.sort((a, b) => {
          return sortOrder.startsWith('-') 
            ? b.isoDate.localeCompare(a.isoDate)
            : a.isoDate.localeCompare(b.isoDate)
        })
      }
      
      commit('SET_ARTICLES', articles)
      return articles
    } catch (error) {
      console.error('Error while getting articles list:', error)
      throw error
    }
  },

  async fetchCategories({ commit }) {
    try {
      const res = await client.getEntries({
        content_type: 'blog',
        select: 'fields.category',
      })

      const allCategories = []
      res.items.forEach(item => {
        if (item.fields.category) {
          const categoriesArray = item.fields.category
            .split(',')
            .map(cat => cat.trim())
            .filter(Boolean)
          
          allCategories.push(...categoriesArray)
        }
      })

      const categories = [...new Set(allCategories)].sort()

      commit('SET_CATEGORIES', categories)
      return categories
    } catch (error) {
      console.error('Error while getting categories:', error)
      throw error
    }
  }
}

function processArticles(items, sortOrder) {
  const articles = items.map((el) => {
    const parsedDate = parse(el.fields.date, 'dd/MM/yyyy', new Date())
    const categoriesArray = el.fields.category ? 
      el.fields.category.split(',').map(cat => cat.trim()).filter(Boolean) : 
      []
    
    return {
      category: el.fields.category,
      categories: categoriesArray,
      date: format(parsedDate, 'MM/dd/yyyy'),
      isoDate: format(parsedDate, 'yyyy-MM-dd'),
      metaDescription: el.fields.metaDescription,
      metaTitle: el.fields.metaTitle,
      shortText: el.fields.shortText,
      title: el.fields.title,
      previewImage: {
        url: `https:${el.fields.previewImage.fields.file.url}`,
      },
      slug: el.fields.slug,
      text: documentToHtmlString(el.fields.ttt, renderOptions()),
      authorImg: {
        url: `https:${el.fields.authorImage.fields.file.url}`,
      },
      authorName: el.fields.author,
    }
  })

  if (sortOrder.includes('date')) {
    articles.sort((a, b) => {
      return sortOrder.startsWith('-') 
        ? b.isoDate.localeCompare(a.isoDate)
        : a.isoDate.localeCompare(b.isoDate)
    })
  }

  return articles
}

export const getters = {
  getAllArticles: (state) => {
    return state.articles
  },
  getCategories: (state) => {
    return state.categories
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
