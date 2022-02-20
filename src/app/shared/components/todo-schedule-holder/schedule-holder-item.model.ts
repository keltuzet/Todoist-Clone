export type ScheduleHolderItemType = 'today' | 'tomorrow' | 'weekends' | 'nextWeek' | 'noTimeLimit';

export interface ScheduleHolderItem {
  tooltipText: string;
  iconName: string;
  iconClass: string;
  applySvgIconTextDirective?: true;
  type: ScheduleHolderItemType;
  dateFormat?: string;
  date?: string;
}
