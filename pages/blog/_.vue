<template>
  <section class="seo">
    <div class="breadcrumbs">
      <nuxt-link to="/blog">Properties</nuxt-link> / {{ article.category }}
    </div>
    <h1 class="title-global">{{ article.title }}</h1>
    <div v-show="article" class="body" v-html="article.text"></div>
    <div class="description">
      <div class="left">
        <img :src="article.authorImg.url ? article.authorImg.url : '/pages/blog/default-author.jpg'" :alt="'article-author-img'" />
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
    <h2 class="recommended-articles">
      Recommended articles
    </h2>
    <div class="article" v-for="i in recomended" :key="i.title">
      <img class="hero" :src="i.previewImage.url" :alt="'article-recomended-hero-' + i" />
      <div class="details">
        <nuxt-link class="title" :to="i.slug">{{ i.title }}</nuxt-link>
        <p class="text">
          {{ i.shortText }}
        </p>
        <nuxt-link class="link" :to="i.slug">Read more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

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
    const articlesRaw = this.getAllArticles.slice()
    return articlesRaw.find(article => article.slug === this.$route.path)
    },
  recomended() {
    const array = [... this.getAllArticles]
    return array.sort(() => 0.5 - Math.random()).slice(0, 3)
    }
  }
}
</script>

<style lang="scss">

.seo {
  max-width: 375px;
  padding: 0 20px;
  margin: 80px auto;

  @include tablet-and-up {
    max-width: 768px;
    padding: 0 30px;
    margin: 120px auto;
  }

  @include desktop-and-up {
    max-width: 1440px;
    padding: 0 120px;
    margin: 120px auto;
  }

  .breadcrumbs {
    text-align: left;
    font-size: 16px;
    color: $dark-grey;
    margin-bottom: 10px;

    a {
      color: $main-green;
      text-decoration: none;
      transition: 0.3s all;

      &:hover {
        text-decoration: underline;
      }
    }

    @include tablet-and-up {
      font-size: 20px;
      margin-bottom: 14px;
    }

    @include desktop-and-up {
      margin-bottom: 16px;
    }

  }

  .title-global {
    font-size: 24px;
    text-align: left;
    margin-bottom: 40px;
    font-weight: 900;
    line-height: 140%;
    text-transform: uppercase;

    @include tablet-and-up {
      text-align: center;
      font-size: 48px;
    }

    @include desktop-and-up {
      font-size: 56px;
    }
  }


  
  .body {
    text-align: left;
    
    @include tablet-and-up {
      padding: 0 24px;
    }

    @include desktop-and-up {
      padding: 0 200px;
    }

    h2 {
      font-size: 28px;
      font-style: normal;
      font-weight: 900;
      letter-spacing: .02em;
      line-height: 140%;
      margin-bottom: 40px;
      text-transform: uppercase;

      @include tablet-and-up {
        font-size: 32px;
      }

      @include desktop-and-up {
        font-size: 48px;
      }
    }


    .title {
      color: #1e1f21;
      font-size: 30px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%;
      margin-bottom: 21px;
      
    }

    img {
      width: 100%;
      height: auto;
      margin: 4px 0;

      @include tablet-and-up {
        margin-bottom: 40px;
      }
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
      margin-bottom: 16px;

      @include desktop-and-up {
        font-size: 20px;
      }
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
    margin-top: 40px;
    border-top: 1px solid $main-black;
    display: flex;
    padding-top: 16px;
    align-items: center;

    @include tablet-and-up {
      margin: 0 24px;
    }

    @include desktop-and-up {
      margin: 0 200px;
      margin-top: 60px;
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

  .recommended-articles {
    font-weight: 900;
    font-size: 24px;
    margin-top: 80px;
    margin-bottom: 40px;
    text-transform: uppercase;
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
        transition: all 0.3s;
        text-decoration: none;
        cursor: pointer;

        &:hover {
          color: $main-green;
        }

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