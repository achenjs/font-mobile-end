const mutations = {
  setDayInfo(state, data) {
    state.dayInfo = data;
  },
  setCityHeaderInfo(state, data) {
    state.HeadCityInfo = data;
  },
  setCityDemandInfo(state, data) {
    state.DemandCityInfo = data;
  },
  setSearchValue(state, data) {
    state.searchValue = data;
  },
};

export default mutations;
