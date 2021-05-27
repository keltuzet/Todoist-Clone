interface TodoPriorityColor {
  primary: string;
  secondary: string;
}

export interface TodoPriority {
  id: number;
  title: string;
  colors: TodoPriorityColor;
  iconFlagTransparent?: boolean;
}
