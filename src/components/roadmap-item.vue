<template lang="pug">
  .map-item
    .map-item__box(:class="getBoxClass()")
    img.map-item__img(:src="image")
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
@import "../css/partials/variables";

.map-item {
  box-sizing: border-box;
  height: 70px;
  position: relative;
  width: 70px;

  & * {
    box-sizing: border-box;
  }

  &__box {
    background-color: $color-blue-light-35;
    border: 12px solid $color-gray-62;
    border-radius: 25px;
    box-shadow: 0 3px 6px $color-blue-light-44;
    height: 100%;
    position: relative;
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
    position: absolute;
    top: -20px;
    left: -10px;
    transform: scale(.6);
    z-index: 20;
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


