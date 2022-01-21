<template>
  <v-column>
    <br><br>
    <v-row class="justify-center">
      <v-logo-banner/>
    </v-row>
    <br>
    <v-row class="justify-center">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-row 
          justify="center"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-row>

        <v-row 
          justify="center"
        >
          <v-text-field
            v-model="password"
            type='password'
            label="Password"
            hint="At least 8 characters"
            required
          ></v-text-field>
        </v-row>

        <v-row 
          justify="center"
        >
          <v-text-field
            v-model="passwordConfirm"
            type='password'
            label="Repeat Password"
            hint="Passwords must match"
            required
          ></v-text-field>
        </v-row>

        <br>
        <v-row 
          justify="center"
        >
          <v-btn
          class="mr white--text"
          block
          outline
          x-large
          color="rgba(0,32,96,255)"
          >
            Register
          </v-btn>
        </v-row>
      </v-form>
      </v-row>
      <br>
      <v-row
        justify="center"
      >
      <v-item class="caption">
        <router-link to="/login">Already have an account? </router-link>
      </v-item>
      </v-row>
    </v-column>
</template>

<script>
import VLogoBanner from '../components/vLogoBanner.vue';

export default {
  components: {
    VLogoBanner
  },
  props: {

  },
  data() {
    return {
      email:"",
      password:""
    }
  },
  mounted() {

  },
  computed: {

  },
  methods: {

  },
  watch: {

  }
}
</script>

<style>
.row.justify-center{
  margin-top: 2px;
}

.caption{
  padding: 1vh;
}
</style>