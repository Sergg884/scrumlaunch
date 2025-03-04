<template>
  <div class="recommended-articles">
    <div class="recommended-content">
      <h2 class="title">Recommended Articles</h2>
      <div class="articles-list">
        <div 
          v-for="article in articles" 
          :key="article.slug" 
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
export default {
  name: 'RecommendedArticles',

  props: {
    articles: {
      type: Array,
      required: true
    },
    queryParams: {
      type: Object,
      default: () => ({})
    }
  },

  methods: {
    updateTag(tag) {
      const query = { ...this.queryParams, tag }
      this.$router.push({ query })
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