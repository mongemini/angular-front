import { Action } from "@ngrx/store";

export const LOAD_INFO = "[Info] Load info";
export const INFO_LOADED_SUCCESS = "[Info] Info loaded success";
export const INFO_LOADED_FAIL = "[Info] Info loaded fail";

export const GENERATION = "[Info] generation";
export const INCREMENT = "[Info] increment";

export class LoadInfo implements Action {
  readonly type = LOAD_INFO;
  constructor() {}
}

export class InfoLoadedSuccess implements Action {
  readonly type = INFO_LOADED_SUCCESS;
  constructor(public payload: Array<any>) {}
}

export class InfoLoadedFail implements Action {
  readonly type = INFO_LOADED_FAIL;
  constructor() {}
}

export class Generation implements Action {
  readonly type = GENERATION;
  constructor() {}
}

export class Increment implements Action {
  readonly type = INCREMENT;
  constructor() {}
}

export type Actions =
  | LoadInfo
  | InfoLoadedSuccess
  | InfoLoadedFail
  | Generation
  | Increment;
