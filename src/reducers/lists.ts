import { List } from "../types";
import { ADD_LIST, EDIT_LIST, DELETE_LIST } from "../actions/lists";
import { ListAction } from "../actions/lists/types";
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


const getLists = (tasksCount: number) => {
	const lists: any = [];

	for(let i = 0; i < tasksCount; i++) {
		lists.push({
			id: i,
			title: lorem.generateWords(2),
			description: lorem.generateWords(5),
			date: new Date(random(1000000000)).toJSON(),
			tasksCount: random(20),
			completedCount: random(7),
			ongoingCount: random(10),
		})
	}

	return lists;
}

const initialState = {
	isLoading: false,
	listsData: getLists(6),
	error: null
};

export type ListsState = {
	isLoading: boolean
	listsData: Array<List>
	error: any | null
} 

export default function (state: ListsState = initialState, action: ListAction): ListsState {
	switch (action.type) {
		case ADD_LIST:
			return {
				...state,
				isLoading: false,
				listsData: [ ...state.listsData, action.payload.list],
				error: null
			};
		
		case EDIT_LIST: 
			return {
				...state,
				isLoading: false,
				error: null,
				listsData: state.listsData.map((list: List) => (
					list.id === action.payload.list.id 
						? action.payload.list
						: list 
				))
			}
		
		case DELETE_LIST: 
			return {
				...state,
				isLoading: false,
				error: null,
				listsData: state.listsData.filter((list: List) => (
					list.id !== action.payload.listId
				))
			}

		default:
			return state;
	}
}
