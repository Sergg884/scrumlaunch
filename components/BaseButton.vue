<template>
  <component
    class="base-button"
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
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
      }
    }
  };
</script> 

<style lang="scss" scoped>

.base-button {
  padding: 28px 76px;
  background: #12e2b0;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: normal;
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

  &:hover {
    background: #1e1f21;
    color: #ffffff;
  }

  &:active {
    background: #1e1f21;
    color: #12e2b0;
  }

  &.on_dark_bg {
    &:hover {
      background: #ffffff;
      color: #1e1f21;
    }
  }
}

</style>