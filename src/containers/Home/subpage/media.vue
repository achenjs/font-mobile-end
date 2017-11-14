<template lang="html">
  <div id="common-media" class="mb-9">
    <div class="item"
      v-for="(item, index) in mediaList"
      :key="index">
      <a :href="item.url" target="_black">
        <div class="header clearfix">
          <span class="title fl">{{item.source_name}}</span>
          <span class="time fr">2017-10-27</span>
        </div>
        <div class="context">{{item.total_name}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mediaList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
#common-media {
  background-color: #ffffff;
  padding: 0 10px 25px 10px;
  .item {
    padding: 10px 0;
    border-bottom: 0.5px solid #dcdcdc;
    // &:last-child {
    //   border-bottom: none;
    // }
    .header {
      .title {
        width: 70%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 17px;
        color: #333333;
      }
      .time {
        font-size: 12px;
        color: #b0b0b0;
      }
    }
    .context {
      width: 90%;
      margin-top: 10px;
      font-size: 12px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      padding-bottom: 5px;
      color: #848383;
    }
  }
}
</style>
