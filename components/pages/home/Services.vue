<template>
  <section>
    <h2 class="title-global">Services</h2>
    <div class="data-row" v-for="i in arrayData" :key="i.title">
      <div cols="6" class="text">
        {{ i.text }}
      </div>
      <div cols="6" class="img">
        <nuxt-img :src="i.img" :alt="i.text" />
      </div>
    </div>
  </section>
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
      ]
    }
  },

}

</script>

<style lang="scss" scoped>

section {
  h2 {
    margin-bottom: 60px;

    @include desktop-and-up {
      text-align: center;
    }
  }
  .data-row {
    justify-content: space-between;
    border: 1px solid $main-black;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    @include tablet-and-up {
      flex-direction: row;
    }


    &:last-child {
      margin-bottom: 0;
    }
    .text {
      font-weight: 900;
      font-size: 18px;
      padding: 28px;
      align-self: center;
      text-align: center;
      text-transform: uppercase;
      width: 100%;

      @include tablet-and-up {
        word-spacing: 100px;
        font-size: 30px;
        text-align: left;
        flex-basis: 0;
        flex-grow: 1;
      }

      @include desktop-and-up {
        font-size: 48px;
        word-spacing: 160px;
        padding: 42px;
      }
    }
    .img {
      margin: -1px;

      @include tablet-and-up {
        margin-right: -2px;
        flex-basis: 0;
        flex-grow: 1;
      }

      img {
        width: 100%;

        @include tablet-and-up {
          height: 100%;
        }
      }     
    }
  }
}

</style>