<template>
  <div
    ref="wrap"
    class="wrap"
    :class="{ typing_1: type === '1', typing_2: type === '2' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TypingEffect',

  props: {
    type: {
      type: String,
      default: '1',
    },

    delay: {
      type: String,
      default: null,
    },

    whiteSpace: {
      type: String,
      default: '&#8196;',
    },
  },

  data() {
    return {
      is_played: false,
      innerText: '',
    }
  },

  mounted() {
    this.innerText = this.$refs.wrap.children[0].innerText
    this.init()
    window.addEventListener('scroll', this.play)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.play)
    this.$refs.wrap.removeAttribute('style')
    this.$refs.wrap.children[0].removeAttribute('style')
    this.$refs.wrap.children[0].innerText = this.innerText
  },

  methods: {
    init() {
      if (this.type === '2') {
        const blockMaxWidth = window
          .getComputedStyle(this.$refs.wrap.children[0], null)
          .getPropertyValue('width')
        this.$refs.wrap.style.maxWidth = blockMaxWidth
      }
      this.$refs.wrap.children[0].style.display = 'flex'
      this.$refs.wrap.children[0].style.flexWrap = 'wrap'
      this.$refs.wrap.children[0].style.width = '100%'

      this.$refs.wrap.style.margin = window
        .getComputedStyle(this.$refs.wrap.children[0], null)
        .getPropertyValue('margin')
      this.$refs.wrap.children[0].style.margin = 0

      this.play()
      // setTimeout(() => {
      //     this.play()
      // }, 1000);
    },

    play() {
      const offsetTop = this.getTopPosition(this.$refs.wrap.children[0])
      const scrollTop = document.querySelectorAll('html')[0].scrollTop
      const viewportHeight = window.innerHeight
      if (scrollTop + viewportHeight < offsetTop || this.is_played === true)
        return

      this.is_played = true

      this.$refs.wrap.children[0].innerHTML =
        '<span class="width_test" style="opacity: 0;">' +
        this.whiteSpace +
        '</span>'
      const spaceWidth = window
        .getComputedStyle(
          this.$refs.wrap.children[0].querySelectorAll('.width_test')[0],
          null
        )
        .getPropertyValue('width')
      this.$refs.wrap.children[0].innerHTML = this.innerText

      let delay = 0
      let text_arr = this.$refs.wrap.children[0].innerText.split('')
      text_arr = text_arr.map((item) => {
        if (this.type === '1') {
          delay += this.delay === null ? 0.1 : parseFloat(this.delay)
        } else if (this.type === '2') {
          delay += this.delay === null ? 0.015 : parseFloat(this.delay)
        } else {
          delay += this.delay === null ? 0.1 : parseFloat(this.delay)
        }

        if (!/\s+/.test(item)) {
          return (
            '<span style="animation-delay: ' +
            delay.toFixed(2) +
            's">' +
            item +
            '</span>'
          )
        } else {
          return (
            '</span><span style="animation-delay: ' +
            delay.toFixed(2) +
            's; width: ' +
            spaceWidth +
            '">&nbsp;</span><span>'
          )
        }
      })
      text_arr.unshift('<span>')
      text_arr.push('</span>')
      this.$refs.wrap.children[0].innerHTML = text_arr.join('')
    },

    getTopPosition(element) {
      return (
        element.getBoundingClientRect().top +
        document.querySelectorAll('html')[0].scrollTop
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  // flex: 1;
}

.typing_1 {
  ::v-deep(span) {
    position: relative;
    top: 50px;
    transform: rotateX(60deg);
    opacity: 0;
    animation: typing_1 0.08s linear forwards;
  }
}

.typing_2 {
  ::v-deep(span) {
    position: relative;
    opacity: 0;
    animation: typing_2 0.01s linear forwards;
  }
}

@keyframes typing_1 {
  0% {
    top: 30px;
    transform: rotateX(60deg);
    opacity: 0;
  }

  10% {
    opacity: 1;
  }

  80% {
    top: 20px;
    transform: rotateX(30deg);
  }

  100% {
    transform: rotateX(0deg);
    top: 0px;
    opacity: 1;
  }
}

@keyframes typing_2 {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
