<template>
  <div id="common-demand" class="mb-9">
    <div class="demand-header">
      <div
        :class="['item', TabIndex === 1 ? 'active' : '']"
        @click="handleTab(1)">找宣讲场地{{DemandCityInfo}}</div>
      <div
        :class="['item', TabIndex === 2 ? 'active' : '']"
        @click="handleTab(2)">发布宣讲需求</div>
    </div>
    <div class="demand-body">
      <ul
        class="list"
        v-if="TabIndex === 1">
        <li
          class="item"
          :style="{paddingTop: region ? '8px' : '14px'}"
          @click="handleRegion">
          <span>宣讲会省份</span>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
          <p v-if="region != null">{{region.name}}</p>
        </li>
        <li class="item" :style="{paddingTop: site ? '8px' : '14px'}">
          <span>场地类型</span>
          <i class="tr iconfont icon-arrowright"></i>
          <p v-if="site != null">{{site.name}}</p>
        </li>
        <li class="item" :style="{paddingTop: school ? '8px' : '14px'}">
          <span>学校名称</span>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
          <p v-if="school != null">{{school.name}}</p>
        </li>
        <li class="item" :style="{paddingTop: scale ? '8px' : '14px'}">
          <span>会场规模</span>
          <i class="tr iconfont icon-arrowright"></i>
          <p v-if="scale != null">{{scale.name}}</p>
        </li>
      </ul>
      <ul
        class="list"
        v-else>
        <li class="item clearfix">
          <span>贵公司名称</span>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>招聘人数</span>
          <i class="tr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>招聘周期</span>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>联系人</span>
          <i class="tr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>联系电话</span>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
      </ul>
      <div
        class="demand-select">
        <div class="demand-options">
          清华大学
        </div>
      </div>
    </div>
    <div class="demad-submit">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      TabIndex: 1,
      region: null,
      site: null,
      school: null,
      scale: null,
    };
  },
  computed: {
    ...mapState({
      DemandCityInfo(state) {
        this.region = state.DemandCityInfo;
      },
    }),
  },
  methods: {
    ...mapMutations({
      setCityDemandInfo: 'setCityDemandInfo',
    }),
    handleTab($index) {
      this.TabIndex = $index;
    },
    handleRegion() {
      this.$router.push({
        name: 'Region',
        params: {
          go: 'demand',
        },
      });
    },
  },
  destroyed() {
    this.setCityDemandInfo(null);
  },
};
</script>

<style lang="scss">
#common-demand {
  width: 100%;
  .demand-header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color: #f2f2f2;
    color: #202020;
    border-top: 0.5px solid #d2d2d2;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    font-size: 16px;
    .item {
      width: 50%;
      height: 100%;
      text-align: center;
      &.active {
        color: #51a1ff;
        background-color: #ffffff;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
  }
  .demand-body {
    padding: 0 .25rem;
    background-color: #ffffff;
    .list {
      display: flex;
      flex-wrap: wrap;
      color: #010101;
      font-size: 0;
      .item {
        position: relative;
        width: 50%;
        min-height: 50px;
        border-bottom: 0.5px solid #c4c4c4;
        font-size: 14px;
        padding-top: 14px;
        .mr-5 {
          margin-right: 5px;
        }
        .tr {
          position: absolute;
          right: 0;
          top: 16px;
        }
        p {
          font-size: 12px;
          color: #aeaeae;
        }
      }
    }
    .demand-select {
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
  }
  .demad-submit {
    width: 100%;
    background-color: #ffffff;
    padding: 16px .25rem;
    button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: text;
      font-size: 15px;
      background-color: #51a1ff;
      color: #ffffff;
    }
  }
}
</style>
