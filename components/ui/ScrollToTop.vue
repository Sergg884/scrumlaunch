<template>
  <div
    class="scroll_top__btn"
    :class="{ active: scrollTop > 300 }"
    @click="doScrollTop()"
  >
    <img
      :src="require('@/assets/icons/scroll-down-without-mask.svg')"
      class="scroll_top__arr"
    />
  </div>
</template>

<script>
export default {

  data() {
    return {
      scrollTop: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.checkScroll()
    }, 0)

    window.addEventListener('scroll', this.checkScroll)
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.checkScroll)
  },

  methods: {
    checkScroll() {
      this.scrollTop = document.querySelectorAll('html')[0].scrollTop
    },

    doScrollTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.scroll_top {
  $root: &;

  &__btn {
    position: fixed;
    bottom: 100px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(180deg);
    width: 86px;
    height: 86px;
    border-radius: 50%;
    border: 1px solid #1e1f21;
    background: #fff;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    cursor: pointer;
    z-index: 999;

    @media screen and (max-width: 768px) {
      bottom: 90px;
      right: 20px;
      width: 60px;
      height: 60px;
    }

    @media screen and (max-width: 420px) {
      width: 60px;
      height: 60px;
    }

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    &:hover {
      #{$root}__arr {
        animation: swingy 0.5s linear infinite;
      }
    }
  }

  &__arr {
    position: relative;
    display: block;
    width: 22px;
    height: 36px;
  }

  @keyframes swingy {
    0% {
      top: -3px;
    }

    50% {
      top: 3px;
    }

    100% {
      top: -3px;
    }
  }
}
</style>
