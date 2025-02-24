<template>
  <div class="article">
    <img class="hero" :src="article.previewImage.url" :alt="'article-' + index" />
    <div class="categories">
      <div class="category">
        {{ article.category ? article.category : 'insights'  }}
      </div>
    </div>
    <nuxt-link class="title" :to="article.slug">{{ article.title }}</nuxt-link>
    <p class="text">
      {{ article.shortText }}
    </p>
    <nuxt-link class="link" :to="article.slug">Read more</nuxt-link>
    <div class="description">
      <img :src="article.authorImg.url ? article.authorImg.url : '/pages/blog/default-author.jpg'" :alt="'article-' + index + 'author-img'" />
      <div class="meta">
        <p class="author">
          {{  article.authorName ? article.authorName : 'Thomas Jefferson' }}
        </p>
        <p class="date">
          {{ article.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
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
    index: {
      type: Number,
      required: true
    }
  },
}
</script>
<style lang="scss" scoped>

.article {
  display: flex;
  flex-direction: column;
  padding: 24px 18px;
  border: 1px solid $main-black;
  height: 100%;

  .hero {
    width: 100%;
    object-fit: cover;
    height: 196px;
    margin-bottom: 16px;
    @include desktop-and-up {
      height: 250px;
    }
  }

  .categories {
    display: flex;
    margin-bottom: 12px;
    gap: 16px;
    flex-wrap: wrap;

    .category {
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
      }

      &:hover {
        background-color: #fff;
        border: 1px solid $main-black;
        color: $main-black;
        
      }
    }
  }
  .title {
    text-align: left;
    font-weight: 800;
    font-size: 18px;
    color: $main-black;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all 0.3s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: $main-green;
    }

    @include tablet-and-up {
      font-size: 24px;
    }

    @include desktop-and-up {
      font-size: 30px;
    }
  }
  .text {
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    color: $main-black;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: auto;

    @include tablet-and-up {
      font-size: 16px;
    }

    @include desktop-and-up {
      font-size: 18px;
    }
  }
  .link {
    color: $main-black;
    text-decoration: underline;
    font-weight: 700;
    font-size: 16px;
    padding: 3px 2px;
    margin-bottom: 12px;
    margin-top: 12px;
    align-self: flex-start;
  }

  .description {
    border-top: 1px solid $main-black;
    display: flex;
    padding-top: 16px;
    align-items: center;

    img {
      height: 44px;
      width: 44px;
      margin-right: 12px;
      border-radius: 100%;
    }
    .meta {
      text-align: left;
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
        font-weight: 400;
        font-size: 14px;
        color: $dark-grey;
        margin-bottom: 0;
      }
    }
  }
}

</style>