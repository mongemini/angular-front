import { Action } from "@ngrx/store";

export const LOGIN = "[Auth] Login";
export const LOGIN_SUCCESS = "[Auth] Login success";
export const LOGIN_FAIL = "[Auth] Login fail";

export const LOGOUT = "[Auth] Logout";
export const LOGOUT_SUCCESS = "[Auth] Logout success";
export const LOGOUT_FAIL = "[Auth] Logout fail";

export const GET_USER_DATA = "[Auth] Get user data.";

export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {}
}

export class GetUserData implements Action {
  readonly type = GET_USER_DATA;

  constructor(public payload: any) {}
}

export type Actions = Login | Logout | GetUserData;
