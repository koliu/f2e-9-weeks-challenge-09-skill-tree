<template lang="pug">
  .map-item(:class="{'map-item--active' : status !== ''}")
    .map-item__box(:class="(status === '') ? '' : 'map-item__box--' + status")
      img.icon(:src="image", :class="{ 'icon--active' : status === 'active'}")
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
  height: 104px;
  position: relative;
  width: 104px;

  &--active {
    cursor: pointer;
  }

  & * {
    box-sizing: border-box;
  }

  &__box {
    border-radius: 35px;
    height: 100%;
    width: 100%;
    z-index: 10;
    @include flex-box(center, center);

    &::before {
      background-color: $color-blue-light-35;
      border-radius: 35px;
      content: '';
      height: 90%;
      position: absolute;
      width: 90%;
      z-index: 12;
    }

    &::after {
      border: 12px solid $color-gray-62;
      border-radius: 35px;
      box-shadow: 0 3px 6px $color-blue-light-44;
      box-sizing: border-box;
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      transition: border-color .3s ease;
      z-index: 15;
    }

    &--init::after {
      border-color: $color-white-62;
    }

    &--active::after {
      border-color: $color-blue-62;
    }

    .icon {
      filter: grayscale(1) drop-shadow(0 0 0 $color-white);
      transition: filter .3s ease;
      z-index: 20;

      &--active {
        filter: grayscale(0) drop-shadow(0 0 6px $color-white);
      }
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


