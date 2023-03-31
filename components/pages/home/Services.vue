<template>
  <b-container class="section">
    <h2 class="title-global">Services</h2>
    <b-row no-gutters class="data-row" v-for="i in arrayData" :key="i.title">
      <b-col cols="6" class="text">
        {{ i.text }}
      </b-col>
      <b-col cols="6" class="img">
        <nuxt-img :src="i.img" :alt="i.text" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {

  data() {
    return {
      arrayData: [
        {
          text: 'Product development',
          img: '/pages/home/services/tab-1.jpg'
        },
        {
          text: 'Staff augmentation',
          img: '/pages/home/services/tab-2.jpg'
        },
        {
          text: 'Dedicated teams',
          img: '/pages/home/services/tab-3.jpg'
        },
      ]
    }
  },

}

</script>

<style lang="scss" scoped>
.container {
  h2 {
    margin-bottom: 60px;
  }
  .data-row {
    justify-content: space-between;
    border: 1px solid $main-black;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
    .text {
      font-weight: 900;
      font-size: 48px;
      align-self: center;
      text-align: left;
      text-transform: uppercase;
      padding: 42px;
      word-spacing: 100px;
    }
    img {
      width: 100%;
      margin: -1px;
      margin-right: -2px;
    }
  }
}

</style>