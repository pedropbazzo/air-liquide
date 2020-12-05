export interface ToDoItem {
  name: string;
  checked: boolean;
}

export interface ReduxState {
  toDoItems: ToDoItem[];
}

export interface ReduxAction {
  type: string;
}
