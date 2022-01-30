<template>
    <v-app>
    <!-- <v-flex v-if="displayAlert"> -->
        <v-alert v-if="displayAlert!=''" :type="alertType" dismissible
          >{{displayAlert}}
        </v-alert>
    <!-- </v-flex> -->
    <router-view @alert="DisplayAlert"></router-view>
  </v-app>
</template>

<script>

export default {
  components: { },
  data() {
    return {
      displayAlert:'',
      alertType:'success'
    }
  },
  methods: {
    DisplayAlert(alertDetails) {
      this.alertType = alertDetails[0];
      this.displayAlert=alertDetails[1];
    }
  },
  watch: {
    displayAlert() {
      setTimeout(() => this.displayAlert = '', 4000)
    }
  }
}
</script>
<style>


</style>
