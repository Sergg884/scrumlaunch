<template>
  <section>
    <h2 class="title-global">
      Site map
    </h2>
    <div class="pages">
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-6.svg" />
          <NuxtLink to="/services"><h3>Services</h3></NuxtLink>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-5.svg" />
          <NuxtLink to="/work"><h3>Case Studies</h3></NuxtLink>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-2.svg" />
          <NuxtLink to="/blog"><h3>Blog</h3></NuxtLink>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-3.svg" />
          <h3>
            Hire Developers
          </h3>
        </div>
        <div class="stack-list" no-gutters>
          <div
            v-for="item in developers"
            :key="item.title"
            class="stack-list-item"
          >
            <NuxtLink  :to="item.path">{{
              item.title
            }}</NuxtLink>
          </div>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-2.svg" />
          <NuxtLink to="/remote-developer-jobs"><h3>Careers</h3></NuxtLink>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-4.svg" />
          <NuxtLink to="/process"><h3>About</h3></NuxtLink>
        </div>
      </div>
      <div class="page">
        <div class="main">
          <nuxt-img class="icon" :alt="`faq-img-1`" src="/sitemap/icon-1.svg" />
          <NuxtLink to="/contact-us"><h3>Contact</h3></NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
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
        {
          title: 'View All Languages',
          path: '/hire-developers',
        },
      ],
    }
  }
}

</script>

<style lang="scss" scoped>

section {
  h2 {
    text-align: left;
    margin-bottom: 40px;

    @include tablet-and-up {
      margin-bottom: 60px;
    }

    @include desktop-and-up {
      margin-bottom: 80px;
    }
  }

  h3 {
    color: #1E1F21;
  }

  a {
    text-decoration: none;
  }

  .pages {
    .page {
      border-bottom: 1px solid $main-black;
      padding: 30px 0;
      align-items: flex-start;

      &:first-child {
        border-top: 1px solid $main-black;
      }

      @include desktop-and-up {
        padding: 74px 0;
      }

      .stack-list {
        /* padding-left: 60px; */
        padding-top: 25px;
        text-align: left;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(50px, auto);
        gap: 5px;

        @include tablet-and-up {
          margin-left: 100px;
        }
      }

      .stack-list-item > a {
        color: var(--Black, #1E1F21);
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 150%; /* 27px */
        text-decoration-line: underline;
      }

      .main {
        display: flex;
        align-items: flex-start;
        text-align: left;

        @include tablet-and-up {
          align-items: center;
        }

        .icon {
          width: 24px;
          height: 24px;
          margin-right: 12px;
          @include tablet-and-up {
            width: 36px;
            height: 36px;
            margin-right: 26px;
          }

          @include desktop-and-up {
            width: 56px;
            height: 56px;
            margin-right: 40px;
          }
        }

        h3 {
          font-weight: 700;
          font-size: 18px;
          margin-bottom: 0;
          flex-grow: 1;
          @include tablet-and-up {
            font-size: 24px;
          }
          @include desktop-and-up {
            font-size: 30px;
          }
        }

        .expand-icon {
          min-width: 48px;
          height: 48px;
          border-radius: 100%;
          border: 1px solid $main-black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .text {
        font-weight: 400;
        font-size: 12px;
        text-align: left;
        margin-top: 26px;
        margin-bottom: 0;

        @include tablet-and-up {
          font-size: 18px;
        }
        @include desktop-and-up {
          font-size: 20px;
          margin-left: 98px;
          margin-right: 120px;
        }
      }
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.collapse-enter-active, .collapse-leave-active {
  transition: opacity .5s;
}
.collapse-enter, .collapse-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>