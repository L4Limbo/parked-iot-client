<template>
  <div class="profileB">
      <v-banner
        class="vbanner"
        sticky
        dark
        align="center"
      >
      <div class="banner">
          <span class="parke">Profi</span><span class="d">le</span>
      </div>
      </v-banner>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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