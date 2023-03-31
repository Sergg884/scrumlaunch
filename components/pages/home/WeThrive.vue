<template>
  <section>
    <b-container class="section">
      <h2 class="title-global">We thrive by making our <br/> clients thrive</h2>
      <b-row class="data-row" v-for="i in arrayData" :key="i.title">
        <b-col cols="8" class="title">
          {{ i.title }}
        </b-col>
        <b-col cols="4" class="data">
          {{ i.data }}
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>

export default {

  data() {
    return {
      arrayData: [
        {
          title: 'Acquisitions by Unicorns',
          data: '2'
        },
        {
          title: 'Сlients raised Seed - Series D funding',
          data: '10+'
        },
        {
          title: 'Active monthly users across clients’ products ',
          data: '100M'
        },
      ]
    }
  },

}

</script>

<style lang="scss" scoped>

section {
  background-color: $main-black;
  .container {
    h2 {
      color: #fff;
    }
    .data-row {
      justify-content: space-between;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 16px 0;
      color: #fff;
      margin-bottom: -1px;
      .title {
        text-align: left;
        font-weight: 700;
        font-size: 28px;
        align-self: end;
      }
      .data {
        text-align: right;
        font-weight: 700;
        font-size: 142px;
        color: $main-green;
        line-height: 100%;
      }
    }
  }
}

</style>