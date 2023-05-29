<template>
  <section class="content-images">
    <div class="content-images__img-wrapper">
      <img
        v-for="(img, index) in contentImages"
        class="image"
        :key="index"
        :src="requireImageUrl(projectName, img)"
        alt="url"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    projectName: {
      type: String,
      default: '',
    },
    contentImages: {
      type: Array,
      default: [],
    },
  },
  methods: {
    requireImageUrl(name, img) {
      return require(`~/assets/images/work/${name}/content/${img}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.content-images {
  padding: 0;
  margin: auto;

  &__img-wrapper {
    display: flex;
    flex-direction: column;
    width: 375px;

    .image {
      width: inherit;
      object-fit: cover;
      max-height: 1440px;

      margin-bottom: 10px;

        @include tablet-and-up {
          width: 768px;
          margin-bottom: 30px;
        }

        @include desktop-and-up {
          width: 1440px;
          margin-bottom: 50px;
        }
    }
  }
}
</style>
