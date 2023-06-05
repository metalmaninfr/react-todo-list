import { useStore } from "../../context";
import { Actions } from "./actions";
import { taskListReducer, initialState } from "./reducer";

function useAddToList() {
  const { dispatch } = useStore();
  return (text: string) => dispatch(Actions.addToList(text));
}

function useTaskList() {
  const { state } = useStore();
  console.log(state);
  return state.taskList.taskList;
}

function useRemoveFromList() {
  const { dispatch } = useStore();
  return (id: number) => dispatch(Actions.removeFromList(id));
}

export const ContextTaskList = {
  addToList: useAddToList,
  removeFromList: useRemoveFromList,
  taskList: useTaskList,
  initialState: initialState,
  reducer: taskListReducer,
};
