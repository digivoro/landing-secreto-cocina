<template>
  <v-card class="filtercard mx-auto elevation-10 rounded-lg">
    <v-list dense>
      <v-list-item-group v-model="selectedItem">
        <v-list-item
          v-for="item in filters.items"
          :key="item.id"
          :class="selectedItem == item.id ? 'selected' : ''"
          link
        >
          <v-list-item-title class="filtercard__title">
            {{ item.title }}
          </v-list-item-title>
          <v-list-item-icon
            class="filtercard__icon"
            v-if="selectedItem == item.id"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapMutations(["UPDATE_SELECTED_ITEM"])
  },

  computed: {
    ...mapState(["filters"]),

    selectedItem: {
      get() {
        return this.filters.selectedItem;
      },
      set(value) {
        this.UPDATE_SELECTED_ITEM(value);
      }
    }
  }
};
</script>

<style></style>
