<template lang="html">
  <div id="common-school" class="mb-9">
    <div class="content">
      <div
        class="item"
        v-for="(item, index) in schoolList"
        :key="index" v-if="index < 4">
          <router-link
            class="href"
            :to="'/venueShow/' + item.venueId"
            target="_blank">
            <div class="itemImg">
              <img :src="item.imageUrl" alt="图片">
              <i class="icon-hot"></i>
              <b>座位数 {{item.seatCount}}位</b>
            </div>
          </router-link>
          <h3>{{item.universityName}}-{{item.campusName}}</h3>
          <h4>【{{item.venueName}}】</h4>
          <StarComponent :value="5"/>
          <div class="info">{{item.address}}</div>
      </div>
    </div>
    <div class="more">
      <span>更多</span>
      <i class="iconfont icon-arrowright"></i>
    </div>
  </div>
</template>

<script>
import Star from '@/components/Star/index';

export default {
  components: {
    StarComponent: Star,
  },
  props: {
    schoolList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
#common-school {
  width: 100%;
  background-color: #ffffff;
  padding: 0 10px 25px 10px;
  overflow: hidden;
  .content {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    .item {
      display: inline-block;
      width: 3.2rem;
      margin-right: 10px;
      font-size: 0px;
      &:nth-of-type(4) {
        margin-right: 0;
      }
      .href {
        display: block;
        width: 100%;
        height: 100%;
      }
      .itemImg {
        position: relative;
        width: 100%;
        height: 100px;
        overflow: hidden;
        img {
          display: block;
          width: 100%;
          height: 100%;
        }
        .icon-hot {
          position: absolute;
          top: 0;
          right: 0.25rem;
          width: 23px;
          height: 25px;
          color: #ffffff;
          background: url('../../../assets/images/home/icon-hot.png') no-repeat;
          background-size: cover;
        }
        b {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 25px;
          line-height: 25px;
          color: #ffffff;
          background: rgba(0, 0, 0, .7);
          padding-left: 10px;
          font-size: 12px;
          font-weight: normal;
        }
      }
      h3 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        margin-top: 12px;
        padding-right: 10px;
        min-height: 20px;
        font-weight: normal;
      }
      h4 {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        margin: 10px 0;
        color: #848383;
        font-weight: normal;
      }
      .info {
        width: 100%;
        padding: 0 3px;
        height: 30px;
        line-height: 30px;
        margin-top: 10px;
        color: #51a1ff;
        background-color: #edf5ff;
        font-size: 12px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .more {
    text-align: center;
    width: 5.5rem;
    height: 30px;
    line-height: 30px;
    margin: 10px auto 0px;
    border-radius: 30px;
    border: 1px solid #aad1ff;
    font-size: 0;
    span {
      font-size: 15px;
      color: #51a1ff;
    }
    i {
      font-size: 12px;
      color: #51a1ff;
    }
  }
}
</style>
