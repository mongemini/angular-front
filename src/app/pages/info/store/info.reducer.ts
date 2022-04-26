import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as info from "./info.action";

export interface InfoState {
  info: Array<any>;
  count: number;
}

const initialState: InfoState = {
  info: [],
  count: 0,
};

export function reducer(state = initialState, action: info.Actions): InfoState {
  switch (action.type) {
    case info.INFO_LOADED_SUCCESS: {
      const info = action.payload;
      return {
        ...state,
        info,
      };
    }

    case info.INFO_LOADED_FAIL: {
      return {
        ...state,
        info: [],
      };
    }

    case info.INCREMENT: {
      var newCount = state.count;
      return {
        ...state,
        count: ++newCount,
      };
    }

    default: {
      return state;
    }
  }
}

export const selectInfoState = createFeatureSelector<InfoState>("info");

export const selectInfo = createSelector(
  selectInfoState,
  (state: InfoState) => state.info
);

export const selectCount = createSelector(
  selectInfoState,
  (state: InfoState) => state.count
);
