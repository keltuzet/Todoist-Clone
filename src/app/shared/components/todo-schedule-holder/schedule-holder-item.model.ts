export type ScheduleHolderItemType = 'today' | 'tomorrow' | 'weekends' | 'nextWeek' | 'noTimeLimit' | 'more';

export interface ScheduleHolderItem {
  tooltipText: string;
  iconName: string;
  iconClass: string;
  applySvgIconTextDirective?: true;
  type: ScheduleHolderItemType;
}
