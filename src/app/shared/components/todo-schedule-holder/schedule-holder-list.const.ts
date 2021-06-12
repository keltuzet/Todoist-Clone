import { isToday } from '@shared/utils';
import { ScheduleHolderItem } from './schedule-holder-item.model';

export const SCHEDULE_HOLDER_LIST: ScheduleHolderItem[] = [
  {
    iconClass: 'icon_size_l icon_color_green',
    iconName: 'calendar-today',
    tooltipText: 'Сегодня',
    applySvgIconTextDirective: true,
    type: 'today',
  },
  {
    iconClass: 'icon_size_l icon_color_tenne',
    iconName: 'sun',
    tooltipText: 'Завтра',
    type: 'tomorrow',
  },
  {
    iconClass: 'icon_size_l icon_color_royal-blue',
    iconName: 'couch',
    tooltipText: 'На выходных',
    type: 'weekends',
  },
  {
    iconClass: 'icon_size_l icon_color_purple-heart',
    iconName: 'arrow-right-calendar',
    tooltipText: 'Следующая неделя',
    type: 'nextWeek',
  },
  {
    iconClass: 'icon_size_l',
    iconName: 'endless-schedule',
    tooltipText: 'Без срока',
    type: 'noTimeLimit',
  },
  {
    iconClass: 'icon_size_l',
    iconName: 'ellipsis-h-alt',
    tooltipText: 'Еще',
    type: 'more',
  },
];

export function getScheduleHolderList(date: Date, now = new Date()) {
  return SCHEDULE_HOLDER_LIST.slice(isToday(date, now) ? 1 : 0);
}
