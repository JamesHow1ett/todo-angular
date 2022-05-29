enum PriorityStatus {
  Low = 0,
  Normal = 1,
  High = 2,
}

export interface TodoItem {
  id: string
  title: string
  completed: boolean
  createdAt?: number
  priority?: PriorityStatus
}

export type NewTodo = Omit<TodoItem, 'id'>;
