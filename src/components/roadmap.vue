<template lang="pug">
  .map
    template(v-for="(item, index) in data")
      map-item(:status="calStatus(item)", :text="item.caption", :image="item.image", @click.prevent.native="onSelected(item)")
</template>
<script>
export default {
  components: {
    'map-item': () => import('./roadmap-item.vue')
  },
  props: ['data'],
  methods: {
    calStatus(item) {
      if (item.done) {
        return 'active';
      }
      return this.isPreNodesAllDone(item) ? 'init' : '';
    },
    isPreNodesAllDone(item) {
      return item['pre-nodes'].length === 0 || item['pre-nodes'].filter(id => this.checkStatusById(id)).length === item['pre-nodes'].length;
    },
    anyDoneOfPostNodes(item) {
      const postNodes = this.data.filter(e => e['pre-nodes'].includes(item.id));
      return postNodes.find(e => e.done);
    },
    checkStatusById(id) {
      const found = this.data.find(e => e.id === id);
      return found ? found.done : false;
    },
    onSelected(item) {
      if(item.done) {
        if(!this.anyDoneOfPostNodes(item)) {
          item.done = false;
        }
        return;
      }

      item.done = this.isPreNodesAllDone(item);
    }
  }
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


