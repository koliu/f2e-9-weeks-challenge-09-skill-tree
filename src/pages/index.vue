<template lang="pug">
  .app
    button.btn-login(@click.prevent="login", v-if="!this.loginManager.isLoggedIn()") LOGIN
    button.btn-login(@click.prevent="logout", v-if="this.loginManager.isLoggedIn()") LOGOUT
    
    .header
      img.header__planet(src="/src/static/img/img_planet.png")
      .header__title
        .header__title-tw 介面設計師轉職之路
        .header__title-en UI Designer Road Map
      .dot-line.dot-line__head-1
      .dot-line.dot-line__head-2
    roadmap.roadmap(:data="data", @set-focused="setCurrent")
    .info
      img.info__monocat(src="/src/static/img/img_monocat.png")
      .info__desc-box.desc
        .desc__icon(v-if="current")
          img(:src="current.image")
        .desc__main(v-if="current")
          .caption(v-text="current.caption")
          .content(v-text="current.desc")
        button.desc__btn-open(v-if="current && current.id === 20" @click.prevent="openPandoraBox") 好奇打開
      .info__pandora(v-if="!isMainMapDone")
        img(src="/src/static/img/img_padora.png")
    .pandora
      pandoramap.pandora__map(:data="data", @set-focused="setCurrent", v-if="showPandoraMap")
    .footer
      img.footer__bg(src="/src/static/img/img_footer.png")
      img.footer__hexcat(src="/src/static/img/img_hexcat.png")
      img.footer__rocket(src="/src/static/img/img_rocket.png")
</template>
<script>
export default {
  components: {
    roadmap: () => import("../components/roadmap.vue"),
    pandoramap: () => import("../components/pandora-map.vue")
  },
  data: function() {
    return {
      data: [],
      current: {},
      lockCurrent: false
    };
  },
  computed: {
    isMainMapDone() {
      return this.data.filter(e => e.type === "map-main").every(e => e.done);
    },
    showPandoraMap() {
      return this.data[21] && this.data[21].done;
    }
  },
  watch: {
    isMainMapDone() {
      if (this.isMainMapDone) {
        this.lockCurrent = true;
        this.current = this.data[20];
        this.current.done = true;
      }
    }
  },
  methods: {
    openPandoraBox() {
      this.current = this.data[21];
      this.current.done = true;
      this.lockCurrent = false;
      this.data[22].done = true;
    },
    setCurrent(item) {
      if (this.lockCurrent) {
        return;
      }
      this.current = item ? item : this.data[0] ? this.data[0] : {};
    },
    login() {
      this.loginManager.login();
      this.loggedIn = this.loginManager.isLoggedIn();
      this.$forceUpdate();
    },
    logout() {
      this.loginManager.logout();
      this.$forceUpdate();
    },
    loadData() {
      this.http
        .get("/src/data/ui-roadmap.json")
        .then(res => {
          this.data = res.data;
          this.setCurrent(this.data[0]);

          // for test
          // this.data.forEach(e => (e.done = e.id > 0 && e.id < 19));
        })
        .catch(err => {
          throw new Error(`Fail to load data of questions: ${err}`);
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900");
@import "../css/partials/predefined";
@import "../css/partials/animations";
@import "../css/partials/text-utils";

.app {
  background: linear-gradient(0deg, #301a3b, #10030a);
  padding-bottom: 30px;
  position: relative;

  .roadmap {
    position: relative;
    // top: -90px;
    transform: scale(0.9);
  }
}

.header {
  position: relative;
  @include flex-box(flex-start, center, row, nowrap);

  &__planet {
    position: relative;
    left: 50px;
    transform: scale(0.7);
    z-index: 10;
  }

  &__title {
    position: relative;
    top: 30px;
    line-height: 82px;
    font-size: 79px;
    color: $color-white;
    text-shadow: 2px 2px 8px $color-white-62;

    &-en {
      line-height: 72px;
      font-size: 69px;
    }
  }
}

.info {
  position: relative;
  height: 250px;
  // top: -180px;
  @include flex-box(flex-start, flex-start, row, nowrap);

  &__monocat {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.7);
    z-index: 20;
  }

  &__desc-box {
    background-color: $color-white;
    border: 10px solid $color-blue-light-76;
    border-radius: 65px;
    height: 70%;
    padding: 24px 12px 12px 48px;
    position: absolute;
    top: 90px;
    left: 150px;
    width: 640px;
    @include flex-box(flex-start, center, row, nowrap);
  }

  .desc {
    &__icon {
      // min-height: 100%;
      // min-width: 104px;
      filter: drop-shadow(0 0 6px $color-red);
      @include flex-box(center, center);
    }
    &__main {
      min-height: 100%;
      margin-left: 8px;
      > .caption {
        font-size: 28px;
        font-weight: 900;
        min-height: 36px;
      }
      > .content {
        font-size: 24px;
        line-height: 28px;
        margin-top: 6px;
        min-height: calc(100% - 42px);
      }
    }

    &__btn-open {
      bottom: 20px;
      background-color: $color-blue-light-35;
      border: 12px solid $color-blue-62;
      border-radius: 39px;
      box-shadow: 0 3px 6px $color-blue-light-44;
      color: $color-white;
      cursor: pointer;
      font-size: 28px;
      height: 70px;
      line-height: 36px;
      position: absolute;
      right: 60px;
      width: 201px;
      z-index: 25;

      &:hover {
        background-color: $color-blue-62;
        color: $color-blue;
        font-weight: 900;
      }

      &:active {
        background-color: $color-yellow;
        color: $color-white;
      }
    }
  }

  &__pandora {
    position: absolute;
    top: 30px;
    right: 110px;
    transform: scale(0.7);
    z-index: 20;

    &::after {
      color: $color-white;
      content: "潘朵拉寶盒";
      font-size: 24px;
      left: -150px;
      position: relative;
      text-shadow: 2px 2px 8px $color-white-62;
      top: 30px;
    }
  }
}

.dot-line {
  border-left: 18px dotted $color-white-36;
  position: absolute;
  transform: scale(0.5);
  z-index: 5;

  &__head-1 {
    top: -25px;
    left: 182px;
    height: 150px;
  }

  &__head-2 {
    top: -75px;
    right: 282px;
    height: 350px;
  }
}

.pandora {
  position: relative;
  height: 0;
  transform: scale(0.9);
  z-index: 30;

  &__map {
    position: absolute;
    left: 520px;
    top: 100px;
  }
}

.footer {
  position: relative;
  overflow: hidden;
  height: 665px;

  &__bg {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
  &__hexcat {
    position: absolute;
    top: 205px;
    left: -13px;
    transform: scale(0.7);
    z-index: 3;
  }
  &__rocket {
    position: absolute;
    top: 90px;
    right: 206px;
    transform: scale(0.7);
    z-index: 3;
  }
}

.btn-login {
  border: 1px dashed $color-yellow;
  background: rgba(255, 255, 255, 0.3);
  color: $color-yellow;
  position: fixed;
  left: 5px;
  bottom: 5px;
  z-index: 99999;

  &:hover {
    border-color: $color-blue;
    color: $color-blue;
    cursor: pointer;
    font-weight: bolder;
  }
}
</style>
