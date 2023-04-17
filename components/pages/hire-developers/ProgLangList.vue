<template>
  <div>
    <div class="langs">
      <div
        v-for="(lang_item, index) in all_langs"
        :key="index"
        class="langs__item"
      >
        <NuxtLink :to="'/hire-developers/' + lang_item.url">{{
          lang_item.lang
        }}</NuxtLink>
      </div>
    </div>

    <div class="btn_wrap">
      <button class="btn" @click="getLangsList()">view all</button>
    </div>
  </div>
</template>

<script>
import dev_langs from '@/seo/development_languages.json'

export default {
  props: {
    langs_num: {
      type: Number,
      default: 18,
    },
  },

  data: () => ({
    all_langs: null,
  }),

  watch: {
    $route() {
      if (this.$route.name === 'ProgLang') {
        this.getLangsList(this.langs_num)
      }
    },
  },

  mounted() {
    this.getLangsList(this.langs_num)
  },

  methods: {
    getLangsList(num) {
      this.all_langs = num === undefined ? dev_langs : dev_langs.slice(0, num)
    },
  },
}
</script>

<style lang="scss" scoped>
.langs {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1200px;

  &__item {
    flex: 0 0 33.33333%;
    margin-bottom: 40px;

    &:nth-child(3n) {
      max-width: 270px;
    }

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 140%;
      color: #1e1f21;
      text-decoration: none;

      &:hover {
        color: #12e2b0;
      }
    }
  }
}

.btn_wrap {
  display: flex;
  justify-content: center;
  margin-top: 80px;
}

.btn {
  padding: 16px 40px;
  min-width: 360px;
  height: 82px;
  width: auto;
  border-radius: 54px;
  font-size: 21.6867px;
  line-height: 150%;
  text-align: center;

  @media screen and (max-width: 1899px) {
    font-size: 18px;
  }
}
</style>
