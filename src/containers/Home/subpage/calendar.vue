<template lang="html">
  <div id="common-calendar" class="mb-9">
    <div class="select-container">
      <div class="item area">
        地区
        <i class="iconfont icon-arrowdown"></i>
      </div>
      <div class="item campus">
        校区
        <i class="iconfont icon-arrowdown"></i>
      </div>
      <div class="item site">
        场地
        <i class="iconfont icon-arrowdown"></i>
      </div>
    </div>
    <div class="calendar-container">
      <VueFullcalendar
        lang="zh"
        :events="events"
        @changeMonth="changeMonth"
        @dayClick="dayClick"
        @eventClick="eventClick"></VueFullcalendar>
    </div>
    <div class="calendar-footer">
      <img src="../../../assets/images/home/calendar-number.png"/>
      <span>本月总场数 : 85</span>
    </div>
  </div>
</template>

<script>
import VueFullcalendar from 'vue-fullcalendar';
import moment from 'moment';
import { mapMutations } from 'vuex';
import {
  getCalendars,
  getVenueByCampus,
  getMonthVenueUse,
  getVenueUseByDate,
} from '@/axios/home/index';

export default {
  data() {
    return {
      events: [],
      regionId: 403,
      campusId: '',
      venueId: '',
      count: 0,
      dateInfo: '',
    };
  },
  components: {
    VueFullcalendar,
  },
  mounted() {
    $('.events-day').on('click', () => {
      $('.day-number').removeClass('active');
      $(this).find('.day-number').addClass('active');
    });
    this.getCalendarsInfo();
    this.getVenueByCampusInfo();
    this.getMonthVenueUseInfo(moment(this.dateInfo).format('YYYY-MM-DD'));
  },
  methods: {
    ...mapMutations({
      setDayInfo: 'setDayInfo',
    }),
    async getCalendarsInfo() {
      const data = await getCalendars();
      console.log(data);
    },
    async getVenueByCampusInfo() {
      const data = await getVenueByCampus();
      console.log(data);
    },
    async getMonthVenueUseInfo(currentDate) {
      const { data } = await getMonthVenueUse({
        cityId: this.regionId,
        campusId: this.campusId,
        venueId: this.venueId,
        date: currentDate ? currentDate.substring(5, 7) : '',
      });
      this.events = this.formatData(data);
    },
    formatData(data) {
      if (data.length || data != null) {
        this.count = 0;
        data = data.map((item) => {
          this.count += item.count;
          return {
            start: item.reserve_date,
            title: `共${item.count}场`,
            cssClass: 'itemCount',
          };
        });
      } else {
        this.count = 0;
      }
      return data;
    },
    eventClick(event) {
      this.dayClick(event.start);
    },
    async dayClick(day) {
      this.$emit('hanleDayClick');

      const dayTime = moment(day).format('YYYY-MM-DD');
      const { data } = await getVenueUseByDate({
        date: dayTime,
        cityId: this.regionId,
        campusId: this.campusId,
        venueId: this.venueId,
      });
      this.setDayInfo({
        flag: true,
        data,
      });
    },
    changeMonth(start, end, current) {
      this.dateInfo = current;
      this.getMonthVenueUseInfo(current);
    },
  },
};
</script>

<style lang="scss">
#common-calendar {
  width: 100%;
  background-color: #ffffff;
  .select-container {
    display: flex;
    padding: 9px 0;
    border-top: 0.5px solid #aeaeae;
    border-bottom: 0.5px solid #aeaeae;
    .item {
      text-align: center;
      font-size: 12px;
      flex: 1;
      border-right: 0.5px solid #aeaeae;
      position: relative;
      &:last-of-type {
        border: 0;
      }
      i {
        font-size: 12px;
      }
    }
  }
  .calendar-container {
    .comp-full-calendar {
      padding: 0;
      padding-top: 10px;
    }
    .full-calendar-header {
      height: 55px;
      color: #51a1ff;
      background-color: #f9f9f9;
    }
    .full-calendar-body {
      margin-top: 0;
      padding: 0 10px;
    }
    //  星期的样式
    .full-calendar-body .weeks {
      border-top: 0;
      border-left: 0;
      background-color: #f9f9f9;
    }
    .full-calendar-body .weeks .week {
      font-size: 10px;
      border-right: 0;
    }
    .full-calendar-body .dates .week-row {
      border-left: 0;
    }
    .full-calendar-body .dates .week-row .day-cell {
      min-height: 50px;
      border-right: 0;
    }
    .full-calendar-body .dates .week-row .day-cell .day-number {
      text-align: center;
      font-size: 8px;
      opacity: 0;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day {
      min-height: 50px;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day.today p.day-number.active {
      background: #fed000;
      color: #ffffff;
      opacity: 1;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day p.day-number {
      font-size: 12px;
      transform: scale(.75);
      width: 18px;
      height: 18px;
      line-height: 1;
      text-align: center;
      margin: 0 auto;
      border-radius: 50%;
      opacity: 1;
    }
    //  当日背景色
    .full-calendar-body .dates .week-row .day-cell.today {
      background-color: #f2f8ff;
    }
    //  自定义内容
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item.is-start {
      margin-left: 0px;
    }
    .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {
      display: block;
      padding-left: 0;
      width: 100%;
      text-align: center;
      font-size: 10px;
      // transform: scale(.5);
      margin-top: 5px;
      background-color: transparent;
    }
  }
  .calendar-footer {
    text-align: right;
    padding: 8px 20px 26px 0;
    img {
      width: 14px;
      height: 12px;
    }
    span {
      font-size: 12px;
    }
  }
}
</style>
