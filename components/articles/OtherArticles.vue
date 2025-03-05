<template>
  <div class="other-articles">
    <h2 class="title">Other Articles</h2>
    <div 
      v-for="article in articles" 
      :key="article.slug" 
      class="article-item"
    >
      <nuxt-img 
        :src="article.previewImage.url" 
        :alt="article.title"
        class="article-image" 
      />
      <div class="article-content">
        <nuxt-link 
          :to="{ path: article.slug, query: queryParams }" 
          class="article-title"
        >
          {{ article.title }}
        </nuxt-link>
        <p class="article-description">{{ article.shortText }}</p>
        <div class="article-meta">
          <span class="author">{{ article.authorName || 'Thomas Jefferson' }}</span>
          <span class="date">{{ article.date }}</span>
        </div>
        <div class="article-footer">
          <div class="tags">
            <span 
              v-for="tag in article.tags" 
              :key="tag" 
              class="tag"
              @click="updateTag(tag)"
            >
              {{ tag }}
            </span>
          </div>
          <nuxt-link 
            :to="{ path: article.slug, query: queryParams }" 
            class="read-more"
          >
            Read more
          </nuxt-link>
        </div>
      </div>
    </div>
    <div 
      v-if="hasMoreArticles" 
      ref="sentinel"
      class="sentinel"
    ></div>
    <button 
      v-if="!allArticlesLoaded" 
      class="load-more-button"
      @click="loadMoreArticles" 
    >
      Load More
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'OtherArticles',

  props: {
    currentSlug: {
      type: String,
      required: true
    },
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      articles: [],
      page: 0,
      articlesPerPage: 3,
      allArticlesLoaded: false
    }
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles']),
    
    filteredArticles() {
      const { sort } = this.queryParams
      const articles = this.getAllArticles.filter(article => article.slug !== this.currentSlug)

      if (sort === 'asc') {
        articles.sort((a, b) => new Date(a.isoDate) - new Date(b.isoDate))
      } else {
        articles.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))
      }

      return articles
    },

    hasMoreArticles() {
      return !this.allArticlesLoaded && this.filteredArticles.length > this.articles.length
    }
  },

  watch: {
    queryParams: {
      handler() {
        this.resetAndReload()
      },
      deep: true
    }
  },

  mounted() {
    this.setupInfiniteScroll()
    this.loadInitialArticles()
  },

  beforeDestroy() {
    this.destroyObserver()
  },

  methods: {
    setupInfiniteScroll() {
      this.destroyObserver()

      this.observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !this.loading && this.hasMoreArticles) {
            this.loadMoreArticles()
          }
        },
        {
          rootMargin: '100px',
          threshold: 0.1
        }
      )

      this.$nextTick(() => {
        if (this.$refs.sentinel) {
          this.observer.observe(this.$refs.sentinel)
        }
      })
    },

    destroyObserver() {
      if (this.observer) {
        this.observer.disconnect()
        this.observer = null
      }
    },

    resetAndReload() {
      this.articles = []
      this.page = 1
      this.allArticlesLoaded = false
      this.loadInitialArticles()
      this.$nextTick(() => {
        this.setupInfiniteScroll()
      })
    },

    loadInitialArticles() {
      this.articles = this.filteredArticles.slice(0, this.articlesPerPage)
      this.checkIfAllLoaded()
    },

    loadMoreArticles() {
      if (this.allArticlesLoaded) return
      
      const startIndex = this.page * this.articlesPerPage
      const endIndex = startIndex + this.articlesPerPage
      const newArticles = this.filteredArticles.slice(startIndex, endIndex)

      if (newArticles.length > 0) {
        this.articles.push(...newArticles)
        this.page++
        this.checkIfAllLoaded()
      } else {
        this.allArticlesLoaded = true
      }
    },

    checkIfAllLoaded() {
      this.allArticlesLoaded = this.articles.length >= this.filteredArticles.length
    },

    updateTag(tag) {
      const query = { ...this.queryParams, tag }
      this.$router.push({ query })
    }
  }
}
</script>

<style lang="scss" scoped>
.other-articles {
  margin-top: 60px;

  .title {
    font-size: 32px;
    margin-bottom: 30px;
  }

  .article-item {
    display: flex;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid rgba($main-black, 0.1);

    &:last-child {
      border-bottom: none;
    }
  }

  .article-image {
    width: 132px;
    height: 132px;
    object-fit: cover;
  }

  .article-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .article-title {
    font-size: 24px;
    font-weight: 600;
    color: $main-black;
    text-decoration: none;
    text-align: left;
    transition: color 0.3s;

    &:hover {
      color: $main-green;
    }
  }

  .article-description {
    text-align: left;
    font-size: 16px;
    color: $dark-grey;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: $dark-grey;
  }

  .article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tags {
    display: flex;
    width: 100%;
    gap: 16px;
    flex-wrap: wrap;
    
    .tag {
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
        order: 1;
      }

      &:hover {
        background-color: #fff;
        border: 1px solid $main-black;
        color: $main-black;
        
      }
    }
  }
  
  .author {
    font-size: 18px;
    font-weight: 700;
    color: $main-black;
  }

  .read-more {
    white-space: nowrap;
    color: $main-black;
    width: max-content;
    font-size: 24px;
    font-weight: 700;
    background: $main-green;
  }

  .sentinel {
    width: 100%;
    height: 1px;
    margin: 20px 0;
  }

  .load-more-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: $main-green;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: darken($main-green, 10%);
    }
  }
}
</style> 