<template>
  <header :class="{ active: showMobileNavigation }">
    <NuxtLink class="logo" to="/" exact>
      <Logo
        :fill="isHeaderWhite || showMobileNavigation ? '#fff' : '#1E1F21'"
      />
    </NuxtLink>
    <div class="menu" :class="{ white: isHeaderWhite }">
      <NuxtLink to="/services"> Services </NuxtLink>
      <NuxtLink to="/work"> Case Studies </NuxtLink>
      <NuxtLink to="/blog"> Blog </NuxtLink>
      <HeaderDropdown
        title="Hire Developers"
        to="/hire-developers"
        :menu-items="developers"
        :is-white="isHeaderWhite"
      />
      <NuxtLink to="/process"> About </NuxtLink>
      <NuxtLink to="/remote-developer-jobs"> Careers </NuxtLink>
      <NuxtLink to="/contact-us"> Contact </NuxtLink>
    </div>
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
      <li @click="navigateTo('/')">
        Home
      </li>
      <li @click="navigateTo('/work')">
        Work
      </li>
      <li @click="navigateTo('/services')">
        Services
      </li>
      <li @click="navigateTo('/process')">
        Process
      </li>
      <li @click="navigateTo('/leadership')">
        Leadership
      </li>
      <li @click="navigateTo('/blog')">
        Blog
      </li>
      <li class="dropdown" :class="{ 'active-dropdown': isHireDevUp }" @click="dropDownUp($event)">
        Hire developers
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
      <li @click="navigateTo('/remote-developer-jobs')">
        Job Openings
      </li>
      <li @click="navigateTo('/contact-us')">
        Contact
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
      whiteHeaderPaths: [
        '/work/campus-reel',
        '/work/full-court-ai',
        '/work/helmm',
        '/work/fgn',
        '/work/comunity-founded',
        '/work/gipper',
      ],
      developers: [
        {
          title: 'PHP Developers',
          path: '/hire-developers/php-developers',
        },
        {
          title: 'React JS Developers',
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
        {
          title: 'View All Languages',
          path: '/hire-developers',
        },
      ],
      isHireDevUp: false,
    }
  },

  computed: {
    ...mapGetters('articles/', ['getHeaderItems']),
    isHeaderWhite() {
      if (
        this.whiteHeaderPaths.includes(this.$route.path.toLocaleLowerCase())
      ) {
        return true
      }
      return false
    },
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
  },
}
</script>

<style lang="scss" scoped>
header {
  margin: auto;
  padding: 18px 20px;
  display: flex;
  justify-content: space-between;
  max-width: 1440px;

  @include tablet-and-up {
    padding: 30px;
  }

  @include desktop-and-up {
    padding: 35px 120px;
  }

  &.active {
    background-color: $main-black;

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
}

.menu {
  gap: 40px;
  display: none;
  z-index: 99;

  &.white {
    a {
      color: #fff;
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
  padding: 20px;
  position: fixed;
  top: -100%;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  list-style: none;
  background: $main-black;
  padding-top: 40px;
  z-index: 99;
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
    height: calc(100vh - 72px);
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
}
</style>
