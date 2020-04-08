import { Task } from "../types";
import { ADD_TASK, EDIT_TASK, DELETE_TASK } from "../actions/tasks";
import { TaskAction } from "../actions/tasks/types";
import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const random = (n: number) => (
	Math.floor(Math.random()*n)
)


const getTasks = (tasksCount: number) => {
	const tasks: any = [];

	for(let i = 0; i < tasksCount; i++) {
		tasks.push({
			id: i,
			listId: random(4),
			title: lorem.generateWords(random(3)),
			body: lorem.generateWords(random(12)),
			startDate: new Date(random(1000000000)).toJSON(),
			deadLine: new Date(random(10000000000)).toJSON(),
			priority: random(4)
		})
	}

	return tasks;
}

const initialState = {
	isLoading: false,
	tasksData: getTasks(60),
	error: null
};

export type TasksState = {
	isLoading: boolean
	tasksData: Array<Task>
	error: any | null
} 

export default function (state: TasksState = initialState, action: TaskAction): TasksState {
	switch (action.type) {
		case ADD_TASK:
			return {
				...state,
				isLoading: false,
				tasksData: [ ...state.tasksData, action.payload.task],
				error: null
			};
		
		case EDIT_TASK: 
			return {
				...state,
				isLoading: false,
				error: null,
				tasksData: state.tasksData.map((task: Task) => (
					task.id === action.payload.task.id 
						? action.payload.task
						: task
				))
			}
		
		case DELETE_TASK: 
			return {
				...state,
				isLoading: false,
				error: null,
				tasksData: state.tasksData.filter((task: Task) => (
					task.id !== action.payload.taskId
				))
			}

		default:
			return state;
	}
}
