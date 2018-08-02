<template lang="pug">
  .map
    svg.bg(width="1340", height="520", xmlns="http://www.w3.org/2000/svg")
      g.arrow
        title Layer 1
        g.arrow__item1(:class="getArrowClasses(1)")
          rect(height="14",width="69",y="155",x="124")
          path(transform="rotate(90 202,162)",d="m187.716661,175.0062l14.333333,-25.083332l14.333333,25.083332l-28.666666,0z")
        g.arrow__item2(:class="getArrowClasses(2)")
          rect(height="14",width="27",y="379",x="124")
          path(transform="rotate(90 161,387) ",d="m146.240673,399.35488l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item3(:class="getArrowClasses(3)")
          rect(height="14",width="34",y="379",x="278")
          path(transform="rotate(90 317,387) ",d="m302.607424,399.354882l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item4(:class="getArrowClasses(4)")
          rect(height="14",width="69",y="152",x="318")
          rect(transform="rotate(90 381,253) ",height="14",width="184",y="246",x="280")
          rect(height="14",width="29",y="266",x="382")
          path(transform="rotate(90 418,273) ",d="m404.105826,285.729352l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item5(:class="getArrowClasses(5)")
          rect(height="14",width="57",y="265",x="535")
          rect(transform="rotate(90 558,275) ",height="14",width="303",y="268",x="407")
          path(transform="rotate(90 598,272) ",d="m584.126734,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(height="14",width="39",y="124",x="554")
          path(transform="rotate(90 598,131) ",d="m582.211242,143.830031l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(height="14",width="37",y="413",x="553")
          path(transform="rotate(90 598,420) ",d="m581.666574,432.429716l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item6(:class="getArrowClasses(6)")
          rect(height="14",width="43",y="265",x="830")
          rect(transform="rotate(90 853,276) ",height="14",width="300",y="269",x="703")
          path(transform="rotate(90 879,272) ",d="m864.599756,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(height="14",width="25",y="126",x="830")
          rect(height="14",width="25",y="412",x="830")
        g.arrow__item7(:class="getArrowClasses(7)")
          rect(height="14",width="19",y="265",x="995")
          path(transform="rotate(90 1022,272) ",d="m1007.825038,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item8(:class="getArrowClasses(8)")
          rect(height="14",width="73",y="265",x="1138")
          rect(transform="rotate(90 1156,275) ",height="14",width="303",y="268",x="1004")
          path(transform="rotate(90 1218,272) ",d="m1203.699867,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(height="14",width="64",y="123",x="1126")
          path(transform="rotate(90 1194,131) ",d="m1179.784118,143.830031l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(height="14",width="64",y="413",x="1126")
          path(transform="rotate(90 1194,420) ",d="m1179.401729,432.429716l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          path(transform="rotate(-90 1116,420) ",d="m1101.785988,431.429704l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          path(transform="rotate(-90 1116,131) ",d="m1101.785988,143.363847l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
    template(v-for="(item, index) in data")
      map-item(class="item", :class="`item--${item.id}`", :status="calStatus(item)", :text="item.caption", :image="item.image", @click.prevent.native="onSelected(item)", v-if="item.type === 'map-main'", @mouseover.native="$emit('set-focused',item)")

</template>
<script>
export default {
  components: {
    'map-item': () => import('./roadmap-item.vue')
  },
  props: ['data'],
  data() {
    return {
      arrows : [
        {
          id: 1,
          'pre-nodes': [1]
        },{
          id: 2,
          'pre-nodes': [3]
        },{
          id: 3,
          'pre-nodes': [4]
        },{
          id: 4,
          'pre-nodes': [2, 5]
        },{
          id: 5,
          'pre-nodes': [6]
        },{
          id: 6,
          'pre-nodes': [7, 8, 9, 10, 11, 12]
        },{
          id: 7,
          'pre-nodes': [13]
        },{
          id: 8,
          'pre-nodes': [14]
        }
      ]
    };
  },
  computed: {
  },
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
    },
    findArrowItem(arrowItemId) {
      return this.arrows.find(e => e.id === arrowItemId);
    },
    isPreNodesAllDoneByIds(roadmapIds) {
      if (roadmapIds.length > 0) {
        return roadmapIds.filter(id => this.checkStatusById(id)).length === roadmapIds.length;
      }
      return true;
    },
    getArrowClasses(arrowItemId) {
      const arrowItem = this.findArrowItem(arrowItemId);
      if (arrowItem && this.isPreNodesAllDoneByIds(arrowItem['pre-nodes'])
      ) {
        return 'arrow__item arrow__item--active';
      }
      return 'arrow__item';
    }
  }
}
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
  .item--1 {
    left: 19px;
    top: 111px;
  }
  .item--2 {
    left: 215px;
    top: 111px;
  }
  .item--3 {
    left: 19px;
    top: 336px;
  }
  .item--4 {
    left: 173px;
    top: 336px;
  }
  .item--5 {
    left: 330px;
    top: 336px;
  }
  .item--6 {
    left: 431px;
    top: 221px;
  }
  .item--7 {
    left: 610px;
    top: 81px;
  }
  .item--8 {
    left: 725px;
    top: 81px;
  }
  .item--9 {
    left: 610px;
    top: 221px;
  }
  .item--10 {
    left: 725px;
    top: 221px;
  }
  .item--11 {
    left: 610px;
    top: 366px;
  }
  .item--12 {
    left: 725px;
    top: 366px;
  }
  .item--13 {
    left: 891px;
    top: 221px;
  }
  .item--14 {
    left: 1035px;
    top: 221px;
  }
  .item--15 {
    left: 998px;
    top: 81px;
  }
  .item--16 {
    left: 1207px;
    top: 81px;
  }
  .item--17 {
    left: 998px;
    top: 366px;
  }
  .item--18 {
    left: 1207px;
    top: 366px;
  }
  .item--19 {
    left: 1233px;
    top: 221px;
  }

  .arrow__item {
    rect, path {
      fill: $color-gray;
    }

    &--active {
      rect, path {
        fill: $color-yellow;
      }
    }
  }
}
</style>


