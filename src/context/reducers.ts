import combineReducers from "react-combine-reducers";

import {
  taskListReducer,
  initialState as taskListInitialState,
} from "../context/taskList/reducer";


const [contextReducer, initialState] = combineReducers({
  taskList: [taskListReducer, taskListInitialState],
});

export const ContextValues = { contextReducer, initialState };
