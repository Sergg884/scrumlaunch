<template>
  <div class="input-item" :class="{ error: errorMessage }">
      <input
        :id="id"
        :class="[
          'input-item--input',
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
    <p v-show="errorMessage" class="input-item--input--error">
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
  &.error {
    border-bottom: 1px solid #ff0000;
  }
  &--input {
    color: $main-black;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    box-sizing: border-box;
    height: 42px;
    border: 1px solid var($main-black);
    padding-left: 10px;
    margin-top: 8px;
    background-color: white;
      &.error {
      border-bottom: 1px solid #ff0000;
    }
    @media screen and (max-width: 768px) {
      width: auto;
    }
    &:hover,
    &:focus,
    &:focus-visible {
      border: none;
      outline: none;
    }

    &::placeholder {
      color: #1e1f21;
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
  .input-item--input {
    font-size: 16px;
  }
}

@media screen and (min-width: 1280px) {
  .input-item--input {
    .spacing {
      padding-left: 80px;
    }

    font-size: 18px;
  }
}
</style>
