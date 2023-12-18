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
})

export const mutations = {
  SET_ARTICLES(state, articles) {
    state.articles = articles
  },
}

export const actions = {
  fetchArticles({commit}) {
    return new Promise ((resolve, reject) => {
      client.getEntries({ content_type: 'blog' })
        .then((res) => {
          const articles = res.items.map((el) => ({
            category: el.fields.category,
            date: format(parse(el.fields.date, 'dd/MM/yyyy', new Date()), 'MM/dd/yyyy'),
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
          }))
    
          commit('SET_ARTICLES', articles)

          resolve(articles)
        })
        .catch((error) => {
          console.log(`Error while getting articles list...`)
          reject(error)
        })
    })
  }
}

export const getters = {
  getAllArticles: (state) => {
    return state.articles
  },
  getHeaderItems: (state) => {
    if (state.articles) {
      let rawArticles = state.articles.map(item => {
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
