<template>
  <footer>
    <b-row no-gutters>
      <b-col class="links" cols="6" order="2" order-md="1" md="3" xl="3">
        <NuxtLink v-for="i in links" :to="i.href" :key="i.title">
          {{ i.title }}
        </NuxtLink>
      </b-col>
      <b-col class="contact" cols="12" order="1" order-md="2" md="6" xl="3">
        <p class="title">
          Email
        </p>
        <a href="mailto:hello@scrumlaunch.com">
          hello@scrumlaunch.com
        </a>
      </b-col>
      <b-col class="locations" cols="6" order="3" md="3" xl="3">
        <p v-for="location in locations" :key="location" class="title">
          {{ location }}
        </p>
      </b-col>
      <b-col class="social" cols="12" order="4" xl="3">
        <div>
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
        <div class="private">
          © 2023 ScrumLaunch LLC. All rights reserved.
        </div>
      </b-col>
    </b-row>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      links: [
      {
          title: 'Portfolio',
          href: '/work'
        },
        {
          title: 'Services',
          href: '/services'
        },
        {
          title: 'About us',
          href: '/process'
        },
        {
          title: 'Referral Program',
          href: '/referral'
        },
        {
          title: 'Leadership',
          href: '/leadership'
        },
        {
          title: 'Contact Us',
          href: '/contact-us'
        }
      ],
      locations: [
        'Portland, OR',
        'Los Angeles, CA',
        'Ukraine',
        'Brazil',
        'Poland',
        'Uttar Pradesh, India'
      ],
      socials: [
        {
          path: 'https://www.youtube.com/@scrumlaunch',
          icon:  'youtube',
          alt: 'footer-youtube'
        },
        {
          path: 'https://www.linkedin.com/company/scrumlaunch/',
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
          path: 'https://www.instagram.com/scrumlaunch.us/',
          icon:  'instagram',
          alt: 'footer-instagram'
        },
      ]
    }
  }
}

</script>

<style lang="scss" scoped>

footer {
  max-width: 375px;
  padding: 0 20px;
  margin: 40px auto;

  @include tablet-and-up {
    max-width: 768px;
    padding: 0 30px;
    margin: 40px auto;
  }

  @include desktop-and-up {
    max-width: 1440px;
    padding: 0 120px;
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

    a {
      font-weight: 700;
      font-size: 24px;
      color: #FF0000;
    }
  }
  .locations {
    text-align: left;
  }

  .social {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    align-self: center;
    flex-direction: column;

    @include desktop-and-up {
      align-self: stretch;
      margin-top: 0;
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
    .private {
      color: $main-black;
      font-weight: 600;
      font-size: 14px;
      margin-top: 25px;

      @include desktop-and-up {
        margin-top: 0;
      }
    }
  }
}

</style>