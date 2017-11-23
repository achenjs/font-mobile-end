import { get, post } from '../index';
//  首页数据
export const getCmsInfo = data => post('/ws/cms/info', data);
//  校区接口
export const getCampus = data => post('/ws/campus/getCampus', data);
//  首页今日宣讲
export const getToDayVenueUse = data => get('/ws/venue/getToDayVenueUse', data);
//  首页日历
export const getCalendars = data => get('/ws/calendar/calendars', data);
//  日历场地
export const getVenueByCampus = data => get('/ws/venue/getVenueByCampusId', data);
//  日历信息
export const getMonthVenueUse = data => get('/ws/venue/getMonthVenueUse', data);
//  日历当天宣讲企业
export const getVenueUseByDate = data => get('/ws/venue/getVenueUseByDate', data);
//  城市信息接口
export const getRegionInfo = data => post('/ws/region/infoAll', data);
//  查询搜索结果
export const getSearchStr = data => post('/ws/cms/findStr', data);
