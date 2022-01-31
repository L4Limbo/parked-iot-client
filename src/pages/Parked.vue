<template>

  <v-col>
    <v-banner 
      color="primary"
      dark
      elevation="2"
      single-line
      sticky
      shaped
      tile
    >
    <router-link to="/profile">
      <v-icon large>mdi-account</v-icon>
    </router-link>
    {{currentUser.username}}
    </v-banner>
    <br>
    <v-row>
      <v-container>
        <v-layout row wrap>
          <v-flex xs9 offset-xs1
          >
            <v-card
              color="blue"
              height="100%"
            >
            <GmapMap
              @zoom_changed="getCurrentZoom"
              @center_changed="getCurrentCenter"
              :draggable="true"
              :options="{
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: true,
                disableDefaultUi: false
              }"
              ref="map"
              zoomControl="true"
              :zoom.sync="zoom"    
              :center="{ 
                lat: 38.26030427395903,
                lng: 21.744173387859256
              }"
              style="width:100%;  height: 75vh;"
            >
              <gmap-marker
                :key="index"
                v-for="(gmp, index) in locations"
                :position="gmp"
                :label="gmp.label"
              >
              </gmap-marker>

              <gmap-info-window
                :options="infoOptions"
                :position="infoPosition"
                :opened="infoOpened"
                :content="infoContent"
                @closeclick="infoOpened=false">
              </gmap-info-window>
                <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @click="toggleInfo(m, index)"
                ></gmap-marker>

            </GmapMap>
            </v-card>
          </v-flex>
          <v-flex xs1 order-xs1>
            <v-card
              height="100%"
            >
              <v-col
                v-for="n in 1"
                :key="n"
              >
                <v-row justify="space-around" no-gutters>
                  <v-btn color="primary" fab x-small dark>
                    <v-icon>mdi-parking</v-icon>
                  </v-btn>
                </v-row>
                <br>
                <v-row justify="space-around" no-gutters>
                  <v-btn color="primary" fab x-small dark>
                    <v-icon>mdi-filter</v-icon>
                  </v-btn>
                </v-row>
                <br>
                <v-row justify="space-around" no-gutters>
                  <v-btn color="primary" fab x-small dark>
                    <v-icon>search</v-icon>
                  </v-btn>
                </v-row>
                <v-row></v-row>
              </v-col>
            </v-card>
            
          </v-flex>
        </v-layout>
      </v-container>
    </v-row>
    <v-row class="justify-center">
      <v-logo-banner/>
    </v-row>
  </v-col>
</template>

<script>
import VLogoBanner from '../components/vLogoBanner.vue';
import Api from '../api/api';

export default {
  components: {
    VLogoBanner
  },
  props: {

  },
  data() {
    return {
      getMarkersWait: false,
      zoom: 15,
      center: { 
        lat: 38.26030427395903,
        lng: 21.744173387859256
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null,
      locations: [],
      test: '',
      currentCenterLat: 38.26030427395903,
      currentCenterLng: 21.744173387859256,
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.createMarkers()
    //  this.setLocationLatLng();
    this.locateGeoLocation();
  },
  methods: {
    getCurrentZoom(event){
      this.zoom = event
    },
    getCurrentCenter(event){
      this.test = Object.keys(event)
      this.currentCenterLat = event.lat()
      this.currentCenterLng = event.lng()
      this.createMarkers();
    },
    locateGeoLocation() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    },
    createMarkers() {
      if (!this.getMarkersWait) {
        this.locations = []
        setTimeout(this.getMarkers(), 1000);
        this.getMarkersWait = true;
        setTimeout(() => { this.getMarkersWait = false }, 200)
      }
    },
    getMarkers() {
      var data = new FormData();
      data.append('gpsLong', this.currentCenterLng);
      data.append('gpsLat', this.currentCenterLat);
      Api.post(data, 'spots/available/').then((response)=>{
        this.test = response;
        var spots = response.data;
        for(var i in spots) {
          Object.defineProperty(spots[i], 'lng',
          Object.getOwnPropertyDescriptor(spots[i], 'long'));
          delete spots[i]['long'];
          this.locations.push(spots[i])
        }
        this.test = spots
      }).catch((err) => {
        this.test = err;
      })
    }
  }
};
</script>

<style>

</style>