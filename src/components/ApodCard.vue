<template>
  <div class="apod-card component col-md-8 text-center">
    <label class="m-2" for="start">Pick a date!:</label>

    <input
      v-model="query"
      class="m-2"
      type="date"
      id="start"
      name="trip-start"
      min="2018-01-01"
      max="2018-12-31"
    />
    <button class="mt-2 rounded" @click="getapod()">APOD</button>
    <img alt="" />
  </div>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card" style="width: 18rem">
        <img :src="apod.imageUrl" class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ apod.title }}</h5>
          <p class="card-text">{{ apod.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { computed, ref } from "@vue/reactivity";
import { apodService } from "../services/ApodService";
import { AppState } from "../AppState";
export default {
  setup() {
    const query = ref("");
    return {
      // NOTE computed goes here
      query,
      apod: computed(() => AppState.apod),
      async getapod() {
        try {
          apodService.getapod(query.value);
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>


