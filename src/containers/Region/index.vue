<template>
  <mu-popup position="left" popupClass="demo-popup-left" :open="regionPopup.flag">
    <RegionList :cityList="cityList"/>
  </mu-popup>
</template>

<script>
import { mapState } from 'vuex';
import RegionList from '@/components/RegionList/index';
import {
  getRegionInfo,
} from '@/axios/home/index';

export default {
  data() {
    return {
      cityList: [],
    };
  },
  computed: {
    ...mapState({
      regionPopup(state) {
        const regionPopup = state.regionPopup ? state.regionPopup : { flag: false };
        return regionPopup;
      },
    }),
  },
  mounted() {
    this.getRegion();
  },
  methods: {
    async getRegion() {
      const { data } = await getRegionInfo();
      this.initCityList(data);
    },
    //  格式化城市信息
    initCityList(data) {
      let Area = data.filter(item => item.level === 1);
      const Region = data.filter(item => item.level === 2);
      Area = Area.map((item) => {
        item.region = [];
        return item;
      });
      let i;
      this.cityList = Area.map((item) => {
        for (i in Region) {
          if (item.regionId === Region[i].pId) {
            item.region.push(Region[i]);
          }
        }
        return item;
      });
    },
  },
  components: {
    RegionList,
  },
};
</script>

<style lang="scss">
.demo-popup-left {
  display: flex;
  height: 100%;
  overflow-y: scroll;
}
</style>
