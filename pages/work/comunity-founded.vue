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
      name: 'comunity-founded HOME',
      text: 'comunity-founded Home is a leading luxury home staging company that is powered by a sophisticated logistics and e-commerce platform. The platform is dual purpose– it acts as an inventory management and booking system for the internal team to coordinate, schedule and reserve furniture items from its collection for use in home staging events. It also enables consumers to buy gently used luxury furniture.',
      details: [
        {
          title: 'Details',
          text: ['2020-2021']
        },
        {
          title: 'Work',
          text: [
            'React',
            'Swift',
            'RubyOnRails',
            'Shopify',
            'Heroku',
            'Product Management',
            'UI',
            'UX Design'
          ]
        },
        {
          title: 'Team',
          text: [
            'Yulia Hlushkina',
            'Denis Didenko',
            'Anton Kharytonov',
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



