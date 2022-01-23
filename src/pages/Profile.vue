<template>
  <div>
        Profile Vue -> Fields soon
        <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    return {

    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {

  },
  watch: {
    
  }
}
</script>

<style>

</style>