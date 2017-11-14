<template lang="html">
  <div id="common-hotPreach" class="mb-9" ref="scrollBox">
    <div class="content clearfix">
      <div
        class="item fl"
        v-for="(item, index) in hotList"
        :key="index">
        <router-link :to="'/firstTime/' + item.id" target="_blank">
          <div class="hotPreachImg">
            <img :src="item.pictureUrl" alt="图片">
          </div>
          <h4>{{item.companyName}}</h4>
          <p>{{item.universityName}}{{item.venueName}}</p>
          <p>{{formatDate(item.useDate)}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import moment from 'moment';

export default {
  props: {
    hotList: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    //  初始化better-scroll
    initScrool() {
      this.scroll = new BScroll(this.$refs.scrollBox, {
        scrollX: true,
        click: true,
      });
    },
    formatDate(date) {
      if (!date) return '';
      return moment(date).format('YYYY-MM-DD');
    },
  },
  mounted() {
    this.initScrool();
  },
  updated() {
    this.$nextTick(() => {
      this.scroll.refresh();
    });
  },
};
</script>

<style lang="scss">
#common-hotPreach {
  width: 100%;
  padding: 0 10px 25px 10px;
  background-color: #ffffff;
  overflow: hidden;
  .content {
    width: 14rem;
    overflow: hidden;
    .item {
      width: 3.2rem;
      margin-right: 10px;
      font-size: 0px;
      &:nth-of-type(4) {
        margin-right: 0;
      }
      .hotPreachImg {
        width: 100%;
        height: 100px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      h4 {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 13px;
        font-size: 14px;
        margin-bottom: 5px;
        font-weight: normal;
      }
      p {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top: 9px;
        color: #878787;
        font-size: 12px;
      }
    }
  }
}
</style>
