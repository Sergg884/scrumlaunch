<template>
  <div class="service-item">
    <div class="header">
      <img
        :src="require(`@/assets/icons/services/${service.icon}-icon.svg`)"
        alt="service-item"
        class="icon"
      />
      <p class="title">{{ service.title }}</p>
    </div>
    <div class="description">
      <p>{{ service.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['service'],
}
</script>

<style lang="scss" scoped>

.service-item {
  padding: 30px 0;
  border-bottom: 1px solid $main-black;

  &:first-child {
    border-top: 1px solid $main-black;
  }

  @include tablet-and-up {
    padding: 32px 0;
  }

  @include desktop-and-up {
    padding: 60px 0;
    display: flex;
  }

  .header {
    display: flex;
    margin-bottom: 18px;

    @include tablet-and-up {
      margin-bottom: 20px;
    }

    @include desktop-and-up {
      min-width: 488px;
      flex-direction: row-reverse;
      justify-content: space-between;
      gap: 40px;
    }

    img {
      width: 24px;
      height: 24px;
      margin-right: 16px;

      @include tablet-and-up {
        margin-right: 20px;
        width: 36px;
        height: 36px;
      }

      @include desktop-and-up {
        margin-right: 60px;
      }
    }

    .title {
      font-weight: 700;
      font-size: 18px;
      color: $main-black;
      margin-bottom: 0;

      @include tablet-and-up {
        font-size: 24px;
      }

      @include desktop-and-up {
        text-align: left;
      }
    }
  }

  .description {
    p {
      text-align: left;
      margin-bottom: 0;
      font-size: 12px;
      color: $main-black;
      font-weight: 600;

      @include tablet-and-up {
        margin-left: 188px;
      }

      @include desktop-and-up {
        margin-left: 0;
        font-size: 20px;
      }
    }
  }
}
</style>
