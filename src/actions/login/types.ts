import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from ".";

interface LoginRequest {
  type: typeof LOGIN_REQUEST
}

interface LoginSuccess {
  type: typeof LOGIN_SUCCESS
  payload: {
    user: any
  }
}

interface LoginError {
  type: typeof LOGIN_ERROR
  payload: {
    error: any
  }
}

export type LoginAction = LoginRequest | LoginSuccess | LoginError