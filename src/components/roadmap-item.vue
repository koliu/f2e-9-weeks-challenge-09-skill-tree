<template lang="pug">
  .map-item(:class="{'map-item--active' : status !== ''}")
    .map-item__img
      img(:src="image")
    .map-item__box(:class="getBoxClass()")
    .map-item__text(v-text="text")
</template>
<script>
export default {
  props: ['status','image','text'],
  methods: {
    getBoxClass() {
      if (this.status) {
        return `map-item__box--${this.status}`;
      }
      return '';
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../css/partials/predefined";

.map-item {
  box-sizing: border-box;
  height: 70px;
  position: relative;
  width: 70px;

  &--active {
    cursor: pointer;
  }

  & * {
    box-sizing: border-box;
  }

  &__box {
    background-color: $color-blue-light-35;
    border: 12px solid $color-gray-62;
    border-radius: 25px;
    box-shadow: 0 3px 6px $color-blue-light-44;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;

    &--init {
      border: 12px solid $color-white-62;
    }

    &--active {
      border: 12px solid $color-blue-62;
    }
  }

  &__img {
    position: relative;
    height: 100%;
    width: 100%;
    @include flex-box(center, center);
    z-index: 20;

    img {
      transform: scale(.45);
    }
  }

  &__text {
    color: $color-white;
    bottom: -5px;
    position: relative;
    text-align: center;
    text-shadow: 0 1px 4px $color-blue-light-73, //shadow
      // bolder
      -1px 0 $color-blue-lighter-8, 0 1px $color-blue-lighter-8,
      1px 0 $color-blue-lighter-8, 0 -1px $color-blue-lighter-8;
    white-space: nowrap;
    width: 100%;
  }
}
</style>


