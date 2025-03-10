<template>
  <section class="banner">
    <div
      :class="`banner__wrapper ${logoFileName ? 'banner__wrapper-logo' : ''}`"
      :style="{
        background: backgroundColor,
      }"
    >
      <img
        :class="`${logoFileName ? 'logo' : 'image'}`"
        :src="
          require(`~/assets/images/work/${name}/${
            logoFileName ? logoFileName : 'preview-full.webp'
          }`)
        "
        :alt="`project-banner-${name}-preview-full.webp`"
      />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF',
    },
    logoFileName: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.banner {
  margin: 0;
  padding: 0;
  max-width: 100vw;
  &__wrapper {
    width: 100%;
    margin-top: -106px;

    .image {
      height: 390px;

      @include tablet-and-up {
        height: 800px;
        max-width: 1140px;
      }
    }
    img {
      width: inherit;
      object-fit: contain;
    }
  }

  &__wrapper-logo {
    width: 100%;
    height: 390px;
    display: flex;
    align-items: center;
    justify-content: center;

    @include tablet-and-up {
      height: 800px;
    }

    img.logo {
      height: 70px;

      @include for-phone-only {
        object-fit: cover;
        max-width: 260px;
        height: 70px;
      }

      @include tablet-and-up {
        height: 150px;
        max-width: 1140px;
      }
    }
  }
}
</style>
