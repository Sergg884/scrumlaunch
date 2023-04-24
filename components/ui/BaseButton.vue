<template>
  <component
    :class="small ? 'base-button--small' : 'base-button'"
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :small="small"
    :href="href"
    @click="$emit('click')"
  >
    <slot></slot>
  </component>
</template>
  
<script>
  export default {
    props: {
      to: {
        type: String,
        default: null
      },
      href: {
        type: String,
        default: null
      },
      small: {
        type: Boolean,
        default: false
      }
    }
  };
</script> 

<style lang="scss" scoped>

.base-button {
  padding: 19px 76px;
  background: $main-green;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #1e1f21;
  transition: all 0.4s ease;
  border: none;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;

  @include tablet-and-up {
    padding: 28px 76px;
  }

  @media (hover: hover) {
    &:hover {
      background: $main-black;
      color: #ffffff;
    }
  }

  // &:hover {
  //   background: $main-black;
  //   color: #ffffff;
  // }

  &:active {
    background: $main-black;
    color: $main-green;
  }

  &.on_dark_bg {
    &:hover {
      background: #ffffff;
      color: $main-black;
    }
  }

  &--small {
    @extend .base-button;
    padding: 10px 28px;
  }
}

</style>