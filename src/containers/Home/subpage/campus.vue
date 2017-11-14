<template lang="html">
  <div id="common-campus" class="mb-9">
    <div
      class="item"
      v-for="(item, index) in campusList"
      :key="index">
      <a :href="item.url" target="_blank">
        {{item.title}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      campusList: [{
        title: '智联招聘三大产品强势发力校园端',
        url: '//news.hexun.com/2015-11-25/180784232.html',
      }, {
        title: '智联招聘独具匠心，完善差异化竞争策略',
        url: '//ah.ifeng.com/a/20170608/5732393_0.shtml',
      }, {
        title: '大学生暑期就业力提升营开启报名',
        url: '//news.21cn.com/caiji/roll1/a/2017/0726/02/32538491.shtml',
      }, {
        title: '智联招聘启动第九季就业有位来：青春梦',
        url: '//money.163.com/17/0908/14/CTQM1EDO002580S6.html',
      }, {
        title: '智联招聘：2017应届毕业生就业力调研报告',
        url: '//www.199it.com/archives/609397.html',
      }, {
        title: '职业发展平台战略布局智联招聘不断前行',
        url: '//software.it168.com/a2015/1124/1780/000001780533.shtml',
      }],
    };
  },
};
</script>

<style lang="scss">
#common-campus {
  background-color: #ffffff;
  padding: 0 10px 25px 10px;
  .item {
    padding: 10px 0;
    font-size: 12px;
    border-bottom: 0.5px solid #dcdcdc;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
