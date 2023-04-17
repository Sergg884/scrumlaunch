<template>
  <div class="talent-map">
    <section>
      <b-row class="text-container" no-gutters>
        <div class="text-block">
          <h3>The best talent from around the globe at your fingertips</h3>
          <p>ScrumLaunch has talent hubs with management teams on the ground in North America, Latin America, Eastern Europe and India to facilitate deep access to each local market.</p>
        </div>
        <div class="separator" />
        <b-row class="locations" no-gutters>
          <b-col class="location" v-for="(location, index) in locations" :key="index">
            <img
              :src="require('@/assets/icons/marker.svg')"
              alt="mark"
            />
            <span>{{ location }}</span>
          </b-col>
        </b-row>
      </b-row>
      <b-row no-gutters>
        <img
          class="map-image"
          :src="require('~/assets/images/home/talent-map/map.svg')"
          alt="talent-map"
        />
      </b-row>
    </section>
  </div>
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

.talent-map {
  background-color: $main-black;
  color: #fff;

  .text-container {
    padding: 40px 26px;
    border: 1px solid #fff;
    text-align: left;
    margin-bottom: 40px;
    flex-wrap: nowrap;
    flex-direction: column;

    @include tablet-and-up {
      flex-direction: row;
      padding: 40px 40px;
    }

    @include desktop-and-up {
      padding: 60px 40px;
    }

    .locations {

      @include tablet-and-up {
        gap: 12px;
        align-self: flex-start;
      }

      @include desktop-and-up {
        column-gap: 30px;
      }
      .location {
        display: flex;
        margin-bottom: 10px;
        align-items: center;


        img {
          vertical-align: initial;
          margin-right: 12px;
        }
        
        span {
          white-space: nowrap;
          font-weight: 600;
          font-size: 14px;

          @include tablet-and-up {
            font-size: 16px;
          }

          @include desktop-and-up {
            font-size: 30px;
          }
        }
      }
    }
    
    .text-block {
      width: 100%;
      @include desktop-and-up {
        width: 75%;
      }

      h3 {
        font-weight: 600;
        font-size: 18px;

        @include tablet-and-up {
          font-size: 24px;
        }

        @include desktop-and-up {
          font-weight: 700;
          font-size: 30px;
        }
      }

      p {
        font-weight: 400;
        font-size: 12px;

        @include tablet-and-up {
          font-size: 16px;
        }

        @include desktop-and-up {
          font-size: 18px;
        }
      }
    }

    .separator {
      background-color:  #fff;
      height: 1px;
      width: 100%;
      margin-bottom: 26px;

      @include tablet-and-up {
        width: 1px;
        height: 104px;
        margin: 0 15px;
      }

      @include desktop-and-up {
        margin: 0 40px;
      }
    }
  }

  .map-image {
    width: 100%;
  }
}

</style>
