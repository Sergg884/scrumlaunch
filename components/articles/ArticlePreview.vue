<template>
  <div class="article_preview" :class="{ first: first }">
    <div
      v-show="item.previewImage.url"
      class="article_preview__image"
      :style="{
        'background-image': `url(${item.previewImage.url})`,
      }"
    ></div>

    <div class="article_preview__info">
      <div class="article_preview__category">
        <span>Articles</span> {{ item.category }}
      </div>
      <NuxtLink class="article_preview__title" :to="item.slug">{{
        item.title
      }}</NuxtLink>
      <div class="article_preview__short_text">{{ item.shortText }}</div>
      <div class="article_preview__date">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: [Object, Boolean],
      default: () => ({
        category: '',
        date: '',
        metaDescription: '',
        metaTitle: '',
        shortText: '',
        title: '',
        previewImage: {
          url: ``,
        },
        slug: '',
        text: '',
      }),
    },

    first: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.article_preview {
  flex: 0 0 100%;
  margin-bottom: 40px;
  max-width: calc(50% - 20px);
  border: 1px solid #000;
  box-sizing: border-box;

  @media screen and (max-width: 968px) {
    max-width: unset;
  }

  * {
    box-sizing: border-box;
  }

  &:nth-child(odd) {
    margin-right: 40px;
  }

  $root: &;

  &__image {
    width: 100%;
    min-height: 672px;
    border-bottom: 1px solid #000;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;

    @media screen and (max-width: 1440px) {
      min-height: 454px;
    }
  }

  &__info {
    padding: 8px;
    text-align: left;

  }

  &__category {
    display: flex;
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 140%;
    font-weight: 600;

    span {
      position: relative;

      &:after {
        content: '';
        position: relative;
        display: inline-block;
        flex: 0 0 8px;
        margin-left: 10px;
        margin-right: 10px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #000;
      }
    }
  }

  &__title {
    display: block;
    margin-bottom: 20px;
    font-size: 30px;
    line-height: 140%;
    font-weight: 700;
    text-decoration: none;
    color: #1e1f21;
  }

  &__short_text {
    margin-bottom: 40px;
    font-size: 16px;
    line-height: 140%;
    font-weight: 600;
  }

  &__date {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }

  &.first {
    display: flex;
    flex-direction: column;
    margin-right: 0;
    max-width: 100%;

    @media screen and (min-width: 768px) {
      flex-direction: initial;
    }

    #{$root}__image {
      flex: 0 0 100%;
      border-bottom: none;
      border-right: 1px solid #000;

      @media screen and (min-width: 768px) {
        max-width: calc(50% - 20px);
      }

      @media screen and (max-width: 1440px) {
        min-height: 672px;
      }
    }

    #{$root}__info {
      padding: 20px;

      @media screen and (min-width: 768px) {
        padding: 80px 40px;
      }
    }

    #{$root}__category {
      margin-bottom: 60px;
    }

    #{$root}__title {
      margin-bottom: 40px;
      font-weight: 900;
      font-size: 24px;
      line-height: 140%;
      letter-spacing: 0.02em;
      text-transform: uppercase;

      @media screen and (min-width: 768px) {
        font-size: 48px;
      }
    }

    #{$root}__short_text {
      margin-bottom: 80px;
    }
  }
}
</style>
