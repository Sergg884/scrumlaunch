<template>
  <div class="thrive">
    <section>
      <h2 class="title-global">We thrive by making our <br/> clients thrive</h2>
      <div class="data-row" v-for="i in arrayData" :key="i.title" >
        <div class="title">
          {{ i.title }}
        </div>
        <div class="data">
          {{ i.data }}
        </div>
      </div>
    </section>
  </div>
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

.thrive {
  width: 100%;
  background-color: $main-black;
  display: flex;
  section {

    width: 100%;

    h2 {
      color: #fff;
      text-align: center;
      margin-bottom: 40px;

      @include tablet-and-up {
        margin-bottom: 60px;
      }

      @include desktop-and-up {
        margin-bottom: 80px;
      }
    }
    .data-row {
      justify-content: space-between;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      padding: 16px 0;
      color: #fff;
      margin-bottom: -1px;
      display: flex;
      .title {
        text-align: left;
        font-weight: 700;
        align-self: end;
        font-size: 14px;

        @include tablet-and-up {

        }

        @include desktop-and-up {
          font-size: 28px;
        }
      }
      .data {
        text-align: right;
        font-weight: 700;
        font-size: 65px;
        color: $main-green;
        line-height: 100%;

        @include tablet-and-up {

        }

        @include desktop-and-up {
          font-size: 142px;
        }
      }
    }
  }
}

</style>