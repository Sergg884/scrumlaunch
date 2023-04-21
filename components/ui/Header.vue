<template>
  <header>
    <NuxtLink class="logo" to="/" exact>
      <Logo
        :fill="isHeaderWhite ? '#fff' : '#1E1F21'"
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

    <div class="menu--mobile">
      <img
        :src="isHeaderWhite ? require('@/assets/icons/menu-mobile--white.svg') : require('@/assets/icons/menu-mobile.svg')"
        alt="menu-mobile"
      />
    </div>
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
      ]
    };
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


</style>