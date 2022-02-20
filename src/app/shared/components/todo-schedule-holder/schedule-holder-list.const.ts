import { getNextWeek, getNextWeekends, getToday, getTomorrow, isToday } from '@shared/utils';
import * as moment from 'moment';
import { ScheduleHolderItem } from './schedule-holder-item.model';

export const SCHEDULE_HOLDER_LIST: ScheduleHolderItem[] = [
  {
    iconClass: 'icon_size_l icon_color_green',
    iconName: 'calendar-today',
    tooltipText: 'Сегодня',
    applySvgIconTextDirective: true,
    type: 'today',
    dateFormat: 'dd',
  },
  {
    iconClass: 'icon_size_l icon_color_tenne',
    iconName: 'sun',
    tooltipText: 'Завтра',
    type: 'tomorrow',
    dateFormat: 'dd',
  },
  {
    iconClass: 'icon_size_l icon_color_royal-blue',
    iconName: 'couch',
    tooltipText: 'На выходных',
    type: 'weekends',
    dateFormat: 'dd D MMM',
  },
  {
    iconClass: 'icon_size_l icon_color_purple-heart',
    iconName: 'arrow-right-calendar',
    tooltipText: 'Следующая неделя',
    type: 'nextWeek',
    dateFormat: 'dd D MMM',
  },
  {
    iconClass: 'icon_size_l',
    iconName: 'endless-schedule',
    tooltipText: 'Без срока',
    type: 'noTimeLimit',
    dateFormat: 'dd',
  },
];

export function getScheduleHolderList(date: Date, now = new Date()): ScheduleHolderItem[] {
  return SCHEDULE_HOLDER_LIST.slice(isToday(date, now) ? 1 : 0).map(item => {
    item.date = getDate(item)?.format(item.dateFormat);
    return item;
  });
}

function getDate(item: ScheduleHolderItem): moment.Moment {
  switch (item.type) {
    case 'today':
      return getToday();
    case 'tomorrow':
      return getTomorrow();
    case 'weekends':
      return getNextWeekends();
    case 'nextWeek':
      return getNextWeek();
    case 'noTimeLimit':
      return;
  }
}

/*
{
    iconClass: 'icon_size_l',
    iconName: 'ellipsis-h-alt',
    tooltipText: 'Еще',
    type: 'more',
    dateFormat: 'dd',
  },
*/
