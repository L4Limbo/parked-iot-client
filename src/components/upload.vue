<template>
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
					truncate-length="30"
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
</template>

<script>
import Api from '../api/api';

export default {
	data () {
		return {
			blueCard: null,
			encodedFile: "",
			fileUp: "",
			message:""
		}
	},
	mounted() {
		this.fileUp = new FileReader();
	},
	methods: {
		selectBlueCard(file) {
      this.blueCard = file;
    },
		uploadFile() {
			if (this.blueCard) {
				var data = new FormData();
				data.append("file", this.encodedFile)
				Api.upload(data, 'usersign/login/').then((response)=>
					{
						this.message = response;
						if(!this.message) {
							this.$emit('alert', ['error', "Something went wrong. Please, try again"]);
						}
						this.$emit('alert', ['success',"File Uploaded Successfully"])
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
    reader.readAsDataURL (file)
		}
	}
}
</script>

<style lang="scss" scoped>
.v-input.v-input--dense.theme--light.v-text-field.v-text-field--single-line.v-text-field--solo.v-text-field--filled.v-text-field--is-booted.v-text-field--enclosed.v-file-input{
      width: 65vw;
  }
</style>