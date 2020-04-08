import { ListAction } from "./types";
import { List } from "../../types";

export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';

export const addList = (list: List): ListAction => {
	return {
		type: ADD_LIST,
		payload: {
			list
		}
	};
};

export const editList = (list: List): ListAction => {
	return {
		type: EDIT_LIST,
		payload: {
			list
		}
	};
};

export const deleteList = (listId: number): ListAction => {
	return {
		type: DELETE_LIST,
		payload: {
			listId
		}
	};
};
