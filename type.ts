export interface Task {
  id: number;
  content: string;
}

export interface ColumnContent {
  id: string;
  title: string;
  tasks: Task[];
}

export interface ColumnType {
  [key: string]: ColumnContent;
}
