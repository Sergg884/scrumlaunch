<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/vesta/preview-full.webp`)" :alt="'vesta-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/vesta/img1.webp`)" alt="vesta-img-1">

    <img class="image" :src="require(`~/assets/images/work/vesta/img2.webp`)" alt="vesta-img-2">

    <img class="image" :src="require(`~/assets/images/work/vesta/img3.webp`)" alt="vesta-img-3">

    <img class="image" :src="require(`~/assets/images/work/vesta/img4.webp`)" alt="vesta-img-4">

    <MoreProjects 
      :currentProjectId="6"
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
      name: 'VESTA',
      text: 'Vesta Home is a leading luxury home staging company that is powered by a sophisticated logistics and e-commerce platform. The platform is dual purpose– it acts as an inventory management and booking system for the internal team to coordinate, schedule and reserve furniture items from its collection for use in home staging events. It also enables consumers to buy gently used luxury furniture.',
      details: [
        {
          title: 'Details',
          text: ['2020 - present']
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
  background-color: #F5F5F5;
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



