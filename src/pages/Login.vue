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
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-row>

        <v-row 
          justify="center"
        >
          <v-text-field
            v-model="user.password"
            type='password'
            label="Password"
            hint="At least 8 characters"
            required
          ></v-text-field>
        </v-row>
        <br>
        <v-row 
          justify="center"
        > 
         <!-- to="/parked" -->
          <v-btn 
          class="mr white--text"
          block
          outline
          x-large
          color="rgba(0,32,96,255)"
          @click="handleLogin"
          >
            Log in
          </v-btn>
        </v-row>
      </v-form>
      </v-row>
      <br>
      <v-row
        justify="center"
      >
      <v-item class="caption">
        <router-link to="/register">Don't have an account? </router-link>
      </v-item>
      </v-row>
    </v-column>
</template>

<script>
import VLogoBanner from '../components/vLogoBanner.vue';
import User from '../models/User.js'

export default {
  components: {
    VLogoBanner
  },
  props: {

  },
  data() {
    return {
      user: new User('', ''),
      loading: false,
      message: ''
    }
  },
  mounted() {

  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    } 
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then(isValid => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch('auth/login', this.user).then(
            () => {
              this.$router.push('/profile');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
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