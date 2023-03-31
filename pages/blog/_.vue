<template>
  <section class="seo">
    <!-- <div class="meta">
      <div class="category">{{ article.category }}</div>
      <div class="date">Published on {{ article.date }}</div>
    </div> -->
    <h1 class="title-global">{{ article.title }}</h1>
    <div v-show="article" class="body" v-html="article.text"></div>
    <div class="description">
      <div class="left">
        <nuxt-img :src="article.authorImg ? article.authorImg : '/pages/blog/default-author.jpg'" :alt="'article-author-img'" />
        <div class="meta">
          <p class="author">
            {{  article.authorName ? article.authorName : 'Thomas Jefferson' }}
          </p>
          <p class="date">
            {{ article.date }}
          </p>
        </div>
      </div>
      <div class="categories" v-if="article.category">
        <div class="category">
          {{ article.category }}
        </div>
      </div>
    </div>
    <h2>
      Recommended articles
    </h2>
    <div class="article" v-for="i in 3">
      <nuxt-img class="hero" :src="article.previewImage.url" :alt="'article-recomended-hero-' + i" />
      <div class="details">
        <h3 class="title">
          How ScrumLaunch became the best company of 2022?
        </h3>
        <p class="text">
          Humans tend to subconsciously distort information and sculpt it to fit their existing beliefs. Confronting one’s own cognitive...
        </p>
        <nuxt-link class="link" to="/">Read more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import * as Contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { renderOptions } from '@/utils.js'

export default {

  data() {
    return {
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

  computed: {
  ...mapGetters('articles/', ['getAllArticles']),
  article() {
    let articlesRaw = this.getAllArticles.slice()
    return articlesRaw.find(article => article.slug === this.$route.path)
    }
  }
}
</script>

<style lang="scss">

.seo {

  h1 {
    margin-bottom: 40px;
  }

  img {
    width: 100%;
    height: auto;
    margin: 4px 0;
  }

  a {
    color: $main-green;
  }

  p {
    text-align: left;
    color: $main-black;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;

    @include desktop-and-up {
      font-size: 20px;
    }
  }

  .body {
    @include tablet-and-up {
      padding: 0 24px;
    }

    @include desktop-and-up {
      padding: 0 200px;
    }
  }

  ul {
    li {
      p {
        b {
          display: block;
        }
      }
    }
  }

  .description {
    border-top: 1px solid $main-black;
    display: flex;
    padding-top: 16px;
    align-items: center;

    @include tablet-and-up {
      margin: 0 24px;
    }

    @include desktop-and-up {
      margin: 0 200px;
    }

    .left {
      display: flex;
      img {
        height: 44px;
        width: 44px;
        margin-right: 12px;
        border-radius: 100%;
      }
      .meta {
        text-align: left;
        .author {
          font-weight: 700;
          font-size: 16px;
          color: $main-black;
          margin-bottom: 0;

          @include tablet-and-up {
            font-size: 20px;
          }
        }

        .date {
          font-weight: 400;
          font-size: 14px;
          color: $dark-grey;
          margin-bottom: 0;
        }
      }
    }

    .categories {
      display: flex;
      margin-bottom: 12px;
      margin-left: auto;
      .category {
        background: $main-black;
        border: 1px solid transparent;
        color: #fff;
        padding: 4px 16px;
        font-size: 14px;
        font-weight: 500;
        text-transform: capitalize;
        transition: all 0.3s;

        @include tablet-and-up {
          font-size: 16px;
        }

        &:hover {
          background-color: #fff;
          border: 1px solid $main-black;
          color: $main-black;
          
        }
      }
    }
  }

  h2 {
    font-weight: 900;
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 40px;
    @include tablet-and-up {
      margin-top: 140px;
      margin-bottom: 60px;
      font-size: 48px;
    }
    @include desktop-and-up {
      margin-top: 240px;
      margin-bottom: 80px;
      font-size: 56px;
    }
  }

  .article {
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    border-top: 1px solid $main-black;

    @include tablet-and-up {
      flex-direction: row;
    }

    &:last-child {
      border-bottom: 1px solid $main-black;
    }

    .hero {
      width: 100%;
      object-fit: contain;
      height: 196px;
      margin-bottom: 16px;

      @include tablet-and-up {
        width: 177px;
        height: auto;
        margin-right: 20px;
      }

    }

    .details {
      display: flex;
      flex-direction: column;

      .title {
        text-align: left;
        font-weight: 800;
        font-size: 18px;
        color: $main-black;
        margin-bottom: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;

        @include tablet-and-up {
          font-size: 24px;
        }

        @include desktop-and-up {
          font-size: 30px;
        }
      }

      .text {
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        color: $main-black;
        margin-bottom: 12px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: auto;

        @include tablet-and-up {
          font-size: 16px;
        }

        @include desktop-and-up {
          font-size: 18px;
        }
      }
      .link {
        color: $main-black;
        text-decoration: underline;
        font-weight: 700;
        font-size: 16px;
        margin-left: auto;
        background-color: $main-green;
        padding: 3px 2px;
        margin-bottom: 12px;
        margin-top: 12px;

        @include desktop-and-up {
          margin-left: unset;
          margin-right: auto;
        }
      }
    }

  }
}
</style>
