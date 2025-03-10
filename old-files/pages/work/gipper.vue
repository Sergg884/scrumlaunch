<template>
  <div>
    <Content
      :projectName="name"
      :backgroundColor="backgroundColor"
      :logoFileName="logoFileName"
      :projectInfo="projectInfo"
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
      name: 'gipper',
      backgroundColor: '#242431',
      logoFileName: 'preview-full.svg',
      projectInfo: {
        text: 'Gipper is the leading content marketing platform for schools. It allows faculty and students to easily generate and post beautiful social media graphics. It is used by thousands of schools across the United States.',
        details: [
          {
            title: 'Details',
            text: ['2016'],
          },
          {
            title: 'Work',
            text: ['UX/UI design', 'Development'],
          },
          {
            title: 'Team',
            text: [
              'Anastasia Shaduro',
              'Aleksei Vashchenko',
              'Ekaterina Andreeva',
            ],
          },
        ],
      },
      contentImages: ['content1.webp', 'content2.webp'],
    }
  },
}
</script>
