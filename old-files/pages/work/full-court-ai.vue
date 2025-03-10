<template>
  <div> 
    <div class="hero">
      <img :src="require(`~/assets/images/work/full-court-ai/hero-2.svg`)" :alt="'full-court-ai-hero'">
    </div>
    
    <HeroBlock :name="name" :text="text" :details="details" />

    <img class="image" :src="require(`~/assets/images/work/full-court-ai/img1.webp`)" alt="full-court-ai-img-1">

    <section class="info">
      <div>
        <h2>Product Objective</h2>
        <p>
          During recording users can mark certain moments of the game with stickers which would help cutting the whole video into clips.
        </p>
        <p>
          The application allows to create and edit videos, create your own teams and share clips within the team.
        </p>
      </div>
    </section>

    <img class="image" :src="require(`~/assets/images/work/full-court-ai/img2.webp`)" alt="full-court-ai-img-2">

    <img class="image" :src="require(`~/assets/images/work/full-court-ai/img3.webp`)" alt="full-court-ai-img-3">

    <MoreProjects 
      :currentProjectId="3"
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
      name: 'full court ai',
      text: 'FullCourtAI is an AI-powered mobile application and cloud video processing pipeline that enables users to effortlessly record, edit and share youth sports games as if they were recorded by a cameraman by combining computer vision and neural networks to automatically track the action. The company is backed by Silicon Valley investors.',
      details: [
        {
          title: 'Details',
          text: ['2018 - present']
        },
        {
          title: 'Work',
          text: [
            'Work',
            'Swift',
            'Composable Architecture',
            'AWS',
            'GCP',
            'Python',
            'Machine Learning',
            'Neural Networks',
            'Computer Vision',
            'Video Transcoding',
            'ETL Pipeline',
            'Product Management',
            'Webflow',
            'Rollbar',
          ]
        },
        {
          title: 'Team',
          text: [
            'Dasha Shyf',
            'Yuliia Hlushkina'
          ]
        },
      ],
    }
  }
};
</script>

<style lang="scss" scoped>

.hero {

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: -106px;
  background-color: #1E2834;
  height: 392px;

  @include tablet-and-up {
      height: 800px;
    }

  img {
    height: 60%;

    @include tablet-and-up {
      height: 70%;
    }
  }
}

.info {
  text-align: left;

  div {
    @include desktop-and-up {
      width: 80%;
    }
  }



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



