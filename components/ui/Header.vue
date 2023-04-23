<template>
  <header :class="{ active: showMobileNavigation }">
    <NuxtLink class="logo" to="/" exact>
      <Logo
        :fill="isHeaderWhite || showMobileNavigation ? '#fff' : '#1E1F21'"
      />
    </NuxtLink>
    <div class="menu" :class="{'white': isHeaderWhite}">
      <NuxtLink to="/work">
        Work
      </NuxtLink>
      <NuxtLink to="/services">
        Services
      </NuxtLink>
      <NuxtLink to="/process">
        Process
      </NuxtLink>
      <NuxtLink to="/leadership">
        Leadership
      </NuxtLink>
      <HeaderDropdown 
        title="Blog"
        to="/blog"
        wide
        :menuItems="getHeaderItems"
        :isWhite='isHeaderWhite'
      />
      <HeaderDropdown 
        title="Hire Developers"
        to="/hire-developers"
        :menuItems="developers"
        :isWhite='isHeaderWhite'
      />
      <NuxtLink to="/remote-developer-job">
        Job Openings
      </NuxtLink>
      <NuxtLink to="/contact">
        Contact
      </NuxtLink>
    </div>
    <div class="menu--mobile" @click="toggleNavigation()">
      <img
        :src="isHeaderWhite || showMobileNavigation ? require('@/assets/icons/menu-mobile--white.svg') : require('@/assets/icons/menu-mobile.svg')"
        alt="menu-mobile"
      />
    </div>
    <ul
      class="mobile-navigation"
      :class="{ active: showMobileNavigation }"
    >
      <li v-for="(i, index) in mobileNavigation" :key="index" @click="navigateTo(i.path)">
        {{ i.title }}
      </li>
    </ul>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';


export default {

  computed: {
    ...mapGetters('articles/', ['getHeaderItems']),
    isHeaderWhite() {
      if (this.whiteHeaderPaths.includes(this.$route.path)) {
        return true
      }
      return false
    }
  },

  data() {
    return {
      showMobileNavigation: false,
      whiteHeaderPaths: [
        '/work/campus-reel',
        '/work/full-court-ai',
        '/work/helmm',
        '/work/fgn',
        '/work/comunity-founded',
        '/contact',
        '/remote-developer-job'
      ],
      
      developers: [
        { 
          title: 'PHP Developers',
          path: '/hire-developers/php-developers'
        },
        { 
          title: 'React JS Developers',
          path: '/hire-developers/react-js-developers'
        },
        { 
          title: 'Django Developers',
          path: '/hire-developers/django-developers'
        },
        { 
          title: 'Wordpress Developers',
          path: '/hire-developers/wordpress-developers'
        },
        { 
          title: 'Java Developers',
          path: '/hire-developers/java-developers'
        },
        { 
          title: 'iOS Developers',
          path: '/hire-developers/ios-developers'
        },
        { 
          title: 'Android Developers',
          path: '/hire-developers/android-developers'
        },
        { 
          title: 'Web Developers',
          path: '/hire-developers/web-developers'
        },
        { 
          title: 'Angular JS Developers',
          path: '/hire-developers/angular-js-developers'
        },
        { 
          title: 'Node JS Developers',
          path: '/hire-developers/node-js-developers'
        },
        { 
          title: 'Ruby On Rails Developers',
          path: '/hire-developers/ruby-on-rails-developers'
        },
        { 
          title: 'Software Developers',
          path: '/hire-developers/software-developers'
        },
      ],

      mobileNavigation: [
        { 
          title: 'Home',
          path: '/'
        },
        { 
          title: 'Work',
          path: '/work'
        },
        { 
          title: 'Services',
          path: '/services'
        },
        { 
          title: 'Process',
          path: '/process'
        },
        { 
          title: 'Leadership',
          path: '/leadership'
        },
        { 
          title: 'Blog',
          path: '/Blog'
        },
        { 
          title: 'Job Openings',
          path: '/remote-developer-job'
        },
        { 
          title: 'Contact',
          path: '/contact-us'
        },
      ]
    };
  },

  methods: {
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
      this.showMobileNavigation = !this.showMobileNavigation
    }
  }
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

    &::before{
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
  padding-top: 70px;
  z-index: 99;
  


  &.active {
    top: 72px;
    transition: 0.5s;
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