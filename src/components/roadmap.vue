<template lang="pug">
  .map
    svg.bg(width="1340", height="600", xmlns="http://www.w3.org/2000/svg")
      g
        title background
        rect(fill="none", id="canvas_background", height="602", width="1342", y="-1", x="-1")
        g(display="none", overflow="visible", y="0", x="0", height="100%", width="100%", id="canvasGrid")
          rect(fill="url(#gridpattern)", stroke-width="0", y="0", x="0", height="100%", width="100%")
      g.arrow
        title Layer 1
        g.arrow__item1(:class="getArrowClasses(1)")
          rect(id="svg_11",height="14",width="69.000002",y="155.128912",x="123.833311",stroke-width="0")
          path(transform="rotate(90 202.04998779296875,162.46455383300784) ",id="svg_12",d="m187.716661,175.0062l14.333333,-25.083332l14.333333,25.083332l-28.666666,0z")
        g.arrow__item2(:class="getArrowClasses(2)")
          rect(id="svg_29",height="14",width="27.332909",y="379.477591",x="124.234328",stroke-width="0")
          path(transform="rotate(90 160.5740051269531,386.81323242187506) ",id="svg_30",d="m146.240673,399.35488l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item3(:class="getArrowClasses(3)")
          rect(id="svg_18",height="14",width="34.332921",y="379.477591",x="277.591696",stroke-width="0")
          path(transform="rotate(90 316.9407653808594,386.81323242187506) ",id="svg_19",d="m302.607424,399.354882l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item4(:class="getArrowClasses(4)")
          rect(id="svg_20",height="14",width="68.66601",y="152.105076",x="318.040247",stroke-width="0")
          rect(transform="rotate(90 380.20629882812506,252.53062438964847) ",id="svg_21",height="14",width="184.66727",y="245.53063",x="280.372654",stroke-width="0")
          rect(id="svg_24",height="14",width="28.999902",y="265.85206",x="382.215823",stroke-width="0")
          path(transform="rotate(90 418.43914794921875,273.1876831054688) ",id="svg_25",d="m404.105826,285.729352l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item5(:class="getArrowClasses(5)")
          rect(id="svg_35",height="14",width="56.999266",y="264.899712",x="535.091306",stroke-width="0")
          rect(transform="rotate(90 558.1992187500001,275.07443237304693) ",id="svg_36",height="14",width="302.501522",y="268.074439",x="406.94846",stroke-width="0")
          path(transform="rotate(90 598.4600830078126,272.1876525878907) ",id="svg_38",d="m584.126734,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(id="svg_39",height="14",width="38.999674",y="123.952739",x="553.815771",stroke-width="0")
          path(transform="rotate(90 596.5446166992189,131.28836059570318) ",id="svg_40",d="m582.211242,143.830031l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(id="svg_41",height="14",width="37.332895",y="412.527099",x="552.959317",stroke-width="0")
          path(transform="rotate(90 595.9998779296876,419.88806152343756) ",id="svg_42",d="m581.666574,432.429716l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item6(:class="getArrowClasses(6)")
          rect(id="svg_50",height="14",width="42.999342",y="264.899712",x="830.62648",stroke-width="0")
          rect(transform="rotate(90 852.7832641601562,275.7410888671876) ",id="svg_51",height="14",width="299.834748",y="268.741096",x="702.865861",stroke-width="0")
          path(transform="rotate(90 878.9330444335938,272.18765258789074) ",id="svg_52",d="m864.599756,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(id="svg_53",height="14",width="27.999551",y="125.618463",x="830.287784",stroke-width="0")
          rect(id="svg_54",height="14",width="25.332751",y="411.861407",x="830.098504",stroke-width="0")
        g.arrow__item7(:class="getArrowClasses(7)")
          rect(id="svg_56",height="14",width="18.999062",y="264.899712",x="994.852011",stroke-width="0")
          path(transform="rotate(90 1022.1583251953125,272.18765258789074) ",id="svg_57",d="m1007.825038,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
        g.arrow__item8(:class="getArrowClasses(8)")
          rect(id="svg_58",height="14",width="72.999431",y="264.899712",x="1137.664231",stroke-width="0")
          rect(transform="rotate(90 1155.7720947265627,275.074432373047) ",id="svg_59",height="14",width="302.501522",y="268.074439",x="1004.521336",stroke-width="0")
          path(transform="rotate(90 1218.0332031250002,272.18765258789074) ",id="svg_60",d="m1203.699867,284.729318l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(id="svg_61",height="14",width="63.999967",y="122.952727",x="1126.388341",stroke-width="0")
          path(transform="rotate(90 1194.1175537109375,131.28836059570327) ",id="svg_62",d="m1179.784118,143.830031l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          rect(id="svg_63",height="14",width="63.333214",y="412.527099",x="1124.531869",stroke-width="0")
          path(transform="rotate(90 1193.7352294921877,419.8880615234376) ",id="svg_64",d="m1179.401729,432.429716l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          path(transform="rotate(-90 1116.1193847656252,418.88806152343744) ",id="svg_68",d="m1101.785988,431.429704l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
          path(transform="rotate(-90 1116.1193847656252,130.82220458984366) ",id="svg_69",d="m1101.785988,143.363847l14.33334,-25.08333l14.33333,25.08333l-28.66667,0z")
    template(v-for="(item, index) in data")
      map-item(class="item", :class="`item--${item.id}`", :status="calStatus(item)", :text="item.caption", :image="item.image", @click.prevent.native="onSelected(item)")

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
  border: 1px dashed $color-yellow;
  box-sizing: border-box;
  padding: 24px 0 48px 0;
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
    top: 135px;
  }
  .item--2 {
    left: 215px;
    top: 135px;
  }
  .item--3 {
    left: 19px;
    top: 360px;
  }
  .item--4 {
    left: 173px;
    top: 360px;
  }
  .item--5 {
    left: 330px;
    top: 360px;
  }
  .item--6 {
    left: 431px;
    top: 245px;
  }
  .item--7 {
    left: 610px;
    top: 105px;
  }
  .item--8 {
    left: 725px;
    top: 105px;
  }
  .item--9 {
    left: 610px;
    top: 245px;
  }
  .item--10 {
    left: 725px;
    top: 245px;
  }
  .item--11 {
    left: 610px;
    top: 390px;
  }
  .item--12 {
    left: 725px;
    top: 390px;
  }
  .item--13 {
    left: 891px;
    top: 245px;
  }
  .item--14 {
    left: 1035px;
    top: 245px;
  }
  .item--15 {
    left: 993px;
    top: 105px;
  }
  .item--16 {
    left: 1207px;
    top: 105px;
  }
  .item--17 {
    left: 998px;
    top: 390px;
  }
  .item--18 {
    left: 1207px;
    top: 390px;
  }
  .item--19 {
    left: 1233px;
    top: 245px;
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


