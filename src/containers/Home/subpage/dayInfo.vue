<template>
  <div id="common-dayInfo">
    <div class="dayInfo-header">
      <div class="count">
        <span>{{dayInfo.data.length >= 10 ? dayInfo.data.length : '0' + dayInfo.data.length}}</span>
      </div>
      <p>今日宣讲企业</p>
    </div>
    <div class="dayInfo-body">
      <ul>
        <li v-for="(item, index) in dayInfo.data" :key="index">
          {{item.companyName}}
        </li>
      </ul>
    </div>
     <p class="more">场地详情></p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState({
      dayInfo: 'dayInfo',
    }),
  },
};
</script>

<style lang="scss" scoped>
#common-dayInfo {
  .dayInfo-header {
    padding: 11px 14px;
    background-color: #fafafa;
    .count {
      text-align: center;
      span {
        display: inline-block;
        width: 52px;
        height: 52px;
        line-height: 52px;
        background-color: #fed000;
        color: #ffffff;
        font-size: 24px;
        border-radius: 50%;
      }
    }
    p {
      text-align: center;
      font-size: 18px;
      margin-top: 5px;
    }
  }
  .dayInfo-body {
    padding: 0 14px;
    background-color: #ffffff;
    ul {
      height: 200px;
      overflow-y: auto;
      li {
        width: 100%;
        height: 40px;
        line-height: 40px;
        padding-right: 5px;
        font-size: 13px;
        color: #878787;
        border-bottom: 0.5px solid #eaeaea;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:before {
          content: "\2022";
          color: #51a1ff;
          margin-right: 5px;
        }
      }
    }
  }
  .more {
    text-align: right;
    font-size: 12px;
    padding-right: 12px;
    margin-top: 10px;
    color: #51a1ff;
  }
}
</style>


