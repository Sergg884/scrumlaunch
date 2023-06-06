<template>
  <div class="building-team">
    <section>
      <h2 class="title-big">
        Start building my development team now
      </h2>
      <BaseButton class="button" @click="doScrollTop()">
        Hire developers
      </BaseButton>
    </section>
  </div>
</template>

<script>
  export default {
    
    methods: {
      doScrollTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })

        setTimeout(() => {
          document.getElementById('email-input').focus()
        }, 1000)
      },
    },
  }


</script>

<style lang="scss" scoped>

.building-team {
  display: block;
  background-color: $main-black;
  display: flex;

  h2 {
    color: #fff;
  }

  .button {
    width: fit-content;
    margin: auto;
  }
}

</style>