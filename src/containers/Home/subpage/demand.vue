<template>
  <div id="common-demand" class="mb-9">
    <div class="demand-header">
      <div
        :class="['item', TabIndex === 1 ? 'active' : '']"
        @click="handleTab(1)">找宣讲场地</div>
      <div
        :class="['item', TabIndex === 2 ? 'active' : '']"
        @click="handleTab(2)">发布宣讲需求</div>
    </div>
    <div class="demand-body">
      <ul
        class="list"
        v-if="TabIndex === 1">
        <li class="item clearfix">
          <span>宣讲会省会</span>
          <i class="fr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>场地类型</span>
          <i class="fr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>学校名称</span>
          <i class="fr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>会场规模</span>
          <i class="fr iconfont icon-arrowright"></i>
        </li>
      </ul>
      <ul
        class="list"
        v-else>
        <li class="item clearfix">
          <span>贵公司名称</span>
          <i class="fr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>招聘人数</span>
          <i class="fr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>招聘周期</span>
          <i class="fr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>联系人</span>
          <i class="fr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <span>联系电话</span>
          <i class="fr mr-5 iconfont icon-arrowright"></i>
        </li>
      </ul>
    </div>
    <div class="demad-submit">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TabIndex: 1,
    };
  },
  methods: {
    handleTab($index) {
      this.TabIndex = $index;
    },
  },
};
</script>

<style lang="scss" scoped>
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
        width: 50%;
        height: 50px;
        line-height: 50px;
        border-bottom: 0.5px solid #c4c4c4;
        font-size: 14px;
        .mr-5 {
          margin-right: 5px;
        }
        .tr {
          text-align: right;
        }
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
