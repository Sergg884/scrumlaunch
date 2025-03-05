<template>
  <div class="recommended-articles">
    <div class="recommended-content">
      <h2 class="title">Recommended Articles</h2>
      <div class="articles-list">
        <div 
          v-for="article in localRecommendedArticles" 
          :key="article.slug + '_' + refreshCounter" 
          class="article-item"
        >
          <nuxt-link 
            :to="{ path: article.slug, query: queryParams }" 
            class="article-title"
          >
            {{ article.title }}
          </nuxt-link>
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
                @click.prevent="updateTag(tag)"
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecommendedArticles',

  props: {
    currentSlug: {
      type: String,
      required: true
    },
    currentTag: {
      type: String,
      default: ''
    },
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },

  data() {
    return {
      isLoading: false,
      isInitialLoading: true,
      localRecommendedArticles: [],
      refreshCounter: 0,
      retryCount: 0,
      maxRetries: 5
    }
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles']),
  },

  watch: {
    currentSlug: {
      immediate: true,
      handler() {
        this.refreshCounter++;
        this.updateRecommendations();
      }
    },
    currentTag: {
      immediate: true,
      handler() {
        this.updateRecommendations();
      }
    },
    getAllArticles: {
      immediate: true,
      deep: true,
      handler() {
        this.updateRecommendations();
      }
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.loadArticles();
    });
  },

  methods: {
    async loadArticles() {
      if (this.isLoading) return;
      
      this.isLoading = true;
      try {
        await this.$store.dispatch('articles/fetchArticles');
        this.updateRecommendations();
      } catch (error) {
        console.error('Error loading articles:', error);
      } finally {
        this.isLoading = false;
      }
    },
    
    updateRecommendations() {
      if (this.getAllArticles.length === 0) {
        if (this.retryCount < this.maxRetries) {
          this.retryCount++;
          setTimeout(() => {
            this.loadArticles();
          }, 500);
          return;
        } else {
          this.isInitialLoading = false;
          return;
        }
      }
      
      const allArticles = [...this.getAllArticles]
        .filter(article => article.slug !== this.currentSlug)
        .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate));

      const { tag, tags, sort } = this.queryParams;

      if (sort === 'asc') {
        allArticles.sort((a, b) => new Date(a.isoDate) - new Date(b.isoDate));
      }

      if (tag) {
        const tagArticles = allArticles.filter(article => 
          article.tags && article.tags.includes(tag)
        );
        
        if (tagArticles.length >= 5) {
          this.localRecommendedArticles = tagArticles.slice(0, 5);
          return;
        }

        const remainingArticles = allArticles.filter(article => 
          !tagArticles.includes(article)
        );
        
        this.localRecommendedArticles = [...tagArticles, ...remainingArticles].slice(0, 5);
      } else if (tags) {
        const tagArray = tags.split(',');
        const tagArticles = allArticles.filter(article => 
          article.tags && tagArray.some(tag => article.tags.includes(tag))
        );
        
        if (tagArticles.length >= 5) {
          this.localRecommendedArticles = tagArticles.slice(0, 5);
          return;
        }

        const remainingArticles = allArticles.filter(article => 
          !tagArticles.includes(article)
        );
        
        this.localRecommendedArticles = [...tagArticles, ...remainingArticles].slice(0, 5);
      } else {
        this.localRecommendedArticles = allArticles.slice(0, 5);
      }

      this.isInitialLoading = false;
    },
    
    updateTag(tag) {
      const query = { ...this.queryParams, tag };
      this.$router.push({ query });
    }
  }
}
</script>

<style lang="scss" scoped>
.recommended-articles {
  width: 100%;
  max-width: 100%;
  margin: 40px 0;

  @include desktop-and-up {
    max-width: 320px;
    margin: 0;
    position: sticky;
    top: 40px;
    height: 100vh;
    overflow: hidden;
  }

  .recommended-content {
    @include desktop-and-up {
      max-height: calc(100vh - 80px);
      overflow-y: auto;
      padding-right: 16px;
      
      &::-webkit-scrollbar {
        width: 4px;
      }
      
      &::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      
      &::-webkit-scrollbar-thumb {
        background: $dark-grey;
        border-radius: 2px;
      }
    }
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 14px;
    position: sticky;
    top: 0;
    background: white;
    padding: 0;
    z-index: 1;
  }

  .articles-list {
    display: flex;
    flex-direction: column;
  }

  .article-item {
    padding: 16px 0;
    border-bottom: 1px solid rgba($main-black, 0.1);

    &:last-child {
      border-bottom: none;
    }

    &.empty {
      opacity: 0.5;
    }
  }

  .article-title {
    display: block;
    text-align: left;
    font-size: 18px;
    font-weight: 800;
    line-height: 18px;
    color: $main-black;
    text-decoration: none;
    margin-bottom: 8px;
    transition: color 0.3s;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis; 

    &:hover {
      color: $main-green;
    }

    &.placeholder {
      color: $dark-grey;
      font-style: italic;
    }
  }

  .article-meta {
    font-size: 14px;
    color: $dark-grey;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;

    .placeholder {
      font-style: italic;
    }
  }

  .article-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    
    .tag {
      background: $main-black;
      border: 1px solid transparent;
      color: #fff;
      padding: 4px 12px;
      font-size: 12px;
      font-weight: 500;
      text-transform: capitalize;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        background-color: #fff;
        border: 1px solid $main-black;
        color: $main-black;
      }
    }
  }

  .read-more {
    white-space: nowrap;
    color: $main-black;
    width: max-content;
    font-size: 16px;
    font-weight: 700;
    background: $main-green;
  }
}
</style> 