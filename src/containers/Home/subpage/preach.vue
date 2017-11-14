<template lang="html">
  <div id="common-preach" class="mb-9" ref="scrollBox">
    <div class="content">
      <div
        class="item"
        v-for="(item, index) in preachList"
        :key="index">
        <router-link :to="'/firstTime/' + item.id" target="_blank">
          <img :src="item.picture_url" alt="图片">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  props: {
    preachList: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    this.initScrool();
  },
  methods: {
    //  初始化better-scroll
    initScrool() {
      this.scroll = new BScroll(this.$refs.scrollBox, {
        scrollX: true,
        click: true,
      });
    },
  },
  updated() {
    this.$nextTick(() => {
      this.scroll.refresh();
    });
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
    width: 11.5rem;
    overflow: hidden;
    .item {
      float: left;
      width: 2.03rem;
      height: 77px;
      margin: 3px 0px 0px 3px;
      overflow: hidden;
      &:nth-of-type(1) {
        width: 4.54rem;
        height: 157px;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
