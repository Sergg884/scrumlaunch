<template>
  <header>
    <NuxtLink class="" to="/" exact>
      <Logo
        class="logo"
        :fill="'#1E1F21'"
      />
    </NuxtLink>
    <div class="menu">
      <NuxtLink to="/work">
        Case Studies
      </NuxtLink>
      <NuxtLink to="/services">
        Services
      </NuxtLink>
      <NuxtLink to="/work">
        Process
      </NuxtLink>
      <NuxtLink to="/work">
        Leadership
      </NuxtLink>
      <HeaderDropdown 
        title="Blog"
        to="/blog"
        wide
        :menuItems="getHeaderItems"
      />
      <HeaderDropdown 
        title="Hire Developers"
        to="/hire-developers"
        :menuItems="developers"
      />
      <NuxtLink to="/work">
        Job Openings
      </NuxtLink>
      <NuxtLink to="/work">
        Contact
      </NuxtLink>
    </div>

    <div class="menu--mobile">
      <img
        :src="require('@/assets/icons/menu-mobile.svg')"
        alt="menu-mobile"
      />
    </div>

    <!-- <div class="menu--burger">
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
        <span v-for="i in burgerMenu" :key="i.title" class="menu--burger--links--item" @click="handleNavigation(i.path)"
          >{{ i.title }}</span
        >
      </div>
    </div> -->
  </header>
</template>

<script>
import { mapGetters } from 'vuex';


export default {

  computed: {
    ...mapGetters('articles/', ['getHeaderItems']),
  },

  data() {
    return {
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

}

.menu {
  gap: 40px;
  display: none;

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
    
    @include desktop-and-up {
      display: none;
    }
  }

}


</style>