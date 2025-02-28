<template>
  <section class="blog">
    <div class="hero">
      <h1 class="title-big">
        Get more of our ideas, insights, and guides
      </h1>
      <nuxt-img src="/pages/blog/hero.webp" alt="blog-hero"/>
    </div>
    <div class="swiper">
      <VueSlickCarousel v-bind="settings" class="content">
        <button
          class="custom-button"
          @click="setSingleCategory('')"
          :class="{ active: !activeCategory && selectedCategories.length === 0 }"
        >
          All articles
        </button>
        <button
          v-for="category in categories"
          :key="category"
          class="custom-button"
          @click="setSingleCategory(category)"
          :class="{ active: activeCategory === category && selectedCategories.length === 0 }"
        >
          {{category}}
        </button>
      </VueSlickCarousel>
    </div>
    <div class="sort-by">
      <div class="filter" @click="toggleFilterDropdown">
        <span>
          Filter by
        </span>
      </div>
      <transition name="dropdown">
        <div 
          v-if="filterDropdownVisible" 
          class="dropdown-menu filter-menu"
          @mouseleave="filterDropdownVisible = false"
        >
          <div class="filter-title">Industries</div>
          <div 
            v-for="category in categories" 
            :key="category"
            class="checkbox-item"
            @click.stop="toggleTempCategory(category)"
          >
            <input 
              type="checkbox" 
              :checked="tempSelectedCategories.includes(category)"
              readonly
            >
            <label>{{ category }}</label>
          </div>
          <div class="filter-actions">
            <button 
              class="apply-button" 
              @click="applyFilters"
            >
              Apply filters
            </button>
          </div>
        </div>
      </transition>
      <div class="button" @click="toggleSortDropdown">
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
          <div @click="updateDateSort('desc')" :class="{ active: dateSortStatus === 'desc' }">
            Newest to oldest
          </div>
          <div @click="updateDateSort('asc')" :class="{ active: dateSortStatus === 'asc' }">
            Oldest to newest
          </div>
        </div>
      </transition>
    </div>
    <div class="articles" v-if="mainArticle">
      <ArticleMain 
        :article="mainArticle"
      />
      <div class="article-wrap" v-for="(article, index) in articles.slice(1,this.articlesToShow)" :key="index">
        <Article :article="article" :index="index" />
      </div>
    </div>
    <BaseButton v-if="articlesToShow < articles.length" class="show-more" @click="articlesToShow += 4">
      Show More
    </BaseButton>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import ArticleMain from '@/components/articles/ArticleMain.vue';
import Article from '@/components/articles/Article.vue'

export default {

  components: {
    ArticleMain,
    Article,
    VueSlickCarousel 
  },

  data() {
    return {
      articlesToShow: 5,
      activeCategory: '',
      dateDropdownSortVisible: false,
      dateSortStatus: 'desc',
      filterDropdownVisible: false,
      selectedCategories: [],
      tempSelectedCategories: [],
      settings: {
        "dots": false,
        "focusOnSelect": false,
        "infinite": false,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "variableWidth": true
      },
    };
  },

  fetch() {
    const { category, categories, sort } = this.$route.query
    
    if (category) {
      this.activeCategory = category
      this.selectedCategories = []
    } else if (categories) {
      this.selectedCategories = categories.split(',')
      this.activeCategory = ''
    }
    
    this.dateSortStatus = sort || 'desc'
  },

  head: {
    title: 'ScrumLaunch Blog: Articles about Technology, Business & more',
    meta: [
      { 
        hid: 'og:description', 
        name: 'description',
        content: 'Articles and News from the world of IT: software development insights, best remote practices in Product Management, stories of creating efficient business solutions, and much more.' 
      },
    ],
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles', 'getCategories']),

    articles () {
      return this.getAllArticles
    },
    
    mainArticle () {
      return this.articles[0]
    },
    
    categories () {
      return this.getCategories
    }
  },

  watch: {
    '$route.query': {
      handler(newQuery) {
        const { category, categories, sort } = newQuery

        if (!category && !categories) {
          this.activeCategory = ''
          this.selectedCategories = []
        }

        this.dateSortStatus = sort || 'desc'

        if (!categories && !this.selectedCategories.length) {
          this.filterDropdownVisible = false
        }
        if (!sort) {
          this.dateDropdownSortVisible = false
        }
      },
      immediate: true
    },

    dateSortStatus: {
      handler() {
        this.updateQueryParams()
      }
    }
  },

  async created() {
    await this.$store.dispatch('articles/fetchCategories')
    await this.fetchFilteredArticles()
  },

  methods: {
    async fetchFilteredArticles() {
      const params = {
        sortOrder: this.dateSortStatus === 'desc' ? '-fields.date' : 'fields.date'
      }
      
      if (this.activeCategory) {
        params.categories = [this.activeCategory]
      } else if (this.selectedCategories.length > 0) {
        params.categories = this.selectedCategories
      }

      await this.$store.dispatch('articles/fetchArticles', params)
    },

    updateDateSort(status) {
      this.dateSortStatus = status
      this.dateDropdownSortVisible = false
      this.updateQueryParams()
    },

    setSingleCategory(category) {
      this.activeCategory = category
      this.selectedCategories = []
      this.filterDropdownVisible = false
      this.updateQueryParams()
    },

    toggleTempCategory(category) {
      const index = this.tempSelectedCategories.indexOf(category)
      if (index === -1) {
        this.tempSelectedCategories.push(category)
      } else {
        this.tempSelectedCategories.splice(index, 1)
      }
    },

    applyFilters() {
      this.selectedCategories = [...this.tempSelectedCategories]
      this.activeCategory = ''
      this.filterDropdownVisible = false
      this.updateQueryParams()
    },

    toggleFilterDropdown() {
      this.filterDropdownVisible = !this.filterDropdownVisible
      if (this.filterDropdownVisible) {
        this.tempSelectedCategories = [...this.selectedCategories]
        this.dateDropdownSortVisible = false
      }
    },

    toggleSortDropdown() {
      this.dateDropdownSortVisible = !this.dateDropdownSortVisible
      if (this.dateDropdownSortVisible) {
        this.filterDropdownVisible = false
      }
    },

    updateQueryParams() {
      const query = {}
      
      if (this.activeCategory) {
        query.category = this.activeCategory
      }
      
      if (this.selectedCategories.length > 0) {
        query.categories = this.selectedCategories.join(',')
      }
      
      query.sort = this.dateSortStatus

      this.$router.replace({
        query: Object.keys(query).length ? query : undefined
      }, () => {},
      { preserveState: true })
    },
  },
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

    .slick-slide {
      padding-right: 16px !important;
    }
    

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
        width: auto;
        margin-right: 16px;
        width: unset !important;

        &:hover {
          background-color: $main-green;
        }

        &.active {
          background-color: $main-green;
        }
      }
    }
  }

  .sort-by {
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 22px;
    cursor: pointer;

    @include tablet-and-up {
      margin-bottom: 25px;
    }

    @include desktop-and-up {
      margin-bottom: 35px;
    }
    
    .filter {
      font-weight: 700;
      font-size: 16px;
      cursor: pointer;

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
      left: calc(100% - 240px);
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
        &.active {
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

    .dropdown-menu.filter-menu {
      left: 18px;
      width: 240px;

      .filter-title {
        padding: 20px 18px;
        font-weight: 700;
        font-size: 24px;

        &:hover {
          cursor: default;
          background-color: transparent;
        }
      }

      .checkbox-item {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        
        &:hover {
          background-color: $main-green;
        }

        input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }

        label {
          margin-bottom: 0;
          height: 100%;
          font-weight: 700;
          font-size: 20px;
          cursor: pointer;
          flex: 1;
        }
      }

      .filter-actions {
        padding: 16px;
        border-top: 1px solid $main-black;
        margin-top: auto;

        .apply-button {
          width: 100%;
          padding: 12px;
          background: $main-black;
          color: white;
          border: 1px solid $main-black;
          cursor: pointer;
          font-weight: 500;
          transition: all 0.3s;

          &:hover {
            background: $main-green;
            border-color: $main-green;
          }
        }
      }
    }
  }

  .articles {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;

    .article-wrap {
      @include tablet-and-up {
        flex-basis: calc(50% - 10px);
      }
    }
  }

  .show-more {
    margin: auto;
    margin-top: 40px;
  }
}

</style>
