<template>
  <div class="seo">
    <div class="seo__meta">
      <div class="seo__category">{{ article.category }}</div>
      <div class="seo__date">Published on {{ article.date }}</div>
    </div>

    <h1 class="header-big">{{ article.title }}</h1>
    <div v-show="article" class="seo__body" v-html="article.text"></div>
    <ProgLangList
      v-show="article.slug === '/hire-developers'"
      class="prog_lang_list"
    />
  </div>
</template>

<script>
import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import ProgLangList from '@/components/hire-developers/ProgLangList.vue'
import { renderOptions } from '@/utils.js'

export default {
  components: {
    ProgLangList,
  },
  data() {
    return {
      article: {
        category: '',
        title: '',
        text: null,
        slug: '',
        metaTitle: '',
        metaDescription: '',
      },
    }
  },

  head() {
    return {
      title: this.article.metaTitle,
      meta: [
        {
          name: 'description',
          content: this.article.metaDescription,
        },
      ],
    }
  },

  watch: {
    $route() {
      if (this.$route.name === 'blog-slug') {
        this.getArticle()
      }
    },
  },

  mounted() {
    this.getArticle()
  },

  methods: {
    getArticle() {
      if (this.$store.getters['articles/getAllArticles'].length) {
        const currentPost = this.$store.getters[
          'articles/getAllArticles'
        ].filter((item) => {
          return item.slug === this.$route.path
        })[0]

        if (currentPost) {
          this.article = currentPost
        } else {
          this.$router.push('/')
        }
      } else {
        const client = Contentful.createClient({
          space: 'psyys3eoga8f',
          accessToken: 'bOobZ65YNxX9q52-lWtWpmOmQZgdsjAR5sWkhJopKfg',
        })

        client.getEntries({ content_type: 'blog' }).then((res) => {
          const posts = res.items.map((el) => ({
            category: el.fields.category,
            date: el.fields.date,
            metaDescription: el.fields.metaDescription,
            metaTitle: el.fields.metaTitle,
            shortText: el.fields.shortText,
            title: el.fields.title,
            previewImage: {
              url: `https:${el.fields.previewImage.fields.file.url}`,
            },
            slug: el.fields.slug,
            text: documentToHtmlString(el.fields.ttt, renderOptions()),
          }))

          const currentPost = posts.filter((item) => {
            return item.slug === this.$route.path
          })[0]

          if (currentPost) {
            this.article = currentPost
          } else {
            this.$router.push('/')
          }
        })
      }
    },
  },
}
</script>

<style lang="scss">
.seo {
  margin: 0 auto;
  padding-top: 240px;
  padding-bottom: 240px;
  padding-left: 8.34%;
  padding-right: 8.34%;
  width: 100%;
  max-width: 1586px;

  @media screen and (max-width: 1900px) {
    padding-top: 186px;
    padding-bottom: 220px;
  }

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 1440px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1140px) {
    padding-left: 44px;
    padding-right: 44px;
    padding-top: 197px;
    padding-bottom: 197px;
    max-width: 100%;
    width: auto;
  }

  @media screen and (max-width: 768px) {
    padding-top: 60px;
    text-align: start;
  }

  .header-big {
    margin-bottom: 60px;
    text-align: left;
    font-size: 90px;
    line-height: 140%;

    @media screen and (max-width: 1900px) {
      margin-bottom: 40px;
      font-size: 70px;
    }

    @media screen and (max-width: 1140px) {
      font-size: 56px;
    }

    @media screen and (max-width: 768px) {
      margin-bottom: 60px;
      text-align: center;
      font-size: 30px;
      text-align: start;
    }
  }

  &__meta {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;

    @media screen and (max-width: 1900px) {
      margin-bottom: 40px;
    }
  }

  &__category {
    margin-right: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 140%;

    @media screen and (max-width: 1900px) {
      font-size: 16px;
    }
  }

  &__date {
    font-weight: 500;
    font-size: 20px;
    line-height: 140%;

    @media screen and (max-width: 1900px) {
      font-size: 16px;
    }
  }

  &__body {
    margin: 0 auto;
    max-width: 1200px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-align: left;

    @media screen and (max-width: 1900px) {
      font-size: 16px;
    }

    @media screen and (max-width: 1440px) {
      max-width: 900px;
    }

    h2 {
      margin-bottom: 40px;
      font-style: normal;
      font-weight: 900;
      font-size: 48px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }

    h3 {
      margin-bottom: 21px;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 140%;
      color: #1e1f21;
    }

    p {
      margin-bottom: 23px;

      @media screen and (max-width: 1900px) {
        margin-bottom: 20px;
      }
    }

    img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    blockquote {
      margin-top: 40px;
      margin-bottom: 40px;
      padding-left: 212px;
      min-height: 127px;
      font-style: italic;
      font-weight: normal;
      font-size: 26px;
      line-height: 150%;
      background: url('@/assets/icons/quotes.svg') 0 0 no-repeat;
    }

    b {
      font-weight: bold;
    }

    i {
      font-style: italic;
    }

    ul {
      padding-left: 30px;
      list-style: initial;
    }

    ul p {
      margin-bottom: 0;
    }

    ul a {
      text-decoration: none;
    }

    a {
      color: currentColor;

      &:hover {
        text-decoration: none;
      }
    }
  }
}

.prog_lang_list {
  margin-top: 100px;

  .langs__item {
    text-align: left;
  }
}
</style>
