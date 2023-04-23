<template>
  <div class="article-main">
    <img class="hero" :src="article.previewImage.url" :alt="'main-article-hero'" />
    <div class="categories" v-if="article.category">
      <div class="category">
        {{ article.category }}
      </div>
    </div>
    <nuxt-link class="title" :to="article.slug">{{ article.title }}</nuxt-link>
    <div class="info">
      <p class="text">
      {{ article.shortText }}
      </p>
      <nuxt-link class="link" :to="article.slug">Read more</nuxt-link>
      <div class="description">
        <nuxt-img :src="article.authorImg ? article.authorImg : '/pages/blog/default-author.jpg'" :alt="'main-article-author-img'" />
        <div class="meta">
          <p class="author">
            {{  article.authorName ? article.authorName : 'Thomas Jefferson' }}
          </p>
          <p class="date" v-if="article.date">
            {{ article.date }}
          </p>
        </div>
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
  },
}
</script>
<style lang="scss" scoped>

.article-main {
  display: flex;
  flex-direction: column;
  padding: 24px 18px;
  border: 1px solid $main-black;

  @include tablet-and-up {
    flex-basis: 100%;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .hero {
    width: 100%;
    object-fit: cover;
    height: 196px;
    margin-bottom: 16px;

    @include tablet-and-up {
      order: 3;
      height: 251px;
      object-fit: contain;
    }

    @include desktop-and-up {
      height: auto;
      max-height: 420px;
      max-width: calc(50% - 12px);
      margin-right: 24px;
    }
  }

  .categories {
    display: flex;
    margin-bottom: 12px;
    width: 100%;
    
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
        order: 1;
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

    @include tablet-and-up {
      order: 2;
      margin-bottom: 20px;
      font-size: 30px;
    }

    @include desktop-and-up {
      font-size: 48px;
      margin-bottom: 32px;
    }

    &:hover {
      color: $main-green;
    }
  }

  .info {
    display: flex;
    flex-direction: column;

    @include tablet-and-up {
      order: 4;
    }

    @include desktop-and-up {
      flex-basis: calc(50% - 12px);
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
      display: block;
    }
  }
  .link {
    color: $main-black;
    text-decoration: underline;
    font-weight: 700;
    font-size: 16px;
    margin-left: auto;
    background-color: $main-green;
    padding: 3px 2px;
    margin-bottom: 12px;
    margin-top: 12px;

    @include tablet-and-up {
      font-size: 24px;
    }

    @include desktop-and-up {
      font-size: 26px;
    }
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