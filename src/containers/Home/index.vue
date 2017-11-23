<template lang="html">
  <div id="common-home">
    <div class="content">
      <HeaderComponent />
      <DemandComponent />
      <TodayComponent :todayList="todayList"/>
      <TitleComponent title="宣讲现场"/>
      <PreachComponent :preachList="preachList"/>
      <TitleComponent title="热门宣讲"/>
      <HotPreachComponent :hotList="hotList"/>
      <TitleComponent title="学校场地"/>
      <SchoolComponent :schoolList="schoolList"/>
      <TitleComponent title="宣讲日历"/>
      <CalendarComponent @hanleDayClick="hanleDayClick"/>
      <TitleComponent title="特色服务"/>
      <TeseComponent :teseList="teseList"/>
      <TitleComponent title="合作伙伴"/>
      <HezuoComponent :hezuoList="hezuoList"/>
      <TitleComponent title="媒体报道"/>
      <MediaComponent :mediaList="mediaList"/>
      <TitleComponent title="校园业务"/>
      <CampusComponent/>
    </div>
    <RegionComponent />
    <ModalComponent :flag="flag" @handleClose="handleClose">
      <DayInfoComponent />
    </ModalComponent>
  </div>
</template>

<script>
import {
  getCmsInfo,
  getToDayVenueUse,
} from '@/axios/home/index';
import Modal from '@/components/Modal/index';
import Region from '@/containers/Region/index';
import DayInfo from './subpage/dayInfo';
import Header from './subpage/header';
import Demand from './subpage/demand';
import Today from './subpage/today';
import Title from './subpage/title';
import Calendar from './subpage/calendar';
import Tese from './subpage/teseServer';
import Hezuo from './subpage/hezuo';
import Media from './subpage/media';
import Campus from './subpage/campus';
import Preach from './subpage/preach';
import HotPreach from './subpage/hotPreach';
import School from './subpage/school';

export default {
  components: {
    RegionComponent: Region,
    HeaderComponent: Header,
    TodayComponent: Today,
    TitleComponent: Title,
    CalendarComponent: Calendar,
    TeseComponent: Tese,
    HezuoComponent: Hezuo,
    MediaComponent: Media,
    CampusComponent: Campus,
    SchoolComponent: School,
    HotPreachComponent: HotPreach,
    PreachComponent: Preach,
    ModalComponent: Modal,
    DemandComponent: Demand,
    DayInfoComponent: DayInfo,
  },
  data() {
    return {
      todayList: null,
      preachList: null,
      hotList: null,
      schoolList: null,
      hezuoList: null,
      teseList: null,
      mediaList: null,
      flag: false,
    };
  },
  mounted() {
    this.CmsInfo();
    this.TodayInfo();
  },
  methods: {
    async TodayInfo() {
      const result = await getToDayVenueUse();
      const { data } = result;
      this.todayList = data.venueUseAll;
    },
    //  cmsInfo 加载首页数据
    async CmsInfo() {
      const result = await getCmsInfo({
        cmsId: 1002,
      });
      const { data } = result;
      const content = JSON.parse(data.content);
      const { meeting, schoolSchool = [], hot = [] } = content;
      const { media = [], tese = [], hezuo = [] } = content.photots;
      this.hezuoList = hezuo;
      this.teseList = tese;
      this.mediaList = media;
      this.preachList = meeting[1];
      this.hotList = hot;
      this.schoolList = schoolSchool;
    },
    //  打开模态框
    hanleDayClick() {
      this.flag = true;
    },
    //  关闭模态框
    handleClose() {
      this.flag = false;
    },
  },
};
</script>

<style lang="scss">
#common-home {
  width: 100%;
  background-color: #f0f0f0;
}
</style>
