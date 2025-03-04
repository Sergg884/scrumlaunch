<template>
  <section class="seo">
    <div class="breadcrumbs">
      <nuxt-link :to="getBlogPath">blog</nuxt-link>
      <template v-for="(crumb, index) in breadcrumbs">
        / <span :key="index">{{ crumb }}</span>
      </template>
    </div>
    
    <div class="article-layout">
      <div class="main-content">
        <div class="article-header">
          <h1 class="title-global">{{ article?.title }}</h1>
        </div>

        <div class="container">
          <div v-show="article" class="body" v-html="article?.text"></div>

          <div class="print-button-container">
            <button class="print-button" @click="printArticle">
              <img src="@/assets/icons/print.svg" alt="print" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <div class="description">
            <div class="description-header">
              <div class="left">
                <nuxt-img 
                  :src="article?.authorImg.url || '/pages/blog/default-author.jpg'" 
                  :alt="'article-author-img'" 
                />
                <div class="meta">
                  <p class="author">
                    {{ article?.authorName || 'Thomas Jefferson' }}
                  </p>
                  <p class="date" v-if="article?.date">
                    {{ article?.date }}
                  </p>
                </div>
              </div>

              <div class="article-actions">
                <ShareButton 
                  :url="shareUrl" 
                  :title="article?.title || ''" 
                  :description="article?.shortText || ''" 
                />
              </div>
            </div>

            <div class="tags">
              <div 
                v-for="tag in article?.tags" 
                :key="tag" 
                class="tag"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>

        <div class="mobile-recommended">
          <RecommendedArticles
            :articles="recommendedArticles"
            :query-params="$route.query"
          />
        </div>

        <OtherArticles 
          :current-slug="$route.path"
          :query-params="$route.query"
        />
      </div>

      <div class="sidebar">
        <RecommendedArticles
          :articles="recommendedArticles"
          :query-params="$route.query"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ShareButton from '~/components/common/ShareButton.vue'
import OtherArticles from '@/components/articles/OtherArticles.vue'
import RecommendedArticles from '@/components/articles/RecommendedArticles.vue'

export default {
  components: {
    ShareButton,
    OtherArticles,
    RecommendedArticles
  },

  data() {
    return {
    }
  },

  head() {
    return {
      title: this.article?.metaTitle,
      meta: [
        {
          hid: 'og:description',
          name: 'description',
          content: this.article?.metaDescription,
        },
      ],
    }
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles']),
    article() {
      const articlesRaw = this.getAllArticles.slice()
      const currentArticle = articlesRaw.find(article => article.slug === this.$route.path)

      return currentArticle
    },
    recomended() {
      const array = [... this.getAllArticles]
      return array.sort(() => 0.5 - Math.random()).slice(0, 3)
    },
    getBlogPath() {
      const currentQuery = this.$route.query
      const query = {}

      if (currentQuery.category) {
        query.category = currentQuery.category
      }

      if (currentQuery.sort) {
        query.sort = currentQuery.sort
      }

      return {
        path: '/blog',
        query: Object.keys(query).length ? query : undefined
      }
    },
    breadcrumbs() {
      const path = this.$route.path
        .split('/')
        .filter(segment => segment && segment !== 'blog');

      return path.map(segment => decodeURIComponent(segment));
    },
    shareUrl() {
      const baseUrl = process.env.API_URL ? process.env.API_URL.replace(/\/$/, '') : window.location.origin;
      return `${baseUrl}${this.$route.path}`;
    },
    recommendedArticles() {
      const allArticles = [...this.getAllArticles]
        .filter(article => article.slug !== this.$route.path)
        .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))
      
      if (!this.article?.tags?.[0]) {
        return allArticles.slice(0, 5)
      }
      
      const currentTag = this.article.tags[0]
      
      const tagArticles = allArticles
        .filter(article => article.tags && article.tags.includes(currentTag))
      
      if (tagArticles.length >= 5) {
        return tagArticles.slice(0, 5)
      }
      
      const otherArticles = allArticles
        .filter(article => !article.tags || !article.tags.includes(currentTag))
      
      return [...tagArticles, ...otherArticles].slice(0, 5)
    }
  },

  methods: {
    printArticle() {
      const printStyles = `
        <style>
          @media print {
            .breadcrumbs, 
            .print-button, 
            .recommended-articles,
            .article {
              display: none !important;
            }
            .body {
              padding: 0 !important;
            }
            .title-global {
              font-size: 24px !important;
              text-align: left !important;
              margin-bottom: 20px !important;
            }
            .description {
              margin: 20px 0 !important;
              border-top: 1px solid #000 !important;
            }
            @media {
              * {
                max-width: none !important;
              }
            }
          }
        </style>
      `;

      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
          <head>
            <title>${this.article.title}</title>
            ${printStyles}
          </head>
          <body>
            <h1>${this.article.title}</h1>
            ${this.article.text}
            <div class="description">
              <p>Author: ${this.article.authorName || 'Thomas Jefferson'}</p>
              <p>Date: ${this.article.date}</p>
              <p>Category: ${this.article.category}</p>
            </div>
          </body>
        </html>
      `);

      printWindow.document.close();
      printWindow.focus();
      
      setTimeout(() => {
        printWindow.print();

        const checkClosed = setInterval(() => {
          if (printWindow.closed) {
            clearInterval(checkClosed);
          } else {
            printWindow.close();
          }
        }, 1000);
      }, 500);
    }
  }
}
</script>

<style lang="scss">
.seo {
  max-width: 1440px;
  margin: 80px auto;
  padding: 0 20px;

  @include tablet-and-up {
    padding: 0 30px;
    margin: 120px auto;
  }

  @include desktop-and-up {
    padding: 0 120px;
  }

  .article-layout {
    display: flex;
    gap: 60px;
    position: relative;
  }

  .main-content {
    width: 100%;
    max-width: 100%;

    @include desktop-and-up {
      max-width: 800px;
    }
  }

  .sidebar {
    display: none;

    @include desktop-and-up {
      display: block;
      position: sticky;
      top: 40px;
      height: fit-content;
    }
  }

  .mobile-recommended {
    display: block;
    margin: 40px 0;

    @include desktop-and-up {
      display: none;
    }
  }

  .body {
    margin-bottom: 60px;
    text-align: left;

    img {
      max-width: 100%;
      height: auto;
    }
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

    span {
      color: $dark-grey;
    }

    @include tablet-and-up {
      font-size: 20px;
      margin-bottom: 14px;
    }

    @include desktop-and-up {
      margin-bottom: 16px;
    }
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

  .left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .article-actions {
    align-self: flex-end;
  }

  .description-header {
    display: flex;
    justify-content: space-between;
  }

  .description {
    border-top: 1px solid $main-black;
    display: flex;
    flex-direction: column;
    padding-top: 16px;
    gap: 26px;

    img {
      height: 44px;
      width: 44px;
      border-radius: 100%;
    }

    .meta {

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
        text-align: left;
        font-weight: 400;
        font-size: 14px;
        color: $dark-grey;
        margin-bottom: 0;
      }
    }
  }

  .container {
    padding: 0;
    width: 100%;
    max-width: 100%;

    @include desktop-and-up {
      max-width: 800px;
    }
  }

  .print-button-container {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 26px;
  }

  .article-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    .title-global {
      margin-bottom: 0;
      flex: 1;
    }

    .article-actions {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .print-button {
      display: flex;
      height: 40px;
      align-items: center;
      gap: 8px;
      padding: 8px;
      background: white;
      border: 1px solid $main-black;
      cursor: pointer;
      transition: all 0.3s;

      img {
        width: 20px;
        height: 20px;
      }

      span {
        display: none;
      }

      &:hover {
        background: $main-green;
      }

      @include tablet-and-up {
        padding: 8px 16px;
        
        span {
          display: inline;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>