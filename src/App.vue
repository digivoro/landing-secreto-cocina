<template>
  <div id="app">
    <v-app>
      <Landing />
    </v-app>
  </div>
</template>

<script>
import Landing from "@/views/Landing.vue";

export default {
  components: {
    Landing
  }
};
</script>

<style lang="scss">
@import "sass/main.scss";
</style>
