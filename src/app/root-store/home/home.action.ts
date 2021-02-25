import { Action } from "@ngrx/store";
import DataModel from "./home.model";

export enum ActionTypes {
    LoadData = "[Assets API] Load success",
    LoadDataByID = "[Assets API] Load API By ID",
    LoadDataByIDSuccess = "[Assets API] Load API By ID success",
    LoadDataSuccess = "[Assets API] Load API success",
    LoadDataFailure = "[Assets API] Load failure",
    HandleLoading = "[Loading] Begin",
    CLoseLoading = "[CLoseLoading] ",
    ShowLoading = "[ShowLoading] ",
}
export class HandleLoading implements Action {
    readonly type = ActionTypes.HandleLoading;
    constructor() { }
}
export class ShowLoading implements Action {
    readonly type = ActionTypes.ShowLoading;
    constructor() { }
}
export class CLoseLoading implements Action {
    readonly type = ActionTypes.CLoseLoading;
    constructor() { }
}
export class LoadData implements Action {
    readonly type = ActionTypes.LoadData;
    constructor() { }
}
export class LoadDataByID implements Action {
    readonly type = ActionTypes.LoadDataByID;
    constructor(public payload) { }
}
export class LoadDataByIDSuccess implements Action {
    readonly type = ActionTypes.LoadDataByIDSuccess;
    constructor(public payload) { }
}
export class LoadDataSuccess implements Action {
    readonly type = ActionTypes.LoadDataSuccess;
    constructor(public payload) { }
}

export class LoadDataFailure implements Action {
    readonly type = ActionTypes.LoadDataFailure;
    constructor(public payload) { }
}
export type ActionsUnion =
    | LoadData
    | LoadDataByID
    | LoadDataByIDSuccess
    | LoadDataSuccess
    | LoadDataFailure
    | HandleLoading
    | CLoseLoading
    | ShowLoading
    ;