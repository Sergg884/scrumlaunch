<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/helmm/preview-full.webp`)" :alt="'helmm-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/helmm/img1.webp`)" alt="helmm-img-1">

    <img class="image" :src="require(`~/assets/images/work/helmm/img2.webp`)" alt="helmm-img-2">

    <img class="image" :src="require(`~/assets/images/work/helmm/img3.webp`)" alt="helmm-img-3">

    <MoreProjects 
      :currentProjectId="5"
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
      name: 'helmm',
      text: 'Helmm is a rapidly growing direct to consumer e-commerce brand that provides environmentally sustainable deodorant for me. The product has gained significant adoption over the past 5 years and we’ve built a highly scalable end to end e-Commerce system.',
      details: [
        {
          title: 'Details',
          text: ['2017 - 2021']
        },
        {
          title: 'Work',
          text: [
            'Ruby on Rails',
            'Javascript',
            'Payment & Order Management',
            'Integrations',
          ]
        },
        {
          title: 'Team',
          text: [
            'Dmitriy Hmaruk',
            'Ekaterina Andreeva',
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
  background-color: #0D2446;
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



