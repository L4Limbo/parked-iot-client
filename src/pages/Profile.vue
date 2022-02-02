<template>
  <v-container>
    <v-flex xs12>
      <v-row class="justify-center">
        <profile-banner/>
      </v-row>
      <v-row class="justify-center">
        <v-form
          ref="form"
          lazy-validation
        >
          <v-row 
            justify="center"
          >
            <v-text-field
              v-model="currentUser.username"
              label="E-mail"
              required
              readonly
            ></v-text-field>
          </v-row>

          <v-row 
            justify="center"
          >
            <v-text-field
              v-model="currentUser.password"
              label="Password"
              :append-icon="pswVisibility ? 'visibility' : 'visibility_off'"
              readonly
              @click:append="() => (pswVisibility = !pswVisibility)"
              :type="pswVisibility ? 'password' : 'text'"
              required
            ></v-text-field>
          </v-row>
          <br>
          
        </v-form>
        </v-row>
        <!-- <upload/> -->

        <v-row class="justify-center">
          <v-form
            ref="form"
            lazy-validation
            width="100%"
          >
            <v-row class="justify-center">
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                append-icon="mdi-camera"
                prepend-icon=""
                show-size
                truncate-length="4"
                placeholder="Upload Blue Card"
                dense
                chips
                solo
                filled
                @change="selectBlueCard"
                v-model="blueCard"
              ></v-file-input>
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
                @click="uploadFile"
                >
                  Upload
                </v-btn>
              </v-row>
          </v-form>
        </v-row>

        <v-row class="justify-center">
          <v-bottom-navigation
            absolute
            :value="value"
            background-color="blue"
          >
            <v-btn>
              <span>Map</span>
              <router-link to="/parked">
                <v-icon color="white">mdi-map</v-icon>
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

            <v-btn @click="logOut">
              <span>Logout</span>
              <v-icon color="white">mdi-logout-variant</v-icon>
            </v-btn>
          </v-bottom-navigation>
        </v-row>
      </v-flex>
  </v-container>
</template>

<script>
import ProfileBanner from '../components/ProfileBanner.vue';
// import Upload from '../components/upload.vue'
import Api from '../api/api';

export default {
  name: 'Profile',
  components: {
    ProfileBanner,
    // Upload
  },
  data() {
    return {
      pswVisibility: String,
      password:'',
      email:'',
      blueCard: null,
			encodedFile: "",
			fileUp: "",
			message:""
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    },
    selectBlueCard(file) {
      this.blueCard = file;
    },
		uploadFile() {
			if (this.blueCard) {
				var data = new FormData();
				data.append("image", this.encodedFile)
        data.append("email", this.$store.state.auth.user.username);
        data.append("password", this.$store.state.auth.user.password);
				Api.upload(data, 'usersign/card/').then((response)=>
					{
						this.message = response;
            if (!this.message.data.status) {
              this.$emit('alert', ['error',"Something went wrong. Please, try again"])
            }
						else if (this.message.data.status == 'Image saved') {
							this.$emit('alert', ['success', "Your blue card has been uploaded!"]);
						} else {
              this.$emit('alert', ['error',"Something went wrong. Please, try again"])
            }
        
					}).catch((err)=>{
          this.error = err;    
          this.$emit('alert', ['error', "Something went wrong. Please, try again"]);
        })
				this.blueCard = null;
			}
		}
  },
  watch: {
		blueCard (file) {
			let reader = new FileReader()
    reader.onload = (event) => 
		{
  this.encodedFile = event.target.result
    }
    reader.readAsDataURL(file)
		}
	}
};
</script>

<style lang="scss" scoped>
.v-input.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.v-file-input{
      width: 65vw;
      max-width: 200px;
}
.profileB{
    margin:0;
    border: 0;
    padding:0;
}
.banner{
    margin-top: 1px;
    padding: 5vh;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 50px;
    min-height: 20vh;
}
.parke {
    color:rgba(64,64,64,255);
}
.d {
    color:rgba(0,32,96,255);
}
</style>