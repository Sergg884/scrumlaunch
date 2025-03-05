<template>
  <section class="blog">
    <div class="hero">
      <h1 class="title-big">
        Get more of our ideas, insights, and guides
      </h1>
      <nuxt-img src="/pages/blog/hero.webp" alt="blog-hero"/>
    </div>
    <div class="search-section">
      <SearchArticles ref="searchComponent" @filter-update="updateArticleFilter" />

      <div class="sort-by">
        <div class="sort-by-item">
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
              <div class="sort-value" @click="updateDateSort('desc')" :class="{ active: dateSortStatus === 'desc' }">
                Newest to oldest
              </div>
              <div class="sort-value" @click="updateDateSort('asc')" :class="{ active: dateSortStatus === 'asc' }">
                Oldest to newest
              </div>
            </div>
          </transition>
        </div>

        <div class="filter" @click="toggleFilterDropdown">
          <img
            :src="require('@/assets/icons/filter.svg')"
            class="icon"
          />
          <span>
            Filter by
          </span>
        </div>
        
        <transition name="fade">
          <div 
            v-if="filterDropdownVisible" 
            class="filter-overlay"
            @click="toggleFilterDropdown"
          ></div>
        </transition>

        <transition name="dropdown">
          <div 
            v-if="filterDropdownVisible" 
            class="dropdown-menu filter-menu"
          >
            <div class="filter-header">
              <div class="filter-title">Filter</div>
              <button 
                class="close-button"
                @click="toggleFilterDropdown"
              >
                ✕
              </button>
            </div>
            <div 
              v-for="tag in tags" 
              :key="tag"
              class="checkbox-item"
              @click.stop="toggleTempTag(tag)"
            >
              <input 
                type="checkbox" 
                :checked="tempSelectedTags.includes(tag)"
                readonly
              >
              <label>{{ tag }}</label>
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
      </div>
    </div>
    <div class="swiper">
      <VueSlickCarousel v-bind="settings" class="content">
        <button
          class="custom-button"
          @click="setSingleTag('')"
          :class="{ active: !activeTag && selectedTags.length === 0 }"
        >
          All articles
        </button>
        <button
          v-for="tag in tags"
          :key="tag"
          class="custom-button"
          @click="setSingleTag(tag)"
          :class="{ active: activeTag === tag && selectedTags.length === 0 }"
        >
          {{tag}}
        </button>
      </VueSlickCarousel>
    </div>

    <div class="articles" v-if="mainArticle">
      <ArticleMain 
        :article="mainArticle"
        :query-params="currentQueryParams"
      />
      <div class="article-wrap" v-for="(article, index) in articles.slice(1,this.articlesToShow)" :key="index">
        <Article 
          :article="article" 
          :index="index"
          :query-params="currentQueryParams"
        />
      </div>
    </div>
    <BaseButton v-if="articlesToShow < articles.length" class="show-more" @click="articlesToShow += 4">
      Show More
    </BaseButton>
    <NewsletterSubscribe />
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import VueSlickCarousel from 'vue-slick-carousel'
import ArticleMain from '@/components/articles/ArticleMain.vue';
import Article from '@/components/articles/Article.vue'
import SearchArticles from '@/components/articles/SearchArticles.vue'
import NewsletterSubscribe from '@/components/shared/NewsletterSubscribe.vue'

export default {

  components: {
    ArticleMain,
    Article,
    VueSlickCarousel,
    SearchArticles,
    NewsletterSubscribe
  },

  data() {
    return {
      articlesToShow: 5,
      activeTag: '',
      dateDropdownSortVisible: false,
      dateSortStatus: 'desc',
      filterDropdownVisible: false,
      selectedTags: [],
      tempSelectedTags: [],
      selectedArticleSlugs: null,
      isLoading: false,
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

  async fetch() {
    const { tag, tags, sort } = this.$route.query
    
    if (tag) {
      this.activeTag = tag
      this.selectedTags = []
    } else if (tags) {
      this.selectedTags = tags.split(',')
      this.activeTag = ''
    }
    
    this.dateSortStatus = sort || 'desc'
    
    await this.fetchArticlesOnce()
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
    ...mapGetters('articles/', ['getAllArticles', 'getTags']),

    articles() {
      let articlesRaw = this.getAllArticles.slice()

      if (this.selectedArticleSlugs) {
        articlesRaw = articlesRaw.filter(item => this.selectedArticleSlugs.includes(item.slug))
      }

      return articlesRaw
    },
    
    mainArticle() {
      return this.articles[0]
    },
    
    tags() {
      return this.getTags
    },

    currentQueryParams() {
      const query = {};
      
      if (this.activeTag) {
        query.tag = this.activeTag;
      }
      
      if (this.selectedTags.length > 0) {
        query.tags = this.selectedTags.join(',');
      }
      
      if (this.dateSortStatus) {
        query.sort = this.dateSortStatus;
      }
      
      return query;
    }
  },

  watch: {
    '$route.query': {
      handler(newQuery) {
        const { tag, tags, sort } = newQuery

        if (!tag && !tags) {
          this.activeTag = ''
          this.selectedTags = []
        }

        this.dateSortStatus = sort || 'desc'

        if (!tags && !this.selectedTags.length) {
          this.filterDropdownVisible = false
        }
        if (!sort) {
          this.dateDropdownSortVisible = false
        }
      },
      immediate: true
    },
  },

  async created() {
    if (!this.tags || this.tags.length === 0) {
      await this.$store.dispatch('articles/fetchTags')
    }
  },

  methods: {
    async fetchArticlesOnce() {
      const params = {
        sortOrder: this.dateSortStatus === 'desc' ? '-fields.date' : 'fields.date'
      }
      
      if (this.activeTag) {
        params.tags = [this.activeTag]
      } else if (this.selectedTags.length > 0) {
        params.tags = this.selectedTags
      }
      
      await this.$store.dispatch('articles/fetchArticles', params)
    },

    async updateDateSort(status) {
      this.selectedArticleSlugs = null
      this.dateSortStatus = status
      this.dateDropdownSortVisible = false
      
      this.updateQueryParams()
      
      await this.fetchArticlesOnce()
    },

    async setSingleTag(tag) {
      this.selectedArticleSlugs = null
      this.activeTag = tag
      this.selectedTags = []
      this.tempSelectedTags = []
      this.filterDropdownVisible = false
      if (!tag) {
        this.$refs.searchComponent.clearSearch()
      }
      
      this.updateQueryParams()
      
      await this.fetchArticlesOnce()
    },

    toggleTempTag(tag) {
      const index = this.tempSelectedTags.indexOf(tag)
      if (index === -1) {
        this.tempSelectedTags.push(tag)
      } else {
        this.tempSelectedTags.splice(index, 1)
      }
    },

    async applyFilters() {
      this.selectedArticleSlugs = null
      this.selectedTags = [...this.tempSelectedTags]
      this.activeTag = ''
      this.filterDropdownVisible = false
      
      this.updateQueryParams()
      
      await this.fetchArticlesOnce()
    },

    toggleFilterDropdown() {
      this.filterDropdownVisible = !this.filterDropdownVisible
      if (this.filterDropdownVisible) {
        this.tempSelectedTags = [...this.selectedTags]
        this.dateDropdownSortVisible = false
        document.body.classList.add('filter-open')
      } else {
        document.body.classList.remove('filter-open')
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
      
      if (this.activeTag) {
        query.tag = this.activeTag
      }
      
      if (this.selectedTags.length > 0) {
        query.tags = this.selectedTags.join(',')
      }
      
      query.sort = this.dateSortStatus

      this.$router.replace({
        query: Object.keys(query).length ? query : undefined
      }).catch(err => {
        if (err && err.name !== 'NavigationDuplicated') {
          console.error(err)
        }
      })
    },

    async updateArticleFilter(slugs) {
      this.selectedArticleSlugs = slugs
      if (!slugs) {
        await this.fetchArticlesOnce()
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.blog {
  position: relative;
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
    align-items: center;
    position: relative;
    justify-content: space-between;
    cursor: pointer;

    @include tablet-and-up {
      justify-content: flex-start;
      gap: 16px;
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
      left: 0;
      position: absolute;
      top: calc(100% + 20px);
      background-color: white;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      padding: 0;
      border: 1px solid black;
      z-index: 1;
      display: flex;
      flex-direction: column;
      max-width: fit-content;
      
      @include tablet-and-up {
        left: calc(100% - 240px);
      }

      div {
        padding: 20px 18px;
        font-weight: 700;
        font-size: 24px;
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

    .filter-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      z-index: 998;
    }

    .dropdown-menu.filter-menu {
      position: fixed;
      top: 0;
      right: 0;
      left: auto;
      width: 400px;
      background-color: white;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      border: 1px solid black;
      z-index: 999;
      display: flex;
      flex-direction: column;
      max-height: 80vh;
      overflow-y: auto;

      .filter-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 18px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);

        &:hover {
          cursor: default;
          background-color: transparent;
        }
      }

      .filter-title {
        padding: 0;
        font-weight: 700;
        font-size: 24px;

        &:hover {
          cursor: default;
          background-color: transparent;
        }
      }

      .close-button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 4px;

        &:hover {
          cursor: pointer;
          background-color: transparent;
        }
      }

      .checkbox-item {
        padding: 12px 18px;
        height: 100%;
        display: flex;
        align-items: center;
        gap: 12px;
        
        &:hover {
          cursor: pointer;
        }

        input[type="checkbox"] {
          width: 20px;
          height: 20px;
          cursor: pointer;
          accent-color: $main-green;
          border-radius: 4px;
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
        padding: 16px 18px;
        margin-top: auto;

        .apply-button {
          width: 100%;
          padding: 12px;
          background: $main-green;
          color: white;
          border: none;
          border-radius: 54px;
          cursor: pointer;
          font-weight: 500;
        }
      }
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.3s;
    }

    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }

  .sort-by-item {
    &:hover {
      cursor: pointer;
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

  .sort-by-item {
    position: relative;
  }

  .search-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: space-between;
    margin-bottom: 30px;
    
    @include tablet-and-up {
      margin-bottom: 40px;
      flex-direction: row;
    }

    @include desktop-and-up {
      margin-bottom: 50px;
    }
  }

  .sort-by-item .dropdown-menu {
    min-width: 240px;
  }
}

.sort-value {
  &:hover {
    cursor: pointer;
    background-color: $main-green;
  }
}

:global(body.filter-open) {
  overflow: hidden;
}

</style>
