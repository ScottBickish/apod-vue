<template>
  <div class="col-md-4">
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
export default {
  props: {
    index: Number,
    f: Object,
  },
  setup(props) {
    console.log(props);
    return {};
  },
};
</script>


<style lang="scss" scoped>
</style>
