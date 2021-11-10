<template>
  <div class="row container-fluid">
    <FavoritesComponent v-for="(f, index) in favorites" :key="index" />
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  name: "FavoritesPage",
  setup() {
    return {
      favorites: computed(() => AppState.favorites),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>