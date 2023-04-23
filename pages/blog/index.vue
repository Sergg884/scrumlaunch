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
      <ArticleMain 
        :article="mainArticle"
      />
      <div v-for="(article, index) in articles.slice(1,this.articlesToShow)" :key="index">
        <Article :article="article" :index="index" />
      </div>
    </div>
    <BaseButton v-if="articlesToShow < getAllArticles.length" class="show-more" @click="articlesToShow += 4">
      Show More
    </BaseButton>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleMain from '@/components/articles/ArticleMain.vue';
import Article from '@/components/articles/Article.vue'

export default {

  components: {
    ArticleMain,
    Article
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
      flex-basis: calc(50% - 12px);
    }
  }

  .show-more {
    margin: auto;
    margin-top: 40px;
  }
}

</style>
