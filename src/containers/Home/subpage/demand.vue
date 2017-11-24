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
          @click="handleRegion">
          <h6>宣讲会省份</h6>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
          <p v-if="region != null">{{region.name}}</p>
        </li>
        <li
          class="item"
          @click="handleClick('site')">
          <h6>场地类型</h6>
          <i class="tr iconfont icon-arrowright"></i>
          <p v-if="site != null">{{site.label}}</p>
        </li>
        <li
          class="item"
          @click="handleClick('school')">
          <h6>学校名称</h6>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
          <p v-if="school != null">{{school.label}}</p>
        </li>
        <li
          class="item"
          @click="handleClick('scale')">
          <h6>会场规模</h6>
          <i class="tr iconfont icon-arrowright"></i>
          <p v-if="scale != null">{{scale.label}}</p>
        </li>
      </ul>
      <ul
        class="list"
        v-else>
        <li class="item clearfix">
          <h6>贵公司名称</h6>
          <input />
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item" @click="handleClick('count')">
          <h6>招聘人数</h6>
          <i class="tr iconfont icon-arrowright"></i>
          <p v-if="count != null">{{count.label}}</p>
        </li>
        <li class="item">
          <h6>招聘周期</h6>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <h6>联系人</h6>
          <input />
          <i class="tr iconfont icon-arrowright"></i>
        </li>
        <li class="item">
          <h6>联系电话</h6>
          <input type="number"/>
          <i class="tr mr-5 iconfont icon-arrowright"></i>
        </li>
      </ul>
      <DemandList
        :data="data"
        :isShow="isShow"
        :prop="prop"
        @handleDemandItem="handleDemandItem"/>
    </div>
    <div class="demad-submit">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import DemandList from '@/components/DemandList/index';
import {
  getCampus,
} from '@/axios/home/index';
import {
  scaleList,
  siteList,
  zhaopinCount,
} from '@/config/json';

export default {
  data() {
    return {
      data: null,
      prop: 'name',
      isShow: false,
      dataType: '',
      TabIndex: 1,
      region: null,
      site: null,
      school: null,
      scale: null,
      count: null,
      schoolList: [],
      scaleList: [],
      siteList: [],
      zhaopinCount: [],
    };
  },
  mounted() {
    this.scaleList = scaleList;
    this.siteList = siteList;
    this.zhaopinCount = zhaopinCount;
  },
  computed: {
    ...mapState({
      DemandCityInfo(state) {
        this.region = state.DemandCityInfo;
        this.getCampus(this.region);
        this.school = null;
      },
    }),
  },
  methods: {
    ...mapMutations({
      setCityDemandInfo: 'setCityDemandInfo',
      setRegionPopup: 'setRegionPopup',
    }),
    //  校区信息
    async getCampus(obj) {
      const params = {
        cityId: '',
      };
      if (obj) {
        params.provinceId = obj.regionId;
      }
      const { data } = await getCampus(params);
      this.schoolList = data;
    },
    handleTab($index) {
      this.TabIndex = $index;
    },
    handleRegion() {
      this.setRegionPopup({
        flag: true,
        go: 'demand',
      });
    },
    //  点击选项
    handleClick(type) {
      const dataType = type;
      this.isShow = true;
      if (this.dataType === dataType) {
        this.isShow = false;
        this.dataType = '';
      } else {
        this.dataType = dataType;
      }
      switch (dataType) {
        case 'school':
          this.data = this.schoolList.map((item) => {
            item.label = item.universityName + item.campusName;
            return item;
          });
          this.prop = 'label';
          break;
        case 'site':
          this.data = this.siteList;
          this.prop = 'label';
          break;
        case 'scale':
          this.data = this.scaleList;
          this.prop = 'label';
          break;
        case 'count':
          this.data = this.zhaopinCount;
          this.prop = 'label';
          break;
        default:
          break;
      }
    },
    //  选择demandList组价回调
    handleDemandItem(item) {
      console.log(item);
      const dataType = this.dataType;
      this.isShow = false;
      this.dataType = '';
      switch (dataType) {
        case 'school':
          this.school = item;
          break;
        case 'site':
          this.site = item;
          break;
        case 'scale':
          this.scale = item;
          break;
        case 'count':
          this.count = item;
          break;
        default:
          break;
      }
    },
  },
  components: {
    DemandList,
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
        min-height: 60px;
        border-bottom: 0.5px solid #c4c4c4;
        font-size: 14px;
        padding-top: 8px;
        h6 {
          font-weight: normal;
          color: #aaaaaa;
          font-size: 12px;
          height: 26px;
          line-height: 26px;
        }
        .mr-5 {
          margin-right: 5px;
        }
        .tr {
          position: absolute;
          right: 0;
          top: 36px;
          font-size: .12rem;
        }
        p, input {
          font-size: 14px;
          color: #000000;
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
