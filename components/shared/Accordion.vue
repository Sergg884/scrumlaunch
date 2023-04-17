<template>
  <div class="accordian_container">
    <div class="title_container">
      <div class="icon">
        <img :src="`/images/hire-developers/faq_${imgNumber}.svg`" alt="" />
      </div>
      <p class="title">{{ title }}</p>
      <div class="expand_container" @click="toggleExpand()">
        <img
          class="expand_icon"
          :src="`/images/hire-developers/${isExpanded ? 'minus' : 'plus'}.svg`"
          alt=""
        />
      </div>
    </div>
    <div v-if="isExpanded" class="descr_container">
      <p v-for="(item, i) in description" :key="i" class="description">
        {{ item }}
      </p>
      <div v-if="!!list.length">
        <ul v-for="(ls, i) in list" :key="i">
          <li>{{ ls }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    description: { type: Array, default: () => [] },
    list: { type: Array, default: () => [] },
    imgNumber: { type: Number, default: 0 },
  },

  data() {
    return {
      isExpanded: false,
    }
  },

  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },
  },
}
</script>

<style lang="scss" scoped>
.accordian_container {
  padding-top: 75px;
  padding-bottom: 60px;
  border-top: 1px;
  border-color: #1e1f21;
  border-style: solid;
}

.expand_container {
  width: 70px;
  height: 70px;
  border: 1px solid #1e1f21;
  border-radius: 50%;
  max-width: 100%;
  position: relative;
  cursor: pointer;
  margin-left: auto;
}

.descr_container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

ul {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #1e1f21;
  max-width: 910px;
  margin-left: 97px;
  list-style: disc;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
}

.expand_icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}

.title_container {
  display: flex;
  align-items: center;
  margin-bottom: 26px;
}

.title {
  color: #1e1f21;
  font-weight: 700;
  font-size: 30px;
  line-height: 140%;
  max-width: 910px;
}

.description {
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #1e1f21;
  max-width: 910px;
  margin-left: 97px;
}

@media screen and (max-width: 1440px) {
  .accordian_container {
    padding: 35px 0;
  }
  ul {
    font-size: 14px;
    margin-left: 0px;
    padding: 0 20px;
  }

  .title {
    font-size: 24px;
    max-width: 448px;
    margin-right: 40px;
  }

  .description {
    font-size: 14px;
    margin-left: 0px;
    padding: 0 20px;
  }

  .icon {
    width: auto;
    margin-right: 20px;

    & > img {
      width: 40px;
      height: 40px;
    }
  }

  .title_container {
    margin-bottom: 20px;
  }

  .expand_container {
    width: 100%;
    max-width: 60px;
    height: 60px;
  }
}

@media screen and (max-width: 768px) {
  .accordian_container {
    padding: 30px 0;
  }
  ul {
    font-size: 12px;
    padding: 0 10px;
  }

  .title {
    font-size: 18px;
    max-width: 217px;
    margin-right: 20px;
  }

  .description {
    font-size: 12px;
    padding: 0 10px;
  }

  .icon {
    margin-right: 16px;

    & > img {
      width: 24px;
      height: 24px;
    }
  }

  .title_container {
    margin-bottom: 16px;
  }

  .expand_container {
    width: 100%;
    max-width: 40px;
    height: 40px;
  }
}
</style>
