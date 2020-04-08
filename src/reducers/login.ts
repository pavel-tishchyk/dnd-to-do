import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actions/login";
import { LoginAction } from "../actions/login/types";

const initialState = {
	isLoading: false,
	user: null,
	error: null
};

export type LoginState = {
	isLoading: boolean
	user: null | any
	error: null | any
} 

export default function (state = initialState, action: LoginAction): LoginState {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...state,
				isLoading: true,
				error: null
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload.user,
				isLoading: false
			};

		case LOGIN_ERROR:
			return {
				...state,
				error: action.payload.error,
				isLoading: false
			};

		default:
			return state;
	}
}
