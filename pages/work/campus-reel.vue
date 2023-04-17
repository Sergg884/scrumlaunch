<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/campus-reel/preview-full.webp`)" :alt="'campus-reel-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/campus-reel/img1.webp`)" alt="campus-reel-img-1">

    <img class="image" :src="require(`~/assets/images/work/campus-reel/img2.webp`)" alt="campus-reel-img-2">

    <MoreProjects 
      :currentProjectId="1"
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
      name: 'Campusreel',
      text: 'CampusReel is a web application consisting of student-driven video content that helps prospective students and their families make the right college choice. The platform serves millions of users each month and has been featured on the Today Show.',
      details: [
        {
          title: 'Details',
          text: ['2019']
        },
        {
          title: 'Work',
          text: [
            'Ruby on Rails',
            'REST API Development',
            'Javascript',
            'AWS & DevOps',
            'UI/UX Design',
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
  background-color: #20263D;
  img {
    height: 392px;

    @include tablet-and-up {
      height: 800px;
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



