<template>
  <div class="col-md-4" v-for="(f, index) in favorites" :key="index">
    <div class="card" style="width: 18rem">
      <img :src="f.imageUrl" class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ f.title }}</h5>
        <p class="card-text">{{ f.date }}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  // props: {
  //   index: Number,
  //   f: Object,
  // },
  setup(props) {
    console.log(props);
    return {
      favorites: computed(() => AppState.favorites),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
