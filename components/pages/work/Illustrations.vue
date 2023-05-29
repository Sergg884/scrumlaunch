<template>
  <section class="illustrations">
    <div class="illustrations__title">
      <h1>Illustrations</h1>
    </div>

    <div class="illustrations__images">
      <div class="row">
        <img
          v-for="(img, index) in illustrationImages"
          :key="index"
          :src="requireImageUrl(projectName, img)"
          alt="url"
        />
      </div>
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
    illustrationImages: {
      type: Array,
      default: [],
    },
  },

  methods: {
    requireImageUrl(name, img) {
      return require(`~/assets/images/work/${name}/illustrations/${img}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.illustrations {
  max-width: 100%;
  padding: 0;
  &__title {
    width: 100%;

    h1 {
      font-weight: 900;
      font-size: 24px;
      line-height: 30px;
      text-transform: uppercase;
      padding-bottom: 55px;
      @include desktop-and-up {
        font-size: 50px;
        line-height: 75px;
      }
    }
  }

  &__images {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    @include for-phone-only {
      display: inherit;
    }

    .row {
      width: 100%;
      display: flex;
      justify-content: center;

      @include for-phone-only {
        margin: 0;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      img {
        flex: 1 0 33.33%;
        padding: 15px;
        max-width: 30%;
        height: 190px;
        object-fit: contain;

        @include for-phone-only {
          flex: none;
          height: 300px;
          padding: 0;
          max-width: 100%;
          object-fit: scale-down;
        }

        @include desktop-and-up {
          height: 350px;
        }
      }
    }
  }
}
</style>
