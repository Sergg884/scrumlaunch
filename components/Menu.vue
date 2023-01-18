<template>
  <div v-if="$route.name !== 'quiz'" class="menu home">
    <div v-if="!showMenu" class="menu--desktop">
      <NuxtLink to="/" exact>
        <Logo
          class="menu--desktop--icon"
          :fill="contactPage ? '#ffffff' : '#1E1F21'"
        />
      </NuxtLink>
      <div
        class="menu--desktop--wrapper"
        :class="contactPage && 'white-wrapper'"
      >
        <NuxtLink to="/work">Case Studies</NuxtLink>
        <!-- <NuxtLink to="/services">Services</NuxtLink> -->
        <!-- <NuxtLink to="/process">Process</NuxtLink> -->
        <!-- <NuxtLink to="/leadership">Leadership</NuxtLink> -->
        <div class="dropdown__wrap" :class="{ hidden: isHiddenNav }">
          <span @mouseenter="isHiddenNav = false">Blog</span>
          <ul class="dropdown">
            <li @click="hiddenNav">
              <NuxtLink to="/blog/scrumlaunch-clutch-top-app"
                >ScrumLaunch voted 2022 top app development company by
                Clutch</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink to="/blog/web-development-company-outsourcing"
                >2021 Guide to Outsourcing Web Development</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink
                to="/blog/web-development-company-outsourcing/software-development-in-ukraine"
                >The #1 Software Development Firm in Ukraine</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink
                to="/blog/web-development-company-outsourcing/website-development-consultants"
                >The #1 Website Development Consultant in 2021</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink to="/hire-developers"
                >Hire Quality Developers in Minutes - Deploy in Hours</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink
                to="/blog/hire-developers/python-developers-and-programmers"
                >Hire Quality Python Developers in Minutes</NuxtLink
              >
            </li>
            <li @click="hiddenNav">
              <NuxtLink to="/blog">View All</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown__wrap" :class="{ hidden: isHiddenNav }">
          <div @mouseenter="isHiddenNav = false" @click="hiddenNav">
            <NuxtLink to="/hire-developers">Hire Developers</NuxtLink>
          </div>
          <div class="dropdown">
            <div class="flex">
              <ul class="mr60">
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/php-developers"
                    >PHP Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/react-js-developers"
                    >React JS Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/django-developers"
                    >Django Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/wordpress-developers"
                    >Wordpress Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/java-developers"
                    >Java Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/ios-developers"
                    >iOS Developers</NuxtLink
                  >
                </li>
              </ul>
              <ul class="mr60">
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/android-developers"
                    >Android Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/web-developers"
                    >Web Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/angular-js-developers"
                    >Angular JS Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/node-js-developers"
                    >Node JS Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/ruby-on-rails-developers"
                    >Ruby On Rails Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/software-developers"
                    >Software Developers</NuxtLink
                  >
                </li>
              </ul>
              <ul>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/python-developers"
                    >Python Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/solidity-developers"
                    >Solidity Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/react-native-developers"
                    >React Native Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers/ruby-developers"
                    >Ruby Developers</NuxtLink
                  >
                </li>
                <li @click="hiddenNav">
                  <NuxtLink to="/hire-developers" exact
                    >View All Languages</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <NuxtLink to="/remote-developer-jobs">Careers</NuxtLink>
        <NuxtLink to="/contact-us">Contact Us</NuxtLink>
      </div>
      <div class="menu--desktop--wrapper-mobile">
        <img
          :src="require('@/assets/icons/menu-mobile.svg')"
          :class="{ white: contactPage }"
          class="menu--desktop--wrapper-mobile--icon"
          @click="toggleMenu"
        />
      </div>
    </div>

    <div v-else class="menu--burger">
      <div class="menu--burger--header">
        <Logo
          class="menu--burger--header--icon"
          @click="handleNavigation('/')"
        />
        <img
          :src="require('@/assets/icons/close.svg')"
          class="menu--burger--header--icon-close"
          @click="toggleMenu"
        />
      </div>
      <div class="menu--burger--links">
        <span class="menu--burger--links--item" @click="handleNavigation('/')"
          >Home</span
        >
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/work')"
          >Case Studies</span
        >
        <!-- <span
          class="menu--burger--links--item"
          @click="handleNavigation('/services')"
          >Services</span
        > -->
        <!-- <span
          class="menu--burger--links--item"
          @click="handleNavigation('/process')"
          >Process</span
        >
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/leadership')"
          >Leadership</span
        > -->
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/blog')"
          >Blog</span
        >
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/hire-developers')"
          >Hire Developers</span
        >
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/remote-developer-jobs')"
          >Careers</span
        >
        <span
          class="menu--burger--links--item"
          @click="handleNavigation('/contact-us')"
          >Contact Us</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showMenu: false,
    contactPage: false,
    isHiddenNav: false,
  }),

  watch: {
    $route: {
      immediate: true,
      handler() {
        if (
          this.$route.name === 'index' ||
          this.$route.name === 'contact-us' ||
          this.$route.name === 'fgn-case-study' ||
          this.$route.name === 'harvest-case-study' ||
          this.$route.name === 'full-court-ai-case-study' ||
          this.$route.name === 'helmm-case-study' ||
          this.$route.name === 'scope-case-study' ||
          this.$route.name === 'campus-reel-case-study' ||
          this.$route.name === 'locations-state_slug-city_slug' ||
          this.$route.name === 'hire-developers' ||
          this.$route.name === 'send-cv' ||
          this.$route.name === 'remote-developer-jobs'
        ) {
          this.contactPage = true
        } else {
          this.contactPage = false
        }
      },
    },
  },

  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    handleScroll() {
      if (this.isHiddenNav) {
        this.isHiddenNav = true
      }
    },

    toggleMenu() {
      this.showMenu = !this.showMenu
      if (this.showMenu) {
        document.querySelector('body').classList.add('overflow-hidden')
      } else {
        document.querySelector('body').classList.remove('overflow-hidden')
      }
    },

    handleNavigation(pageName) {
      if (this.showMenu) {
        this.showMenu = false
        document.querySelector('body').classList.remove('overflow-hidden')
      }
      this.$nuxt.$options.router.push(pageName)
    },

    hiddenNav() {
      if (this.isHiddenNav) {
        this.isHiddenNav = false
      } else {
        this.isHiddenNav = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  padding: 18px 20px;
  box-sizing: border-box;

  &--desktop {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &--icon {
      width: 60px;
      height: 27px;
    }

    &--wrapper {
      display: none;

      a,
      span {
        &:hover {
          color: #12e2b0;
        }
      }
    }

    &--wrapper-mobile {
      display: block;
      cursor: pointer;
    }
  }

  &--burger {
    width: 100%;
    height: 100vh;
    background: #000000;
    padding: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    overflow: auto;
    position: fixed;

    &--header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 90px;

      &--icon {
        width: 60px;
        height: 27px;

        &-close {
          cursor: pointer;
        }
      }
    }

    &--links {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;

      &--item {
        font-style: normal;
        font-weight: 900;
        font-size: 32px;
        line-height: 140%;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 40px;
        cursor: pointer;

        &:last-child {
          margin-bottom: 0px;
        }
      }
    }
  }
}

.hidden.dropdown__wrap:hover {
  .dropdown {
    opacity: 0;
    user-select: none;
    pointer-events: none;
  }

  .dropdown__wrap:before {
    display: none;
  }
}

.dropdown {
  position: absolute;
  top: 64px;
  right: -100px;
  padding: 40px 40px 24px 40px;
  text-align: left;
  opacity: 0;
  background: #ffffff;
  border: 1px solid #1e1f21;
  user-select: none;
  pointer-events: none;
  transition: opacity 0.15s;

  $root: &;

  &.active {
    opacity: 1;
    user-select: initial;
    pointer-events: initial;
  }

  &__wrap {
    position: relative;

    &:before {
      content: '';
      position: absolute;
      // top: 33px;
      // left: -100px;
      right: 0;
      bottom: -40px;
      width: 200px;
      height: 50px;
      display: none;
    }

    &:hover {
      #{$root} {
        opacity: 1;
        user-select: initial;
        pointer-events: initial;
      }

      &:before {
        display: block;
      }
    }

    & > span {
      cursor: pointer;
    }
  }

  li {
    margin-bottom: 16px;

    a {
      white-space: nowrap;
      font-size: 18px !important;
      color: #1e1f21 !important;
      font-style: normal;
      font-weight: 600;
      line-height: 150%;

      &:hover {
        color: #12e2b0 !important;
      }
    }
  }
}

.mr60 {
  margin-right: 60px;
}

@media screen and (min-width: 768px) {
  .menu {
    padding: 30px;

    &--burger {
      padding: 30px;

      &--links {
        &--item {
          font-size: 56px;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .menu {
    // padding: 35px 8.34%;

    &--desktop {
      &--icon {
        width: 80px;
        height: 36px;
      }

      &--wrapper {
        // width: 47.67%;
        width: 100%;
        max-width: 600px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &.white-wrapper {
          a,
          span {
            color: #ffffff;

            &:hover {
              color: #12e2b0;
            }
          }
        }

        a,
        span {
          font-size: 18px;
          line-height: 150%;
          text-decoration: none;
          font-family: 'Proxima Nova';
          font-weight: bold;
          color: #1e1f21;
        }
      }

      &--wrapper-mobile {
        display: none;
      }
    }
  }
}

@media screen and (min-width: 1140px) {
  .menu {
    padding-left: 44px;
    padding-right: 44px;
  }
}

@media screen and (min-width: 1280px) {
  .menu {
    padding: 35px 8.34%;

    &--desktop {
      &--wrapper {
        max-width: 700px;
      }
    }
  }
}

@media screen and (min-width: 1440px) {
  .menu {
    &--desktop {
      &--wrapper {
        max-width: 900px;
      }
    }
  }
}

@media screen and (min-width: 1900px) {
  .menu {
    &.home {
      .menu--desktop {
        &--wrapper {
          a,
          span {
            font-size: 24px;
          }
        }

        &--icon {
          width: 100px;
          height: 41px;
        }
      }
    }

    &--desktop {
      &--wrapper {
        max-width: 1000px;
      }
    }
  }
}

.white {
  filter: invert(1);
}
</style>
