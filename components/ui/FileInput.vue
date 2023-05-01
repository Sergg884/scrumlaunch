<template>
  <div>
    <input
      id="file-input"
      ref="fileInput"
      type="file"
      accept="application/pdf"
      @change="onFileChange($event)"
    />
    <div class="fileInput__wrap" @click="onPickFile">
      <div
        :class="[
          'fileInput__base fileInput__clip',
          { error: errorMessage, 'border-default': !errorMessage },
        ]"
      >
        <span>{{ value || placeholder }}</span>
      </div>
    </div>
    <p v-show="errorMessage" class="input-error">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String, default: '' },

    placeholder: {
      type: String,
      default: '',
    },

    errorMessage: {
      type: String,
      default: '',
    },
  },

  methods: {
    onPickFile() {
      this.$refs.fileInput.click()
    },
    onFileChange($event) {
      this.$emit('file-updated', $event.target.files[0])
    },
  },
}
</script>

<style lang="scss" scoped>
input[type='file'] {
  display: none;
}

.error {
  border-bottom: 1px solid #ff0000;
}

.input-error {
  margin-top: 5px;
  color: #ff0000;
}

.border-default {
  border-bottom: 1px solid #1e1f21;
}

.fileInput {
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
    user-select: none;
  }

  &__clip {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 10px;
      display: block;
      width: 24px;
      height: 24px;
      background: url(/images/clip.svg) 0 0 no-repeat;
      transform: rotate(180deg);
    }
  }
}
</style>
