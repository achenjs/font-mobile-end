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
            @click="handleClickCity(ite)">
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
import { mapState, mapMutations } from 'vuex';

export default {
  props: {
    cityList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    ...mapState({
      regionPopup: 'regionPopup',
    }),
  },
  methods: {
    ...mapMutations({
      setCityHeaderInfo: 'setCityHeaderInfo',
      setCityDemandInfo: 'setCityDemandInfo',
      setRegionPopup: 'setRegionPopup',
    }),
    //  选中城市，保存选中城市信息并且关闭城市popup
    handleClickCity(item) {
      const { go } = this.regionPopup;
      if (go === 'head') {
        this.setCityHeaderInfo(item);
      } else if (go === 'demand') {
        this.setCityDemandInfo(item);
      }
      //  关闭城市popup
      this.setRegionPopup({
        flag: false,
      });
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
