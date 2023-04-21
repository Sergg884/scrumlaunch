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
          :key="category"
          class="custom-button"
          @click="activeCategory = category"
        >
          {{category}}
        </button>
      </div>
    </div>
    <div class="sort-by">
      <div class="button" @click="dateDropdownSortVisible = !dateDropdownSortVisible">
        <img
          :src="require('@/assets/icons/arrow-sort.svg')"
          class="icon"
        />
        <span>
          Sort by
        </span>
      </div>
      <transition name="dropdown">
        <div v-if="dateDropdownSortVisible" class="dropdown-menu" @mouseleave="dateDropdownSortVisible = !dateDropdownSortVisible">
          <div @click="updateDateSort('asc')">
            Newest to oldest
          </div>
          <div @click="updateDateSort('desc')">
            Oldest to newest
          </div>
        </div>
      </transition>
    </div>
    <div class="articles" v-if="mainArticle">
      <div class="article--main">
        <img class="hero" :src="mainArticle.previewImage.url" :alt="'main-article-hero'" />
        <div class="categories" v-if="mainArticle.category">
          <div class="category">
            {{ mainArticle.category }}
          </div>
        </div>
        <nuxt-link class="title" :to="mainArticle.slug">{{ mainArticle.title }}</nuxt-link>
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
      <div class="article" v-for="(article, index) in articles.slice(1,this.articlesToShow)" :key="index">
        <img class="hero" :src="article.previewImage.url" :alt="'article-' + index" />
        <div class="categories">
          <div class="category">
            {{ article.category ? article.category : 'insights'  }}
          </div>
        </div>
        <nuxt-link class="title" :to="article.slug">{{ article.title }}</nuxt-link>
        <p class="text">
          {{ article.shortText }}
        </p>
        <nuxt-link class="link" :to="article.slug">Read more</nuxt-link>
        <div class="description">
          <img :src="article.authorImg ? article.authorImg : '/pages/blog/default-author.jpg'" :alt="'article-' + index + 'author-img'" />
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
    <BaseButton v-if="articlesToShow < getAllArticles.length" class="show-more" @click="articlesToShow += 4">
      Show More
    </BaseButton>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  head: {
    title: 'ScrumLaunch Blog: Articles about Technology, Business & more',
    meta: [
      { hid: 'description', name: 'description', content: 'Articles and News from the world of IT: software development insights, best remote practices in Product Management, stories of creating efficient business solutions, and much more.' },
    ],
  },

  data() {
    return {
      articlesToShow: 5,
      activeCategory: '',
      dateDropdownSortVisible: false,
      dateSortStatus: 'Newest'
    };
  },

  computed: {
    
    ...mapGetters('articles/', ['getAllArticles']),

    articles () {
      let articlesRaw = this.getAllArticles.slice()

      if (this.activeCategory) {
        articlesRaw = articlesRaw.filter(item => item.category === this.activeCategory)
      }

      if (this.dateSortStatus === 'desc') {
        articlesRaw = articlesRaw.slice().sort((a, b) => this.parseDate(a.date) - this.parseDate(b.date));
      } else if (this.dateSortStatus === 'asc') {
        articlesRaw = articlesRaw.slice().sort((a, b) => this.parseDate(b.date) - this.parseDate(a.date));
      }

      return articlesRaw
    },
    mainArticle () {
      return this.articles[0]
    },
    categories () {
      const categories = []
      for (let i = 0; i < this.getAllArticles.length; i++) {
        const category = this.getAllArticles[i].category
        if (category !== '' && !categories.includes(category)) {
          categories.push(category)
        }
      }
      return categories
    }
  },
  methods: {
    updateDateSort(status) {
      this.dateSortStatus = status
      this.dateDropdownSortVisible = !this.dateDropdownSortVisible
    },

    parseDate(dateString) {
      const [day, month, year] = dateString.split('/');
      return new Date(year, month - 1, day);
    },
  }
}
</script>

<style lang="scss" scoped>

.blog {

  @include desktop-and-up {
    margin: 120px auto;
  }
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

    @media screen and (min-width: 768px) {
      font-size: 90px;
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

  .sort-by {
    display: flex;
    position: relative;
    justify-content: right;
    margin-bottom: 22px;
    cursor: pointer;

    @include tablet-and-up {
      margin-bottom: 25px;
    }

    @include desktop-and-up {
      margin-bottom: 35px;
    }
    
    .button {
      font-weight: 700;
      font-size: 16px;

      @include tablet-and-up {
        font-size: 20px;
      }

      @include desktop-and-up {
        font-size: 24px;
      }

      .icon {
        width: 12px;
        height: 16px;
        margin-bottom: 4px;

        @include tablet-and-up {
          width: 18px;
          height: 24px;
        }

        @include desktop-and-up {
          width: 22px;
          height: 30px;
        }
      }
    }

    .dropdown-menu {
      left: calc(100% - 240PX);
      position: absolute;
      top: calc(100% + 20px);
      background-color: white;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 0;
      border: 1px solid black;
      z-index: 1;
      display: flex;
      flex-direction: column;
      max-width: 240px;

      div {
        padding: 20px 18px;
        font-weight: 700;
        font-size: 24px;
        &:hover {
          background-color: $main-green;
        }
      }
    }

    .dropdown-enter-active,
    .dropdown-leave-active {
      transition: all 0.3s ease;
    }

    .dropdown-enter,
    .dropdown-leave-to {
      opacity: 0;
      visibility: hidden;
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
        flex-basis: calc(50% - 10px);
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

        .info {
          display: flex;
          flex-direction: column;
        }
        
        @include tablet-and-up {
          flex-basis: 100%;
          flex-direction: row;
          flex-wrap: wrap;

          .categories {
            width: 100%;
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
