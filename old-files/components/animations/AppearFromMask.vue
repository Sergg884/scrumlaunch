<template>
  <div ref="wrap" class="wrap" :class="{ oh: oh }">
    <slot></slot>
    <div ref="mask" class="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'AppearFromMask',

  props: {
    duration: {
      type: String,
      default: '1',
    },

    maskBg: {
      type: String,
      default: '#ffffff',
    },

    oh: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      blockMarginBottom: null,
      blockHeight: null,
      is_played: false,
    }
  },

  mounted() {
    this.$refs.wrap.querySelector('*:not(.mask)').style.opacity = '0'
    this.init()
    window.addEventListener('scroll', this.play)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.play)
    this.$refs.wrap.querySelector('*:not(.mask)').removeAttribute('style')
    this.$refs.wrap.removeAttribute('style')
    this.$refs.mask.removeAttribute('style')
  },

  methods: {
    init() {
      document.fonts.ready.then(() => {
        this.blockMargin = window
          .getComputedStyle(this.$refs.wrap.querySelector('*:not(.mask)'), null)
          .getPropertyValue('margin')
        this.blockMaxWidth = window
          .getComputedStyle(this.$refs.wrap.querySelector('*:not(.mask)'), null)
          .getPropertyValue('width')
        this.blockHeight = window
          .getComputedStyle(this.$refs.wrap.querySelector('*:not(.mask)'), null)
          .getPropertyValue('height')
        this.$refs.wrap.querySelector('*:not(.mask)').style.position =
          'relative'
        this.$refs.wrap.querySelector('*:not(.mask)').style.top =
          this.blockHeight

        this.$refs.wrap.querySelector('*:not(.mask)').style.margin = 0
        this.$refs.wrap.querySelector('*:not(.mask)').style.width = '100%'
        this.$refs.wrap.querySelector('*:not(.mask)').style.transition = 'none'
        this.$refs.wrap.querySelector('*:not(.mask)').style.opacity = '1'
        this.$refs.mask.style.height = this.blockHeight
        this.$refs.mask.style.backgroundColor = this.maskBg
        this.$refs.wrap.style.margin = this.blockMargin
        this.$refs.wrap.style.maxWidth = this.blockMaxWidth
        this.is_played = false
        this.play(true)
      })

      // setTimeout(() => {
      //     this.play(true)
      // }, 1000)
    },

    play(init = false) {
      const offsetTop = this.getTopPosition(
        this.$refs.wrap.querySelector('*:not(.mask)')
      )
      const scrollTop = document.querySelectorAll('html').scrollTop
      const viewportHeight = window.innerHeight
      if (scrollTop + viewportHeight < offsetTop || this.is_played === true)
        return
      if (!init) {
        this.is_played = true
      }
      this.$refs.wrap.querySelector('*:not(.mask)').style.transition =
        'top ' + this.duration + 's'
      this.$refs.wrap.querySelector('*:not(.mask)').style.top = '0'
    },

    getTopPosition(element) {
      return (
        element.getBoundingClientRect().top +
        document.querySelectorAll('html').scrollTop
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  text-align: left;
}

.oh {
  overflow: hidden;
}

.mask {
  position: absolute;
  width: 100%;
}
</style>
