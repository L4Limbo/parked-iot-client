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
            type='user.password'
            label="Password"
            hint="At least 8 characters"
            required
          ></v-text-field>
        </v-row>

        <!-- <v-row 
          justify="center"
        >
          <v-text-field
            v-model="passwordConfirm"
            type='password'
            label="Repeat Password"
            hint="Passwords must match"
            required
          ></v-text-field>
        </v-row> -->

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
          @click="handleRegister"
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
import User from '../models/User.js';
import axios from 'axios';

export default {
  components: {
    VLogoBanner
  },
  props: {

  },
  data() {
    return {
      user: new User('', '', ''),
      submitted: false,
      successful: false,
      message: '',
      email:'',
      password:''
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/parked');
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    handleRegister() {
      this.message = '';
      this.submitted = true;
      // this.$validator.validate().then(isValid => {
        alert("HI");
        alert(this.email);
        return axios.post('https://parked-iot-project.herokuapp.com/' + 'usersign/register', {
          username: this.email,
          email: this.email,
          password: this.password
        })
        // if (isValid) {
        //   this.$store.dispatch('auth/register', this.user).then(
        //     data => {
        //       this.message = data;
        //     },
        //     error => {
        //       this.message =
        //         (error.response && error.response.data) ||
        //         error.message ||
        //         error.toString();
        //       this.successful = false;
        //     }
        //   );
        // }
      // });
    }
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