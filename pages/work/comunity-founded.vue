<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/comunity-founded/preview-full.webp`)" :alt="'comunity-founded-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/comunity-founded/img1.webp`)" alt="comunity-founded-img-1">

    <img class="image" :src="require(`~/assets/images/work/comunity-founded/img2.webp`)" alt="comunity-founded-img-2">

    <MoreProjects 
      :currentProjectId="2"
    />
  </div>
</template>

<script>
import HeroBlock from '~/components/pages/work/HeroBlock.vue'
import MoreProjects from '~/components/pages/work/MoreProjects.vue' 

export default {

  components: {
    HeroBlock,
    MoreProjects
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // Optional, for smooth scrolling
      });
    });
  },

  data() {
    return {
      name: 'comunity funded',
      text: 'Community Funded is an enterprise crowd fundraising platform that powers digital philanthropy for some of the largest Universities in the United States. The platform is a market leader in the space and supports millions of daily unique users during major giving events. The ScrumLaunch team has been entirely responsible for the development of the platform since 2019.',
      details: [
        {
          title: 'Details',
          text: ['2019 - 2021']
        },
        {
          title: 'Work',
          text: [
            'User Research',
            'UI/UX design',
            'React',
            'NodeJS',
            'GraphQL',
            'AWS',
            'Terraform',
            'Postgres',
            'Selenium',
            'DevOps',
            'Product Management',
          ]
        },
        {
          title: 'Team',
          text: [
            'Vlad Antonenko',
            'Anastasia Shaduro'
          ]
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>

.hero {

  width: 100%;
  margin-top: -106px;
  background-color: #001426;
  img {
    height: 392px;

    @include tablet-and-up {
      height: 800px;
    }
  }
}

.info {
  text-align: left;

  h2 {
    font-weight: 900;
    font-size: 24px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @include tablet-and-up {
      font-size: 30px;
    }

    @include desktop-and-up {
      font-size: 50px;
    }
  }
  p {
    font-weight: 400;
    font-size: 14px;

    @include tablet-and-up {
      font-size: 20px;
    }

    @include desktop-and-up {
      width: 70%;
      font-size: 26px;
    }
  }
}



.image {
  width: 375px;
  margin: auto;
  margin-bottom: 10px;
  display: block;

  @include tablet-and-up {
    margin-bottom: 30px;
    width: 768px;
  }

  @include desktop-and-up {
    width: 1440px;
  }
  
}

</style>



