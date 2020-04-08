export type loginData = {
  username: string
  password: string
}

export type List = {
  id: number
  title: string
  description: string
  date: string 
  tasksCount: number
  completedCount: number
  ongoingCount: number
}

export type Task = {
  id: number
  listId: number
  title: string
  body: string
  startDate: string
  deadLine: string
  priority: number
}

export type TaskGroup = {
  name: string
  color: "red" | "yellow" | "green" | "blue" 
  priority: number
  tasks: Array<Task>
}