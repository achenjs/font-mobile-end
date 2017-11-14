<template lang="html">
  <div id="common-today" class="mb-9">
    <div class="content">
      <div class="todayNum">
        <h4 class="title">今日宣讲</h4>
        <h4>共<span>{{todayList ? todayList.length : 0}}</span>场</h4>
      </div>
      <div class="todayInfo">
        <ul class="clearfix" :style="{ top: todayTop }">
          <li
            class="fl"
            v-for="(item, index) in todayList"
            :key="index">
            <h4><b></b>{{item.custrName}}</h4>
            <p>{{item.universityName}}</p>
            <i></i>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todayList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      todayIndex: 0,
    };
  },
  computed: {
    todayTop() {
      return -(this.todayIndex * 56) + 'px';
    },
  },
  mounted() {
    this.Time = setInterval(() => {
      if (this.todayList) {
        if ((this.todayIndex === 0 && this.todayList.length > 2) ||
        this.todayList.length - (this.todayIndex * 2) > 2) {
          this.todayIndex += 1;
        } else {
          this.todayIndex = 0;
        }
      }
    }, 3000);
  },
  destroyed() {
    //  清除定时器
    this.Time = null;
  },
};
</script>

<style lang="scss">
#common-today {
  .content {
    display: flex;
    background-color: #ffffff;
    .todayNum {
      width: 2.16rem;
      height: 56px;
      background: url('../../../assets/images/home/today-bg.png') no-repeat;
      background-size: cover;
      font-size: 0px;
      padding-top: 7px;
      h4 {
        font-weight: normal;
        font-size: 15px;
        text-align: center;
        &.title {
          font-weight: bold;
        }
        span {
          padding: 0 5px;
          background-color: #51a1ff;
          color: #ffffff;
          border-radius: 3px;
          font-size: 13px;
          margin: 0 4px;
          letter-spacing: 1px;
        }
      }
    }
    .todayInfo {
      flex: 1;
      height: 56px;
      overflow: hidden;
      ul {
        width: 100%;
        position: relative;
        z-index: 1;
        transition: top .75s;
        li {
          width: 50%;
          height: 56px;
          padding: 12px 0;
          position: relative;
          &:nth-of-type(2n) {
            margin-left: 0;
            i {
              display: none;
            }
          }
          &:last-of-type {
            i {
              display: none;
            }
          }
          i {
            position: absolute;
            top: 12px;
            right: 0;
            height: 40px;
            border-right: 0.5px dotted #aaaaaa;
          }
          h4 {
            position: relative;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 13px;
            font-weight: normal;
            padding: 0 8px;
            b {
              position: absolute;
              top: 7px;
              left: 2px;
              width: 4px;
              height: 4px;
              background: url('../../../assets/images/home/point.png') no-repeat;
              background-size: cover;
            }
          }
          p {
            width: 100%;
            padding: 0 8px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-top: 3px;
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
