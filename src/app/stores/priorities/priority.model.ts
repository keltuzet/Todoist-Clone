interface PriorityColors {
  primary: string;
  secondary: string;
}

export interface Priority {
  id: string;
  title: string;
  colors: PriorityColors;
  default?: boolean;
}
