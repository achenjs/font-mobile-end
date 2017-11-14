<template lang="html">
  <div id="common-preach" class="mb-9">
    <div class="content">
      <div
        class="item"
        v-for="(item, index) in preachList"
        :key="index"
        v-if="index < 6">
        <router-link :to="'/firstTime/' + item.id" target="_blank">
          <img :src="item.picture_url" alt="图片">
          <p>#{{item.company_name}}#</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    preachList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
#common-preach {
  width: 100%;
  background-color: #ffffff;
  padding: 0 10px 25px 10px;
  overflow: hidden;
  .content {
    .item {
      display: inline-block;
      width: 2.2rem;
      overflow: hidden;
      margin-left: .24rem;
      &:nth-of-type(3n+1) {
        margin-left: 0;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          display: block;
          width: 100%;
          height: 70px;
        }
        p {
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          line-height: 40px;
          font-size: 12px;
          padding: 0 10px;
          border: 1px solid #eeeeee;
        }
      }
    }
  }
}
</style>
