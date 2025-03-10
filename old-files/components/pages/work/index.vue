<template>
  <div>
    <ProjectBanner
      :name="projectName"
      :backgroundColor="backgroundColor"
      :logoFileName="logoFileName"
    />

    <HeroBlock
      :name="projectName"
      :text="projectInfo.text"
      :details="projectInfo.details"
    />

    <ContentImages
      v-if="contentImages?.length"
      :projectName="projectName"
      :contentImages="contentImages"
    />

    <Illustrations
      v-if="hasIllustrations && illustrationImages?.length"
      :projectName="projectName"
      :illustrationImages="illustrationImages"
    />

    <MoreProjects :currentProjectId="2" />
  </div>
</template>

<script>
import HeroBlock from '~/components/pages/work/HeroBlock.vue'
import MoreProjects from '~/components/pages/work/MoreProjects.vue'
import Illustrations from '~/components/pages/work/Illustrations.vue'
import ProjectBanner from '~/components/pages/work/ProjectBanner.vue'
import ContentImages from '~/components/pages/work/ContentImages.vue'

export default {
  components: {
    HeroBlock,
    MoreProjects,
    Illustrations,
    ProjectBanner,
    ContentImages,
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth', // Optional, for smooth scrolling
      })
    })
  },

  props: {
    projectName: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF',
    },
    logoFileName: {
      type: String,
      default: '',
    },
    projectName: {
      type: String,
      default: '',
    },
    projectInfo: {
      type: Object,
      default: () => ({
        text: '',
        details: [],
      }),
    },
    hasIllustrations: {
      type: Boolean,
      default: false,
    },
    illustrationImages: {
      type: Array,
      default: () => [],
    },
    contentImages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
