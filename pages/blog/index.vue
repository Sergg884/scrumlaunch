<template>
  <section class="blog">
    <div class="hero">
      <h1 class="title-big">
        Get more of our ideas, insights, and guides
      </h1>
      <nuxt-img src="/pages/blog/hero.webp" alt="blog-hero"/>
    </div>
    <div
      class="swiper"
    >
      <div class="content">
        <button
          class="custom-button"
          @click="activeCategory = ''"
        >
          All articles
        </button>
        <button
          v-for="category in categories"
          class="custom-button"
          @click="activeCategory = category"
        >
          {{category}}
        </button>
      </div>
    </div>
    <div class="articles" v-if="mainArticle">
      <div class="article--main">
        <nuxt-img class="hero" :src="mainArticle.previewImage.url" :alt="'main-article-hero'" />
        <div class="categories" v-if="mainArticle.category">
          <div class="category">
            {{ mainArticle.category }}
          </div>
        </div>
        <h3 class="title" v-if="mainArticle.title">
          {{ mainArticle.title }}
        </h3>
        <div class="info">
          <p class="text">
            {{ mainArticle.shortText }}
          </p>
          <nuxt-link class="link" :to="mainArticle.slug">Read more</nuxt-link>
          <div class="description">
            <nuxt-img :src="mainArticle.authorImg ? mainArticle.authorImg : '/pages/blog/default-author.jpg'" :alt="'main-article-author-img'" />
            <div class="meta">
              <p class="author">
                {{  mainArticle.authorName ? mainArticle.authorName : 'Thomas Jefferson' }}
              </p>
              <p class="date" v-if="mainArticle.date">
                {{ mainArticle.date }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="article" v-for="(article, index) in articles" :key="index">
        <nuxt-img class="hero" :src="article.previewImage.url" :alt="'article-' + index" />
        <div class="categories">
          <div class="category">
            {{ article.category ? article.category : 'insights'  }}
          </div>
        </div>
        <h3 class="title">
          {{ article.title }}
        </h3>
        <p class="text">
          {{ article.shortText }}
        </p>
        <nuxt-link class="link" :to="article.slug">Read more</nuxt-link>
        <div class="description">
          <nuxt-img :src="article.authorImg ? article.authorImg : '/pages/blog/default-author.jpg'" :alt="'article-' + index + 'author-img'" />
          <div class="meta">
            <p class="author">
              {{  article.authorName ? article.authorName : 'Thomas Jefferson' }}
            </p>
            <p class="date">
              {{ article.date }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <BaseButton v-if="articlesToShow < getAllArticles.length" class="show-more" @click="articlesToShow += 2">
      Show More
    </BaseButton>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticlePreview from '@/components/articles/ArticlePreview'
import ArticleLink from '@/components/articles/ArticleLink'

export default {
  components: {
    ArticlePreview,
    ArticleLink,
  },

  head: {
    title: 'ScrumLaunch Blog: Articles about Technology, Business & more',
    meta: [
      { hid: 'description', name: 'description', content: 'Articles and News from the world of IT: software development insights, best remote practices in Product Management, stories of creating efficient business solutions, and much more.' },
    ],
  },

  data() {
    return {
      articlesToShow: 5,
      activeCategory: ''
    };
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles']),
    articles () {
      let articlesRaw = this.getAllArticles.slice()
      if (this.activeCategory) {
        let filteredArray = articlesRaw.filter(item => item.category === this.activeCategory)
        return filteredArray.reverse().slice(1,this.articlesToShow)
      }
      return articlesRaw.reverse().slice(1,this.articlesToShow)
    },
    mainArticle () {
      return this.getAllArticles.slice()[this.getAllArticles.length - 1]
    },
    categories () {
      let categories = []
      for (let i = 0; i < this.getAllArticles.length; i++) {
        let category = this.getAllArticles[i].category
        if (category !== '' && !categories.includes(category)) {
          categories.push(category)
        }
      }
      return categories
    }

  },
}
</script>

<style lang="scss" scoped>

.blog {
  .hero {
    display: flex;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }

    h1 {
      margin-bottom: 44px;
      text-align: center;

      @include tablet-and-up {
        text-align: left;
        margin-bottom: 8px;
      }
    }

    img {
      display: none;

      @include tablet-and-up {
        display: inline;
        width: 183px;
        height: 129px;
        align-self: stretch;
        margin-top: auto;
      }

      @include desktop-and-up {
        width: 450px;
        height: 269px;
      }
    }
  }

  .swiper {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
      justify-content: flex-start;

      .custom-button {
        padding: 4px 16px;
        border: 1px solid black;
        cursor: pointer;
        background-color: white;
        font-size: 14px;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: $main-green;
        }
      }
    }
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: 20px;

    @include tablet-and-up {
      flex-direction: row;
      flex-wrap: wrap;
    }
    .article {
      display: flex;
      flex-direction: column;
      padding: 24px 18px;
      border: 1px solid $main-black;

      @include tablet-and-up {
        flex-basis: calc(50% - 10px); /* subtracting 5px for the gap between items */
      }

      .hero {
        width: 100%;
        object-fit: cover;
        height: 196px;
        margin-bottom: 16px;
        @include desktop-and-up {
          height: 250px;
        }
      }

      .categories {
        display: flex;
        margin-bottom: 12px;
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
      }

      .description {
        border-top: 1px solid $main-black;
        display: flex;
        padding-top: 16px;
        align-items: center;

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

      &--main {
        @extend .article;
        

        @include tablet-and-up {
          flex-basis: 100%;
          flex-direction: row;
          flex-wrap: wrap;

          .categories {
            order: 1;
          }

          .title {
            order: 2;
            margin-bottom: 20px;
            font-size: 30px;
          }

          .hero {
            order: 3;
            height: 251px;
            object-fit: contain;
          }

          .info {
            display: flex;
            flex-direction: column;
            order: 4;

            .link {
              font-size: 24px;
            }
          }
        }

        @include desktop-and-up {

          .title {
            font-size: 48px;
            margin-bottom: 32px;
          }
          .hero {
            height: auto;
            max-height: 420px;
            max-width: calc(50% - 12px);
            margin-right: 24px;
          }

          .info {
            flex-basis: calc(50% - 12px);

            .text {
              display: block;
            }

            .link {
              font-size: 26px;
            }
          }
        }
      }
    }
  }

  .show-more {
    margin: auto;
    margin-top: 40px;
  }
}

</style>
