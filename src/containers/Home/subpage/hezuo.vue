<template lang="html">
  <div id="common-hezuo" class="mb-9">
    <div
      class="item"
      v-for="(item, index) in hezuoList"
      :key="index"
      v-if="index < 9">
      <img :src="item.url" :title="item.name" alt="图片">
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hezuoList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
#common-hezuo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  background-color: #ffffff;
  border-top: 0.5px solid #dcdcdc;
  padding-bottom: 24px;
  .item {
    width: 33.3%;
    height: 49px;
    line-height: 49px;
    text-align: center;
    border-right: 0.5px solid #dcdcdc;
    border-bottom: 0.5px solid #dcdcdc;
    &:nth-of-type(3n) {
      border-right: 0px;
    }
    img {
      width: 77px;
      height: 32px;
      vertical-align: middle;
    }
    span {
      display: inline-block;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
