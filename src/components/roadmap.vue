<template lang="pug">
  .map
    svg.bg(width="1340", height="400", xmlns="http://www.w3.org/2000/svg")
      g.arrow
        title Layer 1
        g.arrow__item1(:class="getArrowClasses(1)")
          //- rect(height="104",width="104",y="50",x="20")
          rect(height="14",width="67",y="94",x="124")
          path(d="M190 86 L217 101 L190 116Z")
        g.arrow__item2(:class="getArrowClasses(2)")
          rect(height="14",width="24",y="323",x="124")

          path(d="M147 315 L174 330 L147 345Z")
        g.arrow__item3(:class="getArrowClasses(3)")
          rect(height="14",width="24",y="323",x="278")
          path(d="M301 315 L328 330 L301 345Z")
        g.arrow__item4(:class="getArrowClasses(4)")
          rect(height="14",width="58",y="96",x="318")
          rect(height="179",width="14",y="96",x="375")
          rect(height="14",width="18",y="210",x="388")
          path(d="M405 202 L432 217 L405 232Z")
        g.arrow__item5(:class="getArrowClasses(5)")
          rect(height="288",width="14",y="69",x="554")
          
          rect(height="14",width="17",y="69",x="567")
          path(d="M583 61 L610 76 L583 91Z")
          
          rect(height="14",width="49",y="209",x="535")
          path(d="M583 202 L610 217 L583 232Z")

          rect(height="14",width="17",y="343",x="567")
          path(d="M583 336 L610 351 L583 366Z")
        g.arrow__item6(:class="getArrowClasses(6)")
          rect(height="14",width="10",y="69",x="830")
          rect(height="14",width="35",y="209",x="830")
          rect(height="14",width="10",y="343",x="830")
          rect(height="288",width="14",y="69",x="839")
          path(d="M864 202 L891 217 L864 232Z")
        g.arrow__item7(:class="getArrowClasses(7)")
          rect(height="14",width="15",y="209",x="995")
          path(d="M1009 202 L1036 217 L1009 232Z")
        g.arrow__item8(:class="getArrowClasses(8)")
          rect(height="288",width="14",y="69",x="1153")
          
          path(d="M1139 60 L1112 75 L1139 90Z")
          rect(height="14",width="44",y="68",x="1138")
          path(d="M1181 60 L1208 75 L1181 90Z")

          rect(height="14",width="67",y="209",x="1140")
          path(d="M1206 202 L1233 217 L1206 232Z")

          path(d="M1139 336 L1112 351 L1139 366Z")
          rect(height="14",width="44",y="344",x="1138")
          path(d="M1181 336 L1208 351 L1181 366Z")
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
    top: 50px;
  }
  .item--2 {
    left: 215px;
    top: 50px;
  }
  .item--3 {
    left: 19px;
    top: 275px;
  }
  .item--4 {
    left: 173px;
    top: 275px;
  }
  .item--5 {
    left: 330px;
    top: 275px;
  }
  .item--6 {
    left: 431px;
    top: 160px;
  }
  .item--7 {
    left: 610px;
    top: 20px;
  }
  .item--8 {
    left: 725px;
    top: 20px;
  }
  .item--9 {
    left: 610px;
    top: 160px;
  }
  .item--10 {
    left: 725px;
    top: 160px;
  }
  .item--11 {
    left: 610px;
    top: 300px;
  }
  .item--12 {
    left: 725px;
    top: 300px;
  }
  .item--13 {
    left: 891px;
    top: 160px;
  }
  .item--14 {
    left: 1035px;
    top: 160px;
  }
  .item--15 {
    left: 1008px;
    top: 20px;
  }
  .item--16 {
    left: 1207px;
    top: 20px;
  }
  .item--17 {
    left: 1008px;
    top: 300px;
  }
  .item--18 {
    left: 1207px;
    top: 300px;
  }
  .item--19 {
    left: 1233px;
    top: 160px;
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


