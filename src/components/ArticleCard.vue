<template>
  <article class="productcard">
    <v-card :loading="loading">
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>
      <v-card-title>
        {{ data.title }}
      </v-card-title>
      <v-card-text>{{ data.text }}</v-card-text>
    </v-card>
  </article>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    loading: Boolean,
    data: Object
  }
};
</script>

<style></style>
