import { createFeatureSelector, createSelector } from "@ngrx/store";
import DataState from "./home.state";

const getListDataFeatureState = createFeatureSelector<DataState>('listData');
export const getListData = createSelector(
    getListDataFeatureState,
    state => {
        return state.data
    }
);