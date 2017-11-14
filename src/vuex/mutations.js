const mutations = {
  increment(state, obj = 5) {
    state.count += obj;
  },
  incrementRemove(state) {
    state.count -= 1;
  },
  setDayInfo(state, data) {
    state.dayInfo = data;
  },
};

export default mutations;
