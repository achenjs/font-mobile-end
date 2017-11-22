<template>
  <div id="common-region">
    <SearchHead />
    <div class="region-container">
      <div class="region-list"
        v-for="(item, index) in cityList"
        :key="index">
        <SearchTitle :name="item.name"/>
        <div class="region-item">
          <div class="region-text"
            v-for="(ite, ind) in item.region"
            :key="ind"
            @click="handleCity(ite)">
            {{ite.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHead from '@/components/SearchHead/index';
import SearchTitle from '@/components/SearchTitle/index';
import { mapMutations } from 'vuex';
import {
  getRegionInfo,
} from '@/axios/home/index';

export default {
  data() {
    return {
      cityList: [],
    };
  },
  mounted() {
    this.getRegion();
  },
  methods: {
    ...mapMutations({
      setCityHeaderInfo: 'setCityHeaderInfo',
      setCityDemandInfo: 'setCityDemandInfo',
    }),
    async getRegion() {
      const { data } = await getRegionInfo();
      this.initCityList(data);
    },
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
    handleCity(item) {
      const { go } = this.$route.params;
      if (go === 'head') {
        this.setCityHeaderInfo(item);
      } else if (go === 'demand') {
        this.setCityDemandInfo(item);
      }
      this.$router.back();
    },
  },
  components: {
    SearchHead,
    SearchTitle,
  },
};
</script>

<style lang="scss">
#common-region {
  .region-container {
    padding: 0 10px;
    .region-list {
      padding-top: 19px;
      border-bottom: 1px solid #d3d3d3;
      padding-bottom: 14px;
      &:last-of-type {
        border-bottom: 0;
      }
      .region-item {
        display: flex;
        flex-wrap: wrap;
        .region-text {
          width: 1.52rem;
          height: 31px;
          line-height: 31px;
          text-align: center;
          margin-top: 14px;
          margin-left: .32rem;
          border: 0.5px solid #d3d3d3;
          border-radius: 4px;
          color: #919191;
          font-size: 12px;
          &:nth-of-type(4n+1) {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
