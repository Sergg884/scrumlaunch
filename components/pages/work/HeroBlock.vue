<template>
  <section class="info">
    <div class="title">
      <h1>
        {{ name }}
      </h1>
    </div>
    <div class="text-wrapper">
      <p class="text-main">
        {{ text }}
      </p>
      <b-row no-gutters class="description">
        <b-col v-for="i in details" :key="i.title" cols="4">
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

    @include desktop-and-up {
      padding-right: 10%;
      width: 45%;
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
  .text-wrapper {
    @include desktop-and-up {
      width: 55%;
    }
  }

  .description {
    margin-top: 40px;

    @include tablet-and-up {
      margin-top: 60px;
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