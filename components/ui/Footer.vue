<template>
  <footer>
    <div class="email sm">
        <p class="title">
          Email
        </p>
        <a href="mailto:hello@scrumlaunch.com">
          hello@scrumlaunch.com
        </a>
      </div>
    <b-row no-gutters>
      <b-col class="links" cols="6" md="3" xl="3">
        <NuxtLink key="Services" to="/services">Services</NuxtLink>
        <NuxtLink key="Case Studies" to="/work">Case Studies</NuxtLink>
        <NuxtLink key="Blog" to="/blog">Blog</NuxtLink>
        <NuxtLink key="Staff Augmentation" to="/hire-developers">Staff Augmentation</NuxtLink>
        <NuxtLink key="About" to="/process">About</NuxtLink>
      </b-col>
      <b-col class="links" cols="6" md="3" xl="3">
        <NuxtLink key="Careers" to="/remote-developer-jobs">Careers</NuxtLink>
        <a key="Contact" @click="openModal()">Contact</a>
        <NuxtLink key="Referral Program" to="/referral">Referral Program</NuxtLink>
        <NuxtLink key="Leadership" to="/leadership">Leadership</NuxtLink>
        <NuxtLink key="Sitemap" to="/sitemap">Sitemap</NuxtLink>
      </b-col>
      <b-col class="contact" order="1" order-md="0" cols="12" md="6" xl="4">
        <div class="email md">
          <p class="title">
            Email
          </p>
          <a href="mailto:hello@scrumlaunch.com">
            hello@scrumlaunch.com
          </a>
        </div>
        <div class="social">
          <a
            v-for="i in socials"
            :href="i.path"
            target="_blank"
            class="icon"
          >
            <img
              :src="require(`@/assets/icons/social/${i.icon}.svg`)"
              :alt="i.alt"
            />
          </a>
        </div>
      </b-col>
      <b-col class="locations" order="0" order-md="1" cols="12" md="10" xl="2">
        <li v-for="location in locations" :key="location" class="title">
          {{ location }}
        </li>
      </b-col>
      <b-col class="private" order="2" order-md="2" cols="12" xs="12" sm="12" md="2" xl="12">
        <p>© ScrumLaunch 2023</p>
      </b-col>
    </b-row>
  </footer>
</template>

<script>
import { mapMutations } from "vuex";


export default {
  data() {
    return {
      locations: [
        'Portland, OR',
        'Los Angeles, CA',
        'Ukraine',
        'Brazil',
        'Poland',
      ],
      socials: [
        {
          path: 'https://www.youtube.com/@scrumlaunch/videos',
          icon:  'youtube',
          alt: 'footer-youtube'
        },
        {
          path: 'https://www.linkedin.com/company/scrumlaunch/mycompany/',
          icon:  'linkedin',
          alt: 'footer-linkedin'
        },
        {
          path: 'https://dribbble.com/scrumlaunch',
          icon:  'dribble',
          alt: 'footer-dribble'
        },
        {
          path: 'https://www.tiktok.com/@scrumlaunch',
          icon:  'tiktok',
          alt: 'footer-tiktok'
        },
        {
          path: 'https://www.behance.net/scrumlaunch',
          icon:  'behance',
          alt: 'footer-behance'
        },
        {
          path: 'https://instagram.com/scrumlaunch.us?igshid=MzRlODBiNWFlZA==',
          icon:  'instagram',
          alt: 'footer-instagram'
        },
      ]
    }
  },

  methods: {
    ...mapMutations('modals', ['setShowModal']),
    openModal() {
      this.setShowModal(true)
    }
  }
}

</script>

<style lang="scss" scoped>

footer {
  padding: 0px;
  margin: 40px 20px;

  @include tablet-and-up {
    padding: 0 30px;
    margin: 40px auto;
  }

  @include desktop-and-up {
    max-width: 1440px;
    padding: 0px 120px;
    margin: 80px auto;
  }

  .links {
    display: flex;
    flex-direction: column;
    text-align: left;

    a {
      text-decoration: none;
      font-weight: 700;
      font-size: 18px;
      color: $main-black;
      transition: 0.5s all ease;
      margin-bottom: 6px;
      cursor: pointer;

      &:hover {
        color: $main-green;
      }
    }
  }
  .title {
    color: $main-black;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 6px;
  }
  .contact {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 40px;
  }
  .email {
    text-align: left;
    &.sm {
      display: block;
      margin-bottom: 30px;
    }
    &.md {
      display: none;
    }

    @include tablet-and-up {
      &.sm {
      display: none;
      }
      &.md {
        display: block;
      }
    }

    a {
      font-weight: 700;
      font-size: 24px;
      color: #1E1F21;
    }
  }


  .social {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    justify-content: center;

    @include tablet-and-up {
      justify-content: flex-start;
    }

    @include desktop-and-up {
      align-self: stretch;
      margin-top: 20px;
    }

    .icon {

      img {
        margin-right: 30px;
        width: 24px;
        height: 24px;
        margin-top: -3px;
      }

      &:last-child {
        img {
          margin-top: 0;

          @include tablet-and-up {
            margin-right: 0;
          }
        }
      }

      
    }
  }

  .locations {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
    margin-top: 30px;
    .title {
      margin-right: 20px;
      list-style-type: disc;
    }

    @include tablet-and-up {
      justify-content: flex-start;
      .title {
        margin-right: 20px;
      }
    }

    @include desktop-and-up {
      display: block;
      margin-top: 0;
      .title {
        display: block;
        float: none;
      }
    }
  }
  
  .private {
    color: $main-black;
    font-weight: 600;
    font-size: 14px;
    margin-top: 25px;
    text-align: center;
    margin-top: 30px;

    @include desktop-and-up {
      margin-top: 20px;
    }
  }
}

</style>