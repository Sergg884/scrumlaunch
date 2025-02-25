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
      }

      if (categories.length > 0) {
        queryParams['fields.category[in]'] = categories.join(',')
      }

      const res = await client.getEntries(queryParams)
      
      const articles = res.items.map((el) => {
        const parsedDate = parse(el.fields.date, 'dd/MM/yyyy', new Date())
        
        return {
          category: el.fields.category,
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
      // Get all categories from the articles to avoid duplicates
      const categories = [...new Set(
        res.items
          .map(item => item.fields.category?.trim())
          .filter(Boolean)
          .map(category => category.replace(/\s+/g, ' '))
      )]

      commit('SET_CATEGORIES', categories)
      return categories
    } catch (error) {
      console.error('Error while getting categories:', error)
      throw error
    }
  }
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
  }
}
