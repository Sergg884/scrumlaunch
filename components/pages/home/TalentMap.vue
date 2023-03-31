<template>
  <section>
    <b-container class="section">
      <b-row class="text-container">
        <div class="text-block">
          <h3>The best talent from around the globe at your fingertips</h3>
          <p>ScrumLaunch has talent hubs with management teams on the ground in North America, Latin America, Eastern Europe and India to facilitate deep access to each local market.</p>
        </div>
        <div class="separator" />
        <b-row>
          <b-col md="auto" class="location" cols="6" v-for="(location, index) in locations" :key="index">
            <img
              :src="require('@/assets/icons/marker.svg')"
              alt="mark"
            />
            <span>{{ location }}</span>
          </b-col>
        </b-row>
      </b-row>
      <b-row>
        <nuxt-img
          class="map-image"
          src="/pages/home/talent-map/map.svg"
          alt="talent-map"
        />
      </b-row>
    </b-container>
  </section>
</template>

<script>

export default {

  data() {
    return {
      locations: [
        'North America',
        'Europe',
        'Latin America',
        'Asia'
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

section {
  background-color: $main-black;
  color: #fff;

  .text-container {
    padding: 40px 60px;
    border: 1px solid #fff;
    text-align: left;
    margin-bottom: 40px;
    flex-wrap: nowrap;

    .location {

      img {
        vertical-align: initial;
      }
      
      span {
        white-space: nowrap;
        font-weight: 600;
        font-size: 30px;
      }
    }
    .text-block {
      width: 100%;

      h3 {
        font-weight: 600;
        font-size: 30px;
      }

      p {
        font-weight: 400;
        font-size: 18px;
      }
    }

    .separator {
      width: 1px;
      height: 104px;
      background-color:  #fff;
      margin: 0 40px;
    }
  }
}

</style>
