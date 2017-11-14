<template>
  <div id="common-searchList">
    <div class="searchList-container">
      <div
        class="searchList-list"
        v-if="schoolsList.length">
        <SearchTitle :name="'校区'"/>
        <div class="searchList-item">
          <div class="text"
            v-for="(item, index) in schoolsList"
            :key="index">
            {{item.universityName}}
          </div>
        </div>
      </div>
      <div
        class="searchList-list"
        v-if="venuesList.length">
        <SearchTitle :name="'场地'"/>
        <div class="searchList-item">
          <div
            class="text"
            v-for="(item, index) in venuesList"
            :key="index">
            {{item.venueName}}
          </div>
        </div>
      </div>
      <div
        class="searchList-list"
        v-if="companysList.length">
        <SearchTitle :name="'公司'"/>
        <div class="searchList-item">
          <div
            class="text"
            v-for="(item, index) in companysList"
            :key="index">
            {{item.companyName}}
          </div>
        </div>
      </div>
      <div
        class="searchList-list"
        v-if="isShow">
        没有搜索结果
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import SearchTitle from '@/components/SearchTitle/index';
import {
  getSearchStr,
} from '@/axios/home/index';

export default {
  data() {
    return {
      companysList: [],
      schoolsList: [],
      venuesList: [],
      isShow: false,
    };
  },
  components: {
    SearchTitle,
  },
  computed: {
    ...mapState({
      searchValue: 'searchValue',
    }),
  },
  watch: {
    searchValue(val) {
      if (val) {
        this.handleChangeSearch(val);
      }
    },
  },
  methods: {
    async handleChangeSearch(val) {
      const { data } = await getSearchStr({
        findStr: val,
      });
      if (data) {
        const { companys, schools, venues } = data;
        this.companysList = companys;
        this.schoolsList = schools;
        this.venuesList = venues;
        if (!companys.length && !schools.length && !venues.length) {
          this.isShow = true;
        }
      } else {
        this.companysList = [];
        this.schoolsList = [];
        this.venuesList = [];
        this.isShow = true;
      }
    },
  },
};
</script>

<style lang="scss">
#common-searchList {
  .searchList-container {
    padding: 0 10px;
    .searchList-list {
      padding-top: 19px;
      padding-bottom: 14px;
      .searchList-item {
        .text {
          display: inline-block;
          margin-top: 14px;
          padding: 9px 13px;
          border: 0.5px solid #d3d3d3;
          font-size: 12px;
          border-radius: 4px;
          margin-right: .32rem;
        }
      }
    }
  }
}
</style>
