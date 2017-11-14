const state = {
  count: 0,
  cityName: '北京',
  //  header城市信息
  HeadCityInfo: {
    id: 12,
    level: 2,
    name: '北京',
    pId: 503,
    regionId: 403,
  },
  DemandCityInfo: null,
  todos: [
    { id: 1, done: true },
    { id: 2, done: false },
  ],
  //  search框输入内容
  searchValue: '',
  cmsInfo: null,
  //  选中日期企业
  dayInfo: {
    flag: false,
    data: [],
  },
};

export default state;
