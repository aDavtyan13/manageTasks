export interface IListItem {
  id: number;
  name: string;
  tasks: ITaskItem[];
  selected?: boolean;
  isEditable?: boolean;
}

export interface ITaskItem {
  id: number;
  name: string;
  isEditable?: boolean;
}
