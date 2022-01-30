<template>
  <div>
    <div @click="logOut">Profile</div>
    <header>
      <h3>
        <strong>{{currentUser.username}}</strong>
      </h3>
    </header>
    <!-- <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p> -->
  </div>
</template>

<script>
export default {
  name: 'Profile',
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
    }
  },
};
</script>

<style>

</style>