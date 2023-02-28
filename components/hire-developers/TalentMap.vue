<template>
  <section class="container">
      <div class="map-top-box">
        <div class="map-top-box_left-col">
          <h2 class="map-top-box_left-col--title">The best talent from around the globe at your fingertips.</h2>
          <p class="body-6">ScrumLaunch has talent hubs with management teams on the ground in North America, Latin America,
            Eastern Europe and India to facilitate deep access to each local market.
          </p>
        </div>
        <div class="line"></div>
        <div class="map-top-box_right-col">
          <ul class="map-list">
            <li class="map-list_item">
              <img
                :src="require('@/assets/icons/country-marker.svg')"
                class="item-marker" alt=""/>
              <span class="header-3">North America</span>
            </li>
            <li class="map-list_item">
              <img
                :src="require('@/assets/icons/country-marker.svg')"
                class="item-marker" alt=""/>
              <span class="header-3">Latin America</span>
            </li>
          </ul>
          <ul class="map-list">
            <li class="map-list_item">
              <img
                :src="require('@/assets/icons/country-marker.svg')"
                class="item-marker" alt=""/>
              <span class="header-3">Europe</span>
            </li>
            <li class="map-list_item">
              <img
                :src="require('@/assets/icons/country-marker.svg')"
                class="item-marker" alt=""/>
              <span class="header-3">Asia</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="map">
        <img
          :src="require('@/assets/illustrations/world_map_outline.svg')"
          class="map-image" alt=""/>
      </div>
  </section>
</template>

<script>

export default {

  data: () => ({

  }),

}
</script>

<style lang="scss" scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1440px;
  width: 100%;
  padding: 90px 120px;
  margin: auto;
  text-align: start;

    .map-top-box {
      display: flex;
      justify-content: space-between;
      max-width: 1200px;
      width: 100%;
      border: 1px solid $main-black;
      margin-bottom: 40px;
      padding: 40px 60px;
      &_left-col {
        width: 59%;
        &--title {
          padding-bottom: 20px;
        }
      }
      &_right-col {
        display: flex;
        justify-content: space-between;
        padding-right: 20px;
        width: 37.5%;
        .map-list {
          padding-left: 56px;
          .map-list_item {
            display: flex;
            align-items: center;
            .item-marker{
              width: 17px;
              height: 21px;
              margin-right: 11px;
            }
          }
        }
      }
      .line {
      width: 1px;
      height: 104px;
      background-color:  $main-black;
      }
    }
  .map {
    max-width: 1200px;
    max-height: 598px;
    padding: 10px;
  }
}

</style>
