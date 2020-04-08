import { ADD_TASK, EDIT_TASK, DELETE_TASK } from ".";
import { Task } from "../../types";

interface AddTask {
  type: typeof ADD_TASK
  payload: {
    task: Task
  }
}

interface EditTask {
  type: typeof EDIT_TASK
  payload: {
    task: Task
  }
}

interface DeleteTask {
  type: typeof DELETE_TASK
  payload: {
    taskId: number
  }
}

export type TaskAction = AddTask | EditTask | DeleteTask;