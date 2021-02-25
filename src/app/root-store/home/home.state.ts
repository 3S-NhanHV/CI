import DataModel from "./home.model";

export default class DataState {
    data: Array<DataModel>;
}
export const initializeState: DataState = {
    data: [
        { userId: 123, title: "test", id: 25 }
    ]
};