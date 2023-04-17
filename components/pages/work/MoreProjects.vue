<template>
  <div class="more-projects">
    <h2 class="title-big">
      More projects
    </h2>
    <div class="projects">
      <div
        class="project"
        :style="{
          'background-image': 'url(' + require('~/assets/images/work' + prev.url + '/preview.webp') + ')',
        }"
        @click="navigateTo(prev.url)">
        <div class="hover">
          <span>Previous project</span>
          <p>{{ prev.name }}</p>
        </div>
      </div>
      
      <div
        class="project"
        :style="{
          'background-image': 'url(' + require('~/assets/images/work' + next.url + '/preview-full.webp') + ')',
        }"
        @click="navigateTo(next.url)">
        <div class="hover">
          <span>Next project</span>
          <p>{{ next.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    currentProjectId: {
      type: Number,
      default: null
    }
  },

  computed: {
    ...mapGetters({
      projects: 'projects/getAllProjects'
    }),

    prev() {
      const index = this.projects.findIndex(item => item.id === this.currentProjectId);
      if (index === 0) {
        return this.projects[this.projects.length - 1]
      }
      return this.projects[index - 1]
    },
    next() {
      const index = this.projects.findIndex(item => item.id === this.currentProjectId);
      if (index == this.projects.length - 1) {
        return this.projects[0]
      }
      return this.projects[index + 1]
    },
  },

  methods: {
    navigateTo(url) {
      this.$router.push(`/work${url}`)
    },
  }
}

</script>

<style lang="scss" scoped>

.more-projects {
  text-align: left;
  margin: auto;
  margin-top: 70px;
  width: 375px;

  @include tablet-and-up {
    margin-top: 110px;
    width: 768px;
  }

  @include desktop-and-up {
    width: 1440px;
  }

  h2 {
    padding: 0 20px;
  }
  
  .projects {
    display: flex;
    flex-direction: column;
    @include tablet-and-up {
      flex-direction: row;
    }
    
    .project {
      width: 100%;
      height: 265px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;

      @include desktop-and-up {
        height: 480px;
      }

      .hover {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        opacity: 0;
        color: #fff;
        transition: 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;

        span {
          font-size: 14px;
        }

        p {
          font-weight: 900;
          font-size: 20px;
          @include desktop-and-up {
            font-size: 26px;
          }
        }

        &:hover {
          opacity: 1;
        }
      }

    }
  }
}

</style>