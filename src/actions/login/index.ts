import { LoginAction } from "./types";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = (): LoginAction => {
	return {
		type: LOGIN_REQUEST,
	};
};

export const loginSuccess = (user: any): LoginAction => {
	return {
		type: LOGIN_SUCCESS,
		payload: {
			user
		}
	};
};

export const loginError = (error: any): LoginAction => {
	return {
		type: LOGIN_ERROR,
		payload: {
			error
		}
	};
};

