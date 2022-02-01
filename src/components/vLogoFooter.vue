<template>
<div>
    <v-banner
    class="vbanner"
    sticky
    dark
    single-line
    align="center"
    >
    <div class="banner">
        <span class="parke">Parke</span><span class="d">D</span>
    </div>
    </v-banner>
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

  },
  computed: {

  },
  methods: {

  },
  watch: {
    
  }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    border: 0;
    padding: 0;
    // background-color: red;
}
div{
    margin-top: 1px;
    padding: 1.25vh;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 50px;
    min-height: 3vh;
    max-height: 5vh;
}
.parke {
    color:rgba(64,64,64,255);
}
.d {
    color:rgba(0,32,96,255);
}
</style>

