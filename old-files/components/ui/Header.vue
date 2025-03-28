<template>
  <header :class="{ active: showMobileNavigation }">
    <NuxtLink class="logo" to="/" exact>
      <Logo
        :fill="isHeaderWhite || showMobileNavigation ? '#fff' : '#1E1F21'"
      />
    </NuxtLink>
    <div class="menu" :class="{ white: isHeaderWhite }">
      <NuxtLink to="/ai-consulting">AI Transformation</NuxtLink>
      <NuxtLink to="/services">Product Development</NuxtLink>
      <HeaderDropdown
          title="IT Recruiting"
          to="/hire-developers"
          :menu-items="developers"
          :is-white="isHeaderWhite"
      />
      <NuxtLink to="/work">Case Studies</NuxtLink>
      <NuxtLink to="/blog">Blog</NuxtLink>
      <!-- <NuxtLink to="/process"> About </NuxtLink> -->
      <NuxtLink to="/remote-developer-jobs">Careers</NuxtLink>
      <!-- <NuxtLink to="/contact-us"> Contact </NuxtLink> -->
      <BaseButton
        :class="`ai-link ${isAILinkGreen || showMobileNavigation ? 'green-ai' : ''}`"
        @click="aiNavigate()"
        >Build Team with Scrum AI
      </BaseButton>
    </div>
    <!-- <div class="ai-popup" v-if="!hideAILink">
      <div class="ai-popup_content" v-if="showAIMessage">
        <img src="/icons/sl-logo-black-small.svg" alt="sl-logo" />
        <span>
          Our powerful tool provides personalized project insights and helps you
          find the right team and technical stacks for your project, saving you
          time and effort.
        </span>
        <img
          class="ai-popup_content__close"
          :src="require('@/assets/icons/black_close.svg')"
          alt="close-message"
          @click="hideAIMessage()"
        />
      </div>
      <div class="ai-popup_backdrop" v-if="showAIMessage"></div>
    </div> -->
    <div class="menu--mobile" @click="toggleNavigation()">
      <img
        v-if="showMobileNavigation"
        :src="require('@/assets/icons/close.svg')"
        alt="menu-mobile"
      />
      <img
        v-else
        :src="
          isHeaderWhite
            ? require('@/assets/icons/menu-mobile--white.svg')
            : require('@/assets/icons/menu-mobile.svg')
        "
        alt="menu-mobile"
      />
    </div>
    <ul class="mobile-navigation" :class="{ active: showMobileNavigation }">
      <li @click="navigateTo('/')">Home</li>
      <li @click="navigateTo('/ai-consulting')">AI Transformation</li>
      <li @click="navigateTo('/services')">Product Development</li>
      <li
          class="dropdown"
          :class="{ 'active-dropdown': isHireDevUp }"
          @click="dropDownUp($event)"
      >
        IT Recruiting
        <img class="chevron" src="/icons/chevron-white.svg" />
        <ul class="header-dropdown">
          <li
              v-for="item in developers"
              :key="item.title"
              @click="navigateTo(item.path)"
          >
            {{ item.title }}
          </li>
        </ul>
      </li>
      <li @click="navigateTo('/work')">Case Studies</li>
      <li @click="navigateTo('/blog')">Blog</li>
      <!-- <li @click="navigateTo('/process')">
        About
      </li> -->
      <li @click="navigateTo('/remote-developer-jobs')">Careers</li>
      <!-- <li @click="navigateTo('/contact-us')">
        Contact
      </li> -->
      <li class="green-text" @click="aiNavigate()">
        Build Team with Scrum AI
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      showMobileNavigation: false,
      showAIMessage: false,
      whiteHeaderPaths: [
        '/work/campus-reel',
        '/work/full-court-ai',
        '/work/helmm',
        '/work/fgn',
        '/work/comunity-founded',
        '/work/gipper',
        '/work/harvest',
      ],
      greenAILinkPaths: [
        '/work/full-court-ai',
        '/work/helmm',
        '/work/comunity-founded',
        '/work/campus-reel',
        '/work/gipper',
      ],
      developers: [
        {
          title: 'PHP Developers',
          path: '/hire-developers/php-developers',
        },
        {
          title: 'React Developers',
          path: '/hire-developers/react-js-developers',
        },
        {
          title: 'Django Developers',
          path: '/hire-developers/django-developers',
        },
        {
          title: 'Wordpress Developers',
          path: '/hire-developers/wordpress-developers',
        },
        {
          title: 'Java Developers',
          path: '/hire-developers/java-developers',
        },
        {
          title: 'iOS Developers',
          path: '/hire-developers/ios-developers',
        },
        {
          title: 'Android Developers',
          path: '/hire-developers/android-developers',
        },
        {
          title: 'Web Developers',
          path: '/hire-developers/web-developers',
        },
        {
          title: 'Angular JS Developers',
          path: '/hire-developers/angular-js-developers',
        },
        {
          title: 'Node JS Developers',
          path: '/hire-developers/node-js-developers',
        },
        {
          title: 'Ruby On Rails Developers',
          path: '/hire-developers/ruby-on-rails-developers',
        },
        {
          title: 'Software Developers',
          path: '/hire-developers/software-developers',
        },
        {
          title: 'Python Developers',
          path: '/hire-developers/python-developers',
        },
        {
          title: 'Solidity Developers',
          path: '/hire-developers/solidity-developers',
        },
        {
          title: 'React Native Developers',
          path: '/hire-developers/react-native-developers',
        },
        {
          title: 'Ruby Developers',
          path: '/hire-developers/ruby-developers',
        },
        // {
        //   title: 'Swift Developers',
        //   path: '/hire-developers/swift-developers',
        // },
        // {
        //   title: 'Kotlin Developers',
        //   path: '/hire-developers/kotlin-developers',
        // },
        // {
        //   title: 'Shopify Developers',
        //   path: '/hire-developers/shopify-developers',
        // },
        {
          title: 'View All Languages',
          path: '/hire-developers',
        },
      ],
      isHireDevUp: false,
    }
  },

  mounted() {
    // if (!localStorage.getItem('ai_notified') && !['/build-team', '/build-team/result'].includes(
    //     this.$route.path.toLocaleLowerCase()
    //   )) {
    //   this.showAIMessage = true
    //   document.querySelector('body').classList.add('overflow-hidden')
    // }
  },

  computed: {
    ...mapGetters('articles/', ['getHeaderItems']),
    isHeaderWhite() {
      return this.whiteHeaderPaths.includes(
        this.$route.path.toLocaleLowerCase()
      )
    },
    isAILinkGreen() {
      return this.greenAILinkPaths.includes(
        this.$route.path.toLocaleLowerCase()
      )
    },
    hideAILink() {
      return ['/build-team', '/build-team/result'].includes(
        this.$route.path.toLocaleLowerCase()
      )
    }
  },

  methods: {
    dropDownUp(_e) {
      this.isHireDevUp = !this.isHireDevUp
    },
    toggleNavigation() {
      this.showMobileNavigation = !this.showMobileNavigation
      if (this.showMobileNavigation) {
        document.querySelector('body').classList.add('overflow-hidden')
      } else {
        document.querySelector('body').classList.remove('overflow-hidden')
      }
    },
    navigateTo(path) {
      this.$router.push(path)
      this.toggleNavigation()
    },
    hideAIMessage() {
      this.showAIMessage = false
      localStorage.setItem('ai_notified', true)
      document.querySelector('body').classList.remove('overflow-hidden')
    },

    aiNavigate() {
      if (this.showMobileNavigation) {
        this.toggleNavigation()
      }
      this.hideAIMessage()
      this.$router.push('/build-team')
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  margin: auto;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  z-index: 100;

  @include tablet-and-up {
    padding: 30px;
  }

  @include desktop-and-up {
    padding: 25px 120px;
  }

  &.active {
    background-color: $main-black;
    position: fixed;
    top: 0;
    width: 100vw;

    &::before {
      height: 72px;
      width: 100%;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 100;
      background-color: $main-black;
      transition: 0.5s;
    }
  }

  .logo {
    z-index: 100;
  }

  .ai-popup {
    position: absolute;
    width: 185px;
    height: 40px;
    margin-left: auto;
    margin-right: 15px;

    @include tablet-and-up {
      width: 210px;
      height: 48px;
      margin-right: 20px;
    }

    @include desktop-and-up {
      width: 240px;
      height: 50px;
      margin-left: 10%;
    }

    &_backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 101;
    }

    &_content {
      position: absolute;
      z-index: 102;
      display: flex;
      align-items: flex-start;
      width: 310px;
      top: 55px;
      right: -38px;
      padding: 12px;
      background-color: #ffffff;

      @include tablet-and-up {
        width: 370px;
        top: 65px;
        right: -43px;
      }

      @include desktop-and-up {
        top: 65px;
        right: -60px;
      }

      span {
        padding: 0 10px;
        font-size: 12px;
        font-weight: 600;
        text-align: left;

        @include tablet-and-up {
          font-size: 14px;
          padding: 0 15px;
        }
      }

      &__close {
        width: 10px;
        cursor: pointer;
      }

      &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: -10px;
        left: 55%;
        border-style: solid;
        border-width: 0 11px 16px 11px;
        border-color: transparent transparent #fff transparent;

        @include tablet-and-up {
          left: 57%;
        }

        @include desktop-and-up {
          left: calc(50% - 5px);
        }
      }
    }
  }
}

.menu {
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 35px;
  display: none;
  z-index: 100;
  align-items: center;
  &.white {
    a {
      color: #fff;
    }
  }

  .ai-link {
    display: flex;
    padding: 14px 15px;
    align-self: flex-end;
    line-height: 1;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.02em;
    z-index: 102;
    text-transform: capitalize;

    border-radius: 100px;

    background-color: #1E1F21;
    color: #fff;

    &:hover {
      color: #1E1F21;
      background-color: #12E2B0;
    }

    @include tablet-and-up {
      padding: 17px 16px;
      font-size: 18px;
    }

    @include desktop-and-up {
      padding: 18px 30px;
      margin-right: initial;
    }
  }

  a {
    font-size: 18px;
    line-height: 150%;
    font-weight: 700;
    text-decoration: none;
    color: $main-black;

    &:hover {
      text-decoration: none;
      color: $main-green;
    }
  }

  @include desktop-and-up {
    display: flex;
  }

  &--mobile {
    z-index: 100;

    @include desktop-and-up {
      display: none;
    }
  }
}

.mobile-navigation {
  padding: 20px 20px 100px 20px;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  list-style: none;
  background: $main-black;
  padding-top: 40px;
  opacity: 0;

  .active-dropdown .chevron {
    transform: rotate(180deg);
  }

  .dropdown {
    position: relative;
    .chevron {
      width: 22px;
      height: 22px;
      margin-bottom: 4px;
    }

    @include tablet-and-up {
      .chevron {
        width: 38px;
        height: 38px;
        margin-bottom: 8px;
      }
    }
  }

  .active-dropdown {
    .header-dropdown {
      display: block;
    }
  }

  .header-dropdown {
    display: none;
    padding-top: 10px;
    padding-left: 0;

    li {
      list-style: none;
      font-size: 18px;
      margin-bottom: 10px;
      font-weight: 500;
      text-transform: capitalize;
      text-decoration: underline;
    }
  }

  &.active {
    top: 72px;
    transition: 0.5s;
    height: 100vh;
    opacity: 1;
  }

  li {
    color: white;
    font-weight: 900;
    font-size: 32px;
    text-align: left;
    margin-bottom: 30px;
    text-transform: uppercase;

    @include tablet-and-up {
      font-size: 56px;
      margin-bottom: 10px;
    }
  }

  .green-text {
    color: $main-green;
  }
}
</style>
