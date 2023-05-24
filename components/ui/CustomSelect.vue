<template>
  <div class="select__wrap">
    <div
      class="select__base select__arrow"
      :class="{ reverse: dropdown }"
      @click="dropdown = !dropdown"
    >
      <span>{{ selectedItem }}</span>
    </div>

    <div v-if="dropdown" class="select__dropdown">
      <ul class="select__dropdown_inner">
        <li
          v-for="(item, i) in selectItems"
          :key="i"
          class="select__dropdown_item"
          @click="setNewValue(item)"
        >
          {{ item.text }}
        </li>
      </ul>
    </div>
    <p v-show="errorMessage" class="input-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },

    label: {
      type: String,
      default: '',
    },

    modelValue: {
      type: String,
      default: '',
    },

    emptyValueText: {
      type: String,
      default: '',
    },

    itemText: {
      type: String,
      default: 'text',
    },

    itemValue: {
      type: String,
      default: 'value',
    },
    errorMessage: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      selectItems: null,
      dropdown: false,
      selectedItem: null,
    }
  },

  mounted() {
    this.setSelectItems()
    document.addEventListener('click', this.close)
  },

  beforeDestroy () {
    document.removeEventListener('click',this.close)
  },

  methods: {
    close (e) {
      if (!this.$el.contains(e.target)) {
        this.dropdown = false
      }
    },

    setSelectItems() {
      this.selectItems = this.items.map((item) => {
        return { text: item, value: item }
      })

      this.selectItems.unshift({ text: this.emptyValueText, value: '' })

      if (!this.selectedItem) {
        this.selectedItem = this.label
      } else {
        this.selectedItem = this.label
      }
    },

    setNewValue(newItem) {
      this.$emit('update:modelValue', newItem.value)
      this.dropdown = false
      this.selectedItem = !newItem.value ? this.label : newItem.text
    },
  },
}
</script>

<style lang="scss" scoped>
.input-error {
  margin-top: 5px;
  color: #ff0000;
}
.select {
  & * {
    box-sizing: border-box;
  }

  &__wrap {
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  &__base {
    position: relative;
    padding: 8px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 150%;
    border-bottom: 1px solid #1e1f21;
    user-select: none;
  }

  &__arrow {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 10px;
      display: block;
      width: 24px;
      height: 24px;
      background: url(/icons/chevron.svg) center no-repeat;
      transform: rotate(0deg);
    }

    &.reverse {
      &:before {
        transform: rotate(180deg);
      }
    }
  }

  &__dropdown {
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    max-height: 282px;
    background: #fff;
    border: 1px solid #1e1f21;
    overflow: auto;
    z-index: 2;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__dropdown_inner {
    padding: 12px 20px;
  }

  &__dropdown_item {
    padding: 8px 0;
    list-style: none;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 150%;
    cursor: pointer;
    user-select: none;

    &:hover {
      font-weight: 700;
      color: #12e2b0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
