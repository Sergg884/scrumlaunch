<template>
  <div class="building-team">
    <section>
      <h2 class="title-big">
        Start building my development team now
      </h2>
      <BaseButton class="button" to="/contact-us">
        Hire developers
      </BaseButton>
    </section>
  </div>
</template>

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