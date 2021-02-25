import { ActionsUnion, ActionTypes } from "./home.action";
import DataState, { initializeState } from "./home.state";

export function dataReducer(state = initializeState, action: ActionsUnion) {
    switch (action.type) {
        case ActionTypes.LoadData:
            return {
                ...state,
            };
        case ActionTypes.LoadDataSuccess:
            return {
                ...state, data: action.payload
            };

        default: {
            return state;
        }
    }
}