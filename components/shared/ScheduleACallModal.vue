<template>
  <transition name="modal-fade">
    <div class="modal" role="dialog" @click="$emit('close')">
      <div class="modal__content">
        <header id="modalTitle" class="modal_header">
          <img
            :src="require('@/assets/icons/black_close.svg')"
            aria-label="Close modal"
            @click="$emit('close')"
          />
        </header>
        <slot>
          <div>
            <client-only>
              <div
                class="meetings-iframe-container"
                data-src="https://meetings.hubspot.com/andy-daidone?embed=true">
              </div>
              <script type="text/javascript" src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js">
              </script>
            </client-only>
          </div>
        </slot>
      </div>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.modal {
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}

.modal__content {
  margin: auto;
  width: 100%;
  background: white;

  @include tablet-and-up {
    width: 65%;
    max-height: 95%;
  }
}

.modal_header {
  display: flex;
  justify-content: flex-end;
  border: none;
  padding: 0;

  img {
    width: 20px;
    height: 20px;
    margin: 15px;
    cursor: pointer;

    @include tablet-and-up {
      width: 30px;
      height: 30px;
      margin: 30px;
    }
  }
}

@media screen and (max-height: 800px) {
  .modal__content {
    overflow-y: auto;
  }
}
</style>
