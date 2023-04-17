<template>
  <div class="input-item">
    <div class="input-item--input-wrapper" :class="{ error: errorMessage }">
      <input
        :id="id"
        :class="[
          'input-item--input-wrapper--input',
          { spacing: spacing },
          { err: errorMessage },
        ]"
        :type="type"
        :name="name"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        @input="handleChange"
      />
    </div>
    <p v-show="errorMessage" class="input-item--input-wrapper--error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },

    placeholder: {
      type: String,
      default: '',
    },

    id: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    type: {
      type: String,
      default: 'text',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    errorMessage: {
      type: String,
      default: 'Error Notification',
    },

    spacing: {
      type: Boolean,
      default: true,
    },
  },

  methods: {
    handleChange(e) {
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style lang="scss">
.input-item {
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  &--input-wrapper {
    position: relative;
    border-bottom: 1px solid #1e1f21;

    &.error {
      border-bottom: 1px solid #ff0000;
    }

    &--input {
      color: #1e1f21;
      border: none;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 150%;
      width: 100%;
      box-shadow: none;
      padding-bottom: 12px;
      box-sizing: border-box;

      /* &.err {
         color: #e83c56;

        &::placeholder {
           color: #e83c56;
        }
      } */

      &:hover,
      &:focus,
      &:focus-visible {
        cursor: pointer;
        border: none;
        outline: none;
      }

      &::placeholder {
        color: #1e1f21;
      }
    }

    &--error {
      font-size: 16px;
      color: #ff0000;
      text-align: left;
      font-weight: 400;
      line-height: 120%;
      position: absolute;
      bottom: -26px;
      left: 0;
    }
  }
}

@media screen and (min-width: 768px) {
  .input-item--input-wrapper--input {
    font-size: 16px;
  }
}

@media screen and (min-width: 1280px) {
  .input-item--input-wrapper--input {
    .spacing {
      padding-left: 80px;
    }

    font-size: 18px;
  }
}
</style>
