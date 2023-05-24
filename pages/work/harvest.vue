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
        text: 'Harvest is a negotiation fee platform where you can manage debts and expenses. US banks charge clients enormous amount of fee for each transaction or ATM cash transactions. People struggle with negotiating fees through banks and return their money so Harvest helps with this problem and provides and automatic and fast solution to eliminate this problem.',
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
