const mutations = {
  //  日历当日信息
  setDayInfo(state, data) {
    state.dayInfo = data;
  },
  //  头部城市选择信息
  setCityHeaderInfo(state, data) {
    state.HeadCityInfo = data;
  },
  //  首页需求组件城市选择信息
  setCityDemandInfo(state, data) {
    state.DemandCityInfo = data;
  },
  //  头部搜索框内容
  setSearchValue(state, data) {
    state.searchValue = data;
  },
  //  城市popup信息
  setRegionPopup(state, data) {
    state.regionPopup = data;
  },
};

export default mutations;
