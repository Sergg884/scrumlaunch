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
  margin: 0;
  padding: 0;
  max-width: 100vw;

  &__img-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .image {
      width: inherit;
      object-fit: cover;
      max-height: 1440px;
      padding-bottom: 50px;
    }
  }
}
</style>
