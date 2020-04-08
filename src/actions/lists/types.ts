import { ADD_LIST, EDIT_LIST, DELETE_LIST } from ".";
import { List } from "../../types";

interface AddList {
  type: typeof ADD_LIST
  payload: {
    list: List
  }
}

interface EditList {
  type: typeof EDIT_LIST
  payload: {
    list: List
  }
}

interface DeleteList {
  type: typeof DELETE_LIST
  payload: {
    listId: number
  }
}

export type ListAction = AddList | EditList | DeleteList;