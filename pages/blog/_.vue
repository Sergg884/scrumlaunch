<template>
  <section class="seo">
    <div class="breadcrumbs">
      <nuxt-link :to="getBlogPath">blog</nuxt-link>
      <template v-for="(crumb, index) in breadcrumbs">
        / <span :key="index">{{ crumb }}</span>
      </template>
    </div>
    <div class="article-header">
      <h1 class="title-global">{{ article.title }}</h1>
      <div class="article-actions">
        <ShareButton 
          :url="shareUrl" 
          :title="article.title" 
          :description="article.shortText" 
        />
        <button class="print-button" @click="printArticle">
          <img src="@/assets/icons/print.svg" alt="print" />
          <span>Print / Save PDF</span>
        </button>
      </div>
    </div>
    <div v-show="article" class="body" v-html="article.text"></div>
    <div class="description">
      <div class="left">
        <img :src="article.authorImg.url ? article.authorImg.url : '/pages/blog/default-author.jpg'" :alt="'article-author-img'" />
        <div class="meta">
          <p class="author">
            {{  article.authorName ? article.authorName : 'Thomas Jefferson' }}
          </p>
          <p class="date">
            {{ article.date }}
          </p>
        </div>
      </div>
      <div class="categories" v-if="article.category">
        <div class="category">
          {{ article.category }}
        </div>
      </div>
    </div>
    <h2 class="recommended-articles">
      Recommended articles
    </h2>
    <div class="article" v-for="i in recomended" :key="i.title">
      <img class="hero" :src="i.previewImage.url" :alt="'article-recomended-hero-' + i" />
      <div class="details">
        <nuxt-link class="title" :to="i.slug">{{ i.title }}</nuxt-link>
        <p class="text">
          {{ i.shortText }}
        </p>
        <nuxt-link class="link" :to="i.slug">Read more</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import ShareButton from '~/components/common/ShareButton.vue'

export default {
  components: {
    ShareButton
  },

  data() {
    return {
    }
  },

  head() {
    return {
      title: this.article.metaTitle,
      meta: [
        {
          hid: 'og:description',
          name: 'description',
          content: this.article.metaDescription,
        },
      ],
    }
  },

  computed: {
    ...mapGetters('articles/', ['getAllArticles']),
    article() {
      const articlesRaw = this.getAllArticles.slice()
      return articlesRaw.find(article => article.slug === this.$route.path)
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
      
      if (currentQuery.categories) {
        query.categories = currentQuery.categories
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
  max-width: 375px;
  padding: 0 20px;
  margin: 80px auto;

  @include tablet-and-up {
    max-width: 768px;
    padding: 0 30px;
    margin: 120px auto;
  }

  @include desktop-and-up {
    max-width: 1440px;
    padding: 0 120px;
    margin: 120px auto;
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