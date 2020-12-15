<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="articlecard rounded-lg"
        :class="`elevation-${hover ? 20 : 8}`"
        :loading="loading"
      >
        <a :href="data.url">
          <v-img
            class="articlecard__image rounded-tl-lg rounded-tr-lg"
            :src="data.image"
          ></v-img>
          <v-card-title class="articlecard__title">
            {{ data.title }}
          </v-card-title>
          <v-card-text class="articlecard__content">{{
            data.content
          }}</v-card-text>
        </a>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  data() {
    return {
      hover: false
    };
  },

  props: {
    loading: Boolean,
    data: Object
  },

  methods: {
    handleClick() {
      this.$router.push(this.data.url);
    }
  }
};
</script>
