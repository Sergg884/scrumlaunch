<template>
  <footer>
    <b-row no-gutters>
      <b-col class="links" cols="6" order="2" order-md="1" md="3" xl="3">
        <NuxtLink v-for="i in links" :to="i.title" :key="i.title">
          {{ i.title }}
        </NuxtLink>
      </b-col>
      <b-col class="contact" cols="12" order="1" order-md="2" md="6" xl="4">
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
      <b-col class="social" cols="12" order="4" xl="2">
        <div>
          <a
            href="https://www.behance.net/scrumlaunch"
            target="_blank"
            class="icon"
          >
            <img
              :src="require('@/assets/icons/behance.svg')"
              alt="footer-behance"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/scrumlaunch/"
            target="_blank"
            class="icon"
          >
            <img
              :src="require('@/assets/icons/linkedin.svg')"
              alt="footer-linkedin"
            />
          </a>

          <a
            href="https://dribbble.com/scrumlaunch"
            target="_blank"
            class="icon"
          >
            <img
              :src="require('@/assets/icons/dribbble.svg')"
              alt="footer-dribbble"
            />
          </a>
        </div>
        <div class="private">
          © 2021 ScrumLaunch
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
          title: 'Services',
          href: '/services'
        },
        {
          title: 'About us',
          href: '/about-us'
        },
        {
          title: 'Referral Program',
          href: '/referral'
        },
        {
          title: 'Leadership',
          href: '/services'
        },
        {
          title: 'Contact Us',
          href: '/services'
        }
      ],
      locations: [
        'Portland, OR',
        'Los Angeles, CA',
        'Ukraine',
        'Brazil',
        'Poland',
        'Uttar Pradesh, India'
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

    @include tablet-and-up {
      flex-direction: column;
    }

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
      margin-top: 3px;

      @include tablet-and-up {
        margin-top: 25px;
      }
    }
  }
}

</style>