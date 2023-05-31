<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/fgn/preview-full.webp`)" :alt="'fgn-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/fgn/img1.webp`)" alt="fgn-img-1">

    <img class="image" :src="require(`~/assets/images/work/fgn/img2.webp`)" alt="fgn-img-2">

    <img class="image" :src="require(`~/assets/images/work/fgn/img3.webp`)" alt="fgn-img-3">

    <MoreProjects 
      :currentProjectId="4"
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
      name: 'Seven: brain teasers & puzzle',
      text: 'Discovery, design and development of a social gaming platform specifically designed for seniors to play intellectually stimulating games and stay connected with family members while collecting data and monitoring for cognitive decline.',
      details: [
        {
          title: 'Details',
          text: ['2021']
        },
        {
          title: 'Work',
          text: [
            'Angular',
            'Ruby on Rails',
            'Heroku',
            'Ionic',
            'Twilio',
            'Product Management',
            'UI/UX Design',
            'User Research',
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
  background-color: #3F5DFF;
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
    margin-bottom: 50px;
    width: 1440px;
  }
  
}

</style>



