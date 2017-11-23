<template>
  <div id="common-demandList" v-if="isShow">
    <div
      class="demand-options"
      v-for="(item, index) in data"
      :key="index"
      @click="handleClick(item)">
      {{item[prop]}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    isShow: {
      type: Boolean,
      default: false,
    },
    prop: {
      type: String,
      default: 'name',
    },
  },
  methods: {
    handleClick(item) {
      this.$emit('handleDemandItem', item);
    },
  },
};
</script>

<style lang="scss">
#common-demandList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .demand-options {
    width: 3.4rem;
    padding: 0 0.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #d3d3d3;
    border-radius: 5px;
    color: #919191;
    font-size: 12px;
    margin-top: 12px;
  }
}
</style>
