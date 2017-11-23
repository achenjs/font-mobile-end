const state = {
  //  header城市信息
  HeadCityInfo: {
    id: 12,
    level: 2,
    name: '北京',
    pId: 503,
    regionId: 403,
  },
  //  是否打开城市选择popup
  regionPopup: null,
  DemandCityInfo: null,
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
