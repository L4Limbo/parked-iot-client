<template>
  <v-container fluid>
    <v-flex xs12>
      <v-row>
        <v-banner 
          color="primary"
          dark
          elevation="10"
          single-line
          sticky
          shaped
          tile
          width="100%"
        >
        <v-row no-gutters>
        <v-flex xs12>
          <v-icon>mdi-magnify</v-icon>
          &nbsp;
          <GmapAutocomplete
            color="white"
            @place_changed='setPlace'
          />
        </v-flex>
        </v-row>
        </v-banner>
      </v-row>
      <v-row>
        <v-container>
          <v-layout row wrap>
            <v-flex xs12
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
                style="width:100%;  height: 83vh;"
              >
                <gmap-marker
                  :key="index"
                  v-for="(gmp, index) in locations"
                  :position="gmp"
                  :label="gmp.label"
                  :clickable="true"
                  @click="openInfoWindowTemplate(index)"
                  :icon="gmp.icon"
                >
                </gmap-marker>

                <gmap-info-window
                    :options="{
                      maxWidth: 300,
                      pixelOffset: { width: 0, height: -35 }
                    }"
                    :position="infoWindow.position"
                    :opened="infoWindow.open"
                    @closeclick="closeWindowInfo">
                    <div v-html="infoWindow.template"></div>
                </gmap-info-window>

              </GmapMap>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-row>
      <v-card 
        outlined color="transparent"
        class="float-end" 
        absolute
        right
        :style="{position:'absolute', top: '15%', right:'-1%'}"
      >
        <v-col
          v-for="n in 1"
          :key="n"
        >
        <v-row justify="space-around" no-gutters>
            <v-btn color="primary" elevation="12" fab small dark @click="locateGeoLocation">
              <v-icon>mdi-crosshairs</v-icon>
            </v-btn>
          </v-row>
          <br>
          <v-row justify="space-around" no-gutters>
            <v-btn :disabled="Paction == false" color="primary" elevation="12" fab small>
              <v-icon>mdi-parking</v-icon>
            </v-btn>
          </v-row>
          <br>
          <v-row justify="space-around" no-gutters>
            <v-btn color="primary" elevation="12" fab small dark
              @click="openFilters=true">
              <v-icon>mdi-filter</v-icon>
            </v-btn>
          </v-row>
          <br>
          <v-row></v-row>
        </v-col>    
      </v-card>
      <v-row class="justify-center">
        <v-bottom-navigation
          absolute
          :value="value"
          background-color="blue"
        >
          <v-btn>
            <span>Profile</span>
            <router-link to="/profile">
              <v-icon color="white">mdi-account</v-icon>
            </router-link>
          </v-btn>

          <v-btn>
            <span>Saved</span>
              <v-icon color="white">mdi-heart</v-icon>
          </v-btn>

          <v-btn>
            <span>Places</span>
              <v-icon color="white">mdi-shopping</v-icon>
          </v-btn>

          <v-btn >
            <span>Logout</span>
            <v-icon color="white">mdi-logout-variant</v-icon>
          </v-btn>
        </v-bottom-navigation>
      </v-row>

    <v-bottom-sheet
      v-model="openFilters"
      persistent
      width="100%"
      hide-overlay
    >
      <v-card>
        <v-card-title class="text blue lighten-2">
          <v-row no-gutters>
            <v-flex xs5>
              Filters
            </v-flex>
            <v-flex xs1 offset-5>
              <v-btn
                text
                @click="openFilters = false"
              ><v-icon>mdi-close</v-icon></v-btn>
            </v-flex>
          </v-row>
        </v-card-title>
        <br>              
        <v-card-text style="padding-top='10px'">
        <v-select
          dense
          :items="cars"
          v-model="car"
          item-text="label"
          item-value="value"
          label="Car Type"
          outlined  
        ></v-select>
        <v-select
          dense
          v-model="ramp"
          :items="ramps"
          item-text="label"
          item-value="value"
          label="Ramp"
          outlined
        ></v-select>
          <v-slider
            dense
            hint="Im a hint"
            v-model="distance"
            step="5"
            min="10"
            max="100"
            thumb-label="always"
            width="50%"
            label="Distance"
          ></v-slider>       
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </v-flex>
  </v-container>
</template>

<script>
// import vLogoFooter from '../components/vLogoFooter.vue';
import Api from '../api/api';

export default {
  components: {
    // vLogoFooter
  },
  props: {

  },
  data() {
    return {
      selectedParkingSpot: {},
      Paction: false,
      infoWindow: {
          position: {lat: 0, lng: 0},
          open: false,
          template: ''
        },
      car:'car',
      ramp: 0,
      distance: 100,
      ramps: [
        {label: 'Yes', value: 1 },
        {label: 'No', value: 0 },
      ],
      cars: [
        {label: 'Car', value: 'car' },
        {label: 'Van', value: 'van' },
        {label: 'Single-Side Van', value: 'singleSideVan' }
      ],
      openFilters: false,
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
  created() {
    this.locateGeoLocation();
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
    this.createMarkers()
    this.locateGeoLocation();
  },
  methods: {
    setPlace(place) {
      this.$refs.map.$mapPromise.then((map) => {
        map.panTo({lat: place.geometry.location.lat(), lng: place.geometry.location.lng()})
        })
    },
    getCurrentZoom(event){
      this.zoom = event
    },
    getCurrentCenter(event){
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
        this.$refs.map.$mapPromise.then((map) => {
        map.panTo({lat: res.coords.latitude, lng: res.coords.longitude})
        })
      });
    },
    createMarkers() {
      if (!this.getMarkersWait) {
        this.infoWindow.open = false;
        this.Paction = false;
        this.selectedParkingSpot = {};
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
          spots[i]['icon'] = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
          spots[i]['id'] = i
          this.locations.push(spots[i])
        }
      }).catch((err) => {
        this.test = err;
      })
    },
    openInfoWindowTemplate(index) {
      this.test = index
      this.Paction = true;
      this.locations[index].icon = "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
      this.selectedParkingSpot = this.locations[index];
      for(var i in this.locations) {
        if(i != index) {
          this.locations[i].icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
      }
      var {lat,lng,ramp,type,dist} = this.locations[index];
      
      this.infoWindow.position = { lat: lat, lng: lng}
      if (ramp == 0) {
        ramp = 'Available'
      }
      else {
         ramp = 'Unavailable'
      }

      if (type == 'car') {
        type = 'Car'
      } 
      else if (type == 'van') {
        type = 'Van'
      }
      else {
        type = 'Single-Side Van'
      }

      this.test = {lat,lng,ramp,type,dist}
      this.infoWindow.template = `<b> Ramp:</b> ${ramp}<br><b>Distance:</b> ${dist} meters<br><b>Car Type:</b> ${type}<br>`
      this.infoWindow.open = true
    },
    closeWindowInfo() {
      this.Paction = false;
      this.infoWindow.open = false;
      this.selectedParkingSpot = {};
      for(var i in this.locations) {
        this.locations[i].icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      }
    }
  },
  watch: {
  }
};
</script>

<style lang="scss" scoped>
.v-dialog {
  position: absolute;
  bottom: 0%;
}
.v-btn.v-btn--disabled.v-btn--fab.v-btn--has-bg.v-btn--round.theme--light.v-size--small.v-btn--disabled.v-btn--fab.v-btn--has-bg.v-btn--round.theme--light.v-size--small{
  opacity: 1 !important;
  background-color: rgb(218, 38, 38) !important;
  border: 1px solid black !important;
}
</style>