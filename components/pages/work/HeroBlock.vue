<template>
  <section class="info">
    <div class="title">
      <h1>
        {{ name }}
      </h1>
    </div>
    <div>
      <p class="text-main">
        {{ text }}
      </p>
      <b-row no-gutters class="description">
        <b-col cols="3" v-for="i in details" :key="i.title">
          <p class="name">
            {{ i.title }}
          </p>
          <ul class="text">
            <li v-for="j in i.text" :key="j">
              {{ j }}
            </li>
          </ul>
        </b-col>
      </b-row>
    </div>
  </section>
</template>

<script>
export default {

  props: {
    name: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    details: {
      type: Array,
      default() {
        return []
      }
    },
  },
}
</script>

<style lang="scss" scoped>

.info {
  display: flex;
  text-align: left;
  flex-direction: column;

  @include desktop-and-up {
    flex-direction: row;
  }

  .title {
    width: 100%;

    @include desktop-and-up {
      min-width: 500px;
    }
    
    h1 {
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
  }
  .description {
    margin-top: 40px;

    @include tablet-and-up {
      margin-top: 120px;
    }
    
    @include desktop-and-up {
      margin-top: 120px;
    }
    
    .name {
      font-weight: 600;
      font-size: 12px;
      opacity: 0.5;
      margin-bottom: 10px;

      @include tablet-and-up {
        font-size: 14px;
      }

      @include desktop-and-up {
        font-size: 16px;
      }
    }
    .text {
      list-style: none;
      padding-left: 0;
      font-weight: 600;
      font-size: 12px;
      
      li {
        margin-bottom: 4px;
      }

      @include tablet-and-up {
        font-size: 14px;
      }

      @include desktop-and-up {
        font-size: 16px;
      }
    }
  }
}
</style>