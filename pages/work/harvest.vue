<template>
  <div>
    <Content
      :projectName="name"
      :backgroundColor="backgroundColor"
      :projectInfo="projectInfo"
      :hasIllustrations="hasIllustrations"
      :illustrationImages="illustrations"
      :contentImages="contentImages"
    />
  </div>
</template>

<script>
import Content from '~/components/pages/work/index.vue'

export default {
  components: {
    Content,
  },

  data() {
    return {
      name: 'harvest',
      backgroundColor: '#74c947',
      projectInfo: {
        text: 'Harvest is an AI-powered application that helps consumers automatically negotiate bank fees.  The platform has been acquired by Acorns Inc.',
        details: [
          {
            title: 'Details',
            text: ['2021'],
          },
          {
            title: 'Work',
            text: ['UX/UI design', 'Development'],
          },
          {
            title: 'Team',
            text: ['Dasha Shyf', 'Yuliia Hlushkina', 'Yevheniia Tkachenko'],
          },
        ],
      },
      contentImages: ['content1.webp'],
      hasIllustrations: true,
      illustrations: [
        'illustration1.webp',
        'illustration2.webp',
        'illustration3.webp',
        'illustration4.webp',
        'illustration5.webp',
      ],
    }
  },
}
</script>
