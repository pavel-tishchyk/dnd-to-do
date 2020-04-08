import { ThunkAction } from "redux-thunk";
import { State } from "../store";
import { LoginAction } from "../actions/login/types";
import { loginData } from "../types";
import { loginRequest } from "../actions/login";

export const login = (formData: loginData): ThunkAction<void, State, unknown, LoginAction> => 
  async (dispatch) => {
    dispatch(loginRequest) 
  }