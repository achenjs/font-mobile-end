<template lang="html">
  <div id="common-star" class="star">
    <span
      class="star-item"
      v-for="(item, index) in itemClasses"
      :key="index"
      :class="index < value ? 'active' : ''">
    </span>
  </div>
</template>

<script>
/*
author: achen,
length: 总个数,
value:  选中的个数
*/
export default {
  props: {
    length: {
      type: Number,
      default: 5,
    },
    value: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    itemClasses() {
      return new Array(this.value);
    },
  },
};
</script>

<style lang="scss">
#common-star {
  .star-item {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 2px;
    background: url('../../assets/images/home/star.png') no-repeat;
    background-size: cover;
    &.active {
      background: url('../../assets/images/home/star-active.png') no-repeat;
      background-size: cover;
    }
  }
}
</style>
