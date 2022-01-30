<template>
  <v-col>
    
    <router-link to="/profile">
        <strong>{{currentUser.username}}</strong>
      </router-link>
      <div>
    <br>
    <GmapMap
      @zoom_changed="getCurrentZoom"
      @center_changed="getCurrentCenter"
      :draggable="true"
      :options="{
      zoomControl: true}"
      ref="map"
      zoomControl="true"
      :zoom.sync="zoom"    
      :center="{ 
        lat: 38.26030427395903,
        lng: 21.744173387859256
      }"
      style="width:100%;  height: 600px;"
    >
      <gmap-marker
        :key="index"
        v-for="(gmp, index) in locations"
        :position="gmp"
        :label="gmp.label"
      ></gmap-marker>
    </GmapMap>
  </div>
  <v-row class="justify-center">
      <v-logo-banner/>
    </v-row>
  </v-col>
</template>

<script>
import VLogoBanner from '../components/vLogoBanner.vue';
import Api from '../api/api';
// import {gmapApi} from 'vue2-google-maps';

export default {
  components: {
    VLogoBanner
  },
  props: {

  },
  data() {
    return {
      getMarkersWait: false,
      zoom: 5,
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
    // this.locateGeoLocation();
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