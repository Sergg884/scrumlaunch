<template>
  <div class="search-container" v-click-outside="closeSearch">
    <div class="search-input-wrapper">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search articles..."
        @input="debounceSearch"
        @focus="showResults = true"
        class="search-input"
      />
      <button
        v-if="searchQuery"
        @click="clearSearch"
        class="clear-button"
        type="button"
        aria-label="Clear search"
      >
        Clear
      </button>
    </div>

    <transition name="fade">
      <div v-if="showResults" class="search-results">
        <template v-if="searchResults.length > 0">
          <div
            v-for="(result, index) in searchResults"
            :key="index"
            class="search-result"
            @click="selectResult(result.article)"
          >
            <template v-if="result.type === 'title'">
              <div class="result-title">
                <span>{{ result.matchText }}</span>
              </div>
            </template>
            <template v-else>
              <div class="result-title">{{ result.article.title }}</div>
              <div class="result-content">{{ result.matchText }}</div>
            </template>
          </div>
        </template>
        <div v-else-if="searchQuery && searchQuery.trim()" class="no-results">
          No articles found for "{{ searchQuery }}"
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  name: 'SearchArticles',
  
  data() {
    return {
      searchQuery: '',
      showResults: false,
      searchResults: []
    }
  },

  computed: {
    ...mapGetters('articles/', ['searchArticles'])
  },

  watch: {
    searchQuery(newValue) {
      if (!newValue || newValue.trim() === '') {
        this.searchResults = []
        this.showResults = false
        this.$emit('filter-update', null)
      }
    }
  },

  created() {
    this.debounceSearch = debounce(this.performSearch, 300)
  },

  methods: {
    performSearch() {
      if (!this.searchQuery || this.searchQuery.trim() === '') {
        this.searchResults = []
        this.showResults = false
        this.$emit('filter-update', null)
        return
      }
      this.searchResults = this.searchArticles(this.searchQuery)
      this.showResults = true
      const articleSlugs = this.searchResults.map(result => result.article.slug)
      this.$emit('filter-update', articleSlugs.length > 0 ? articleSlugs : null)
    },

    clearSearch() {
      this.searchQuery = ''
      this.searchResults = []
      this.showResults = false
      this.$emit('filter-update', null)
    },

    closeSearch() {
      this.showResults = false
    },

    selectResult(selectedArticle) {
      this.$emit('filter-update', [selectedArticle.slug])
      this.showResults = false
    }
  },

  directives: {
    'click-outside': {
      bind(el, binding) {
        el.clickOutsideEvent = (event) => {
          if (!(el === event.target || el.contains(event.target))) {
            binding.value()
          }
        }
        document.addEventListener('click', el.clickOutsideEvent)
      },
      unbind(el) {
        document.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  padding-right: 80px;
  border: 1px solid $main-black;
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: $main-green;
    box-shadow: 0 0 0 0 rgba($main-green, 0.2);
  }
}

.clear-button {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 14px;
  color: $dark-grey;
  transition: all 0.2s ease;

  &:hover {
    color: $main-black;
  }
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.no-results {
  padding: 16px;
  text-align: center;
  color: $dark-grey;
  font-size: 14px;
}

.search-result {
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba($main-green, 0.1);
  }

  &:not(:last-child) {
    border-bottom: 1px solid rgba($main-black, 0.1);
  }
}

.result-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.result-content {
  font-size: 14px;
  color: $dark-grey;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style> 