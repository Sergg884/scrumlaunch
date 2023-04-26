<template>
  <section>
    <h2 class="title-global">
      Blog
    </h2>
    <div class="articles" v-if="mainArticle">
      <ArticleMain 
        :article="mainArticle"
      />
      <div class="article-wrap" v-for="(article, index) in articles.slice(1,this.articlesToShow)" :key="index">
        <Article :article="article" :index="index" />
      </div>
    </div>
    <BaseButton v-if="articlesToShow < getAllArticles.length" class="show-more" @click="articlesToShow += appendArticles">
      View more articles
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
      articlesToShow: 3,
      activeCategory: '',
      dateDropdownSortVisible: false,
      dateSortStatus: 'Newest',
      appendArticles: 2,
    };
  },

  mounted() {
    if (window.outerWidth > 1440) {
      this.appendArticles = 3
      this.articlesToShow = 4
    }
    window.onresize = () => {
      if (window.innerWidth > 1440) {
        this.appendArticles = 3
        this.articlesToShow = 4
      } else {
        this.appendArticles = 2
        this.articlesToShow = 3
      }
    }
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

section {

  h2 {
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
      text-align: center;
    }
  }

  .articles {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;

    @include tablet-and-up {
      flex-direction: row;
      flex-wrap: wrap;
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }

    .article-wrap {
      @include tablet-and-up {
        flex-basis: calc(50% - 10px);
      }

      @include desktop-and-up {
        flex-basis: calc(33% - 10px);
      }
    }
  }

  .show-more {
    margin: auto;
  }
}

</style>