import { TaskAction } from "./types";
import { Task } from "../../types";

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';

export const addTask = (task: Task): TaskAction => {
	return {
		type: ADD_TASK,
		payload: {
			task
		}
	};
};

export const editTask = (task: Task): TaskAction => {
	return {
		type: EDIT_TASK,
		payload: {
			task
		}
	};
};

export const deleteTask = (taskId: number): TaskAction => {
	return {
		type: DELETE_TASK,
		payload: {
			taskId
		}
	};
};
