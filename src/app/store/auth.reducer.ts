import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as auth from "./auth.action";

export interface AuthState {
  userId: string;
  roles: Array<string>;
}

const initialState: AuthState = {
  userId: "",
  roles: [],
};

export function reducer(state = initialState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.LOGOUT: {
      return initialState;
    }

    case auth.GET_USER_DATA: {
      return {
        ...state,
        userId: action.payload.sub,
        roles: Array.isArray(action.payload.role)
          ? action.payload.role
          : [action.payload.role],
      };
    }

    default: {
      return state;
    }
  }
}

export const selectAuthState = createFeatureSelector<AuthState>("auth");

export const selectRoles = createSelector(
  selectAuthState,
  (state: AuthState) => state.roles
);

export const selectUserId = createSelector(
  selectAuthState,
  (state: AuthState) => state.userId
);
