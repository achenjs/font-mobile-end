<template lang="html">
  <div id="common-tese" class="mb-9">
    <div
      class="item"
      v-for="(item, index) in teseList"
      :key="index">
      <img :src="item.url"/>
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    teseList: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
  },
};
</script>

<style lang="scss">
#common-tese {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #ffffff;
  padding-bottom: 26px;
  .item {
    width: 25%;
    text-align: center;
    margin-top: 26px;
    img {
      width: 32px;
      height: 27px;
    }
    p {
      font-size: 12px;
      margin-top: 16px;
    }
  }
}
</style>
