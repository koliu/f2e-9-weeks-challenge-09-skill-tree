<template lang="pug">
  .map
    svg.bg(width="380", height="300", xmlns="http://www.w3.org/2000/svg")
      g.arrow
        title Layer 1
        g.arrow__item
          //- rect(height="104",width="104",y="92",x="36")
          rect(height="14",width="32",y="140",x="141")
          
          rect(height="180",width="14",y="54",x="172")
          
          rect(height="14",width="32",y="54",x="185")
          path(d="M216 46 L243 61 L216 76Z")
          //- rect(height="104",width="104",y="10",x="243")

          rect(height="14",width="32",y="220",x="185")
          path(d="M216 212, L243 227, L216 242Z")

          //- rect(height="104",width="104",y="176",x="243")
    template(v-for="(item, index) in data.filter(e => e.type === 'map-pandora')")
      map-item(class="item", :class="`item--${item.id}`", :status="calStatus(item)", :text="item.caption", :image="item.image", @click.prevent.native="onSelected(item)", v-if="item.type === 'map-pandora'", @mouseover.native="$emit('set-focused',item)")

</template>
<script>
export default {
  components: {
    "map-item": () => import("./roadmap-item.vue")
  },
  props: ["data"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    calStatus(item) {
      if (item.done) {
        return "active";
      }
      return this.isPreNodesAllDone(item) ? "init" : "";
    },
    isPreNodesAllDone(item) {
      return (
        item["pre-nodes"].length === 0 ||
        item["pre-nodes"].filter(id => this.checkStatusById(id)).length ===
          item["pre-nodes"].length
      );
    },
    checkStatusById(id) {
      const found = this.data.find(e => e.id === id);
      return found ? found.done : false;
    },
    onSelected(item) {
      if(item.lock) {
        return;
      }
      item.done = !item.done;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../css/partials/variables";
.map {
  box-sizing: border-box;
  position: relative;

  .bg {
    z-index: 2;
  }

  .item {
    position: absolute;
    z-index: 5;
  }
  .item--22 {
    left: 36px;
    top: 92px;
  }
  .item--23 {
    left: 243px;
    top: 10px;
  }
  .item--24 {
    left: 243px;
    top: 176px;
  }

  .arrow__item {
    rect,
    path {
      fill: $color-yellow;
      stroke: $color-yellow;
      stroke-width: 0;
      stroke-opacity: 0;
    }

    &--active {
      rect,
      path {
        fill: $color-yellow;
      }
    }
  }
}
</style>


