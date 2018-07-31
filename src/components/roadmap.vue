<template lang="pug">
  .map
    template(v-for="(item, index) in data")
      map-item(status="init", :text="item.caption", :image="item.image")
</template>
<script>
export default {
  components: {
    'map-item': () => import('./roadmap-item.vue')
  },
  props: ['data']
}
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";

.map {
  border: 1px dashed $color-yellow;
  box-sizing: border-box;
  padding: 24px 24px 48px 24px;
}
</style>


