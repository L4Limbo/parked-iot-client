<template>
  <v-column>
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
            label="Password"
            :rules="passwordRules"
            :append-icon="pswVisibility ? 'visibility' : 'visibility_off'"
            @click:append="() => (pswVisibility = !pswVisibility)"
            :type="pswVisibility ? 'password' : 'text'"
            required
          ></v-text-field>
        </v-row>

        <v-row 
          justify="center"
        >
          <v-text-field
            v-model="passwordConf"
            label="Confirm Password"
            :rules="passwordConfRules"
            :append-icon="pswCVisibility ? 'visibility' : 'visibility_off'"
            @click:append="() => (pswCVisibility = !pswCVisibility)"
            :type="pswCVisibility ? 'password' : 'text'"
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
          @click="validateForm"
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
      valid: false,
      message: '',
      password:'',
      passwordConf: '',
      error:'',
      pswVisibility: String,
      pswCVisibility: String,
      email:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 6) || 'At least 6 characters'
      ],
      passwordConfRules: [
        v => (v===this.password) || 'Password must match'
      ]
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push('/profile');
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  methods: {
    validateForm() {
      if (this.$refs.form.validate()) {
          this.handleRegister();
      } else {
        alert("Form is not valid");
      }
    },
    handleRegister() {
      let data = new FormData();
      data.append('username', this.email);
      data.append('email', this.email);
      data.append('password', this.password);
      this.$store.dispatch('auth/register', data).then(response =>
        {
          this.message = response;
          this.$emit('alert', ['success',"Your account is ready. You can now Login"])
          this.$router.push('/login')
        }).catch((err)=>{
          this.error = err;    
          this.$emit('alert', ['error', "Something went wrong. This email is already used"]);
        })
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