<template lang="pug">
  .app
    button.btn-login(@click.prevent="login", v-if="!this.loginManager.isLoggedIn()") LOGIN
    button.btn-login(@click.prevent="logout", v-if="this.loginManager.isLoggedIn()") LOGOUT
    
    .header
      .header__ball
      .header__title
        .header__title__tw
        .header__title__en
    roadmap.roadmap(:data="data")
    .info
      .info__challenger
      .info__description
      .info__pandora
    .footer
      .footer__bg
      .footer__hex
      .footer__rocket
</template>
<script>
export default {
  components: {
    'roadmap': () => import('../components/roadmap.vue')
  },
  data: function() {
    return {
      data: []
    };
  },
  methods: {
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
      .get('/src/data/ui-roadmap.json')
      .then(res => {
        this.data = res.data;
      })
      .catch(err => {
        throw new Error(`Fail to load data of questions: ${err}`);
      });
    }
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,700,900");
@import "../css/partials/predefined";
@import "../css/partials/animations";
@import "../css/partials/text-utils";

.app{
  background: linear-gradient(0deg, #301A3B, #10030A);
  padding-bottom: 30px;
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
