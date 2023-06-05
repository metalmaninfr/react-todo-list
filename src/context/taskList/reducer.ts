import { ActionType, getType } from "typesafe-actions";
import { produce } from "immer";
import { Actions } from "./actions";
import { ITaskList } from "../../models/taskList";

export interface TaskListState {
  taskList: ITaskList[];
}

export const initialState: TaskListState = {
  taskList: [
    {id: 1, text: "hello world 1", checked: false },
    {id: 2, text: "hello world 2", checked: true },
    {id: 3, text: "hello world 3", checked: true },
  ],
};

export type TaskListAction = ActionType<typeof Actions.addToList> | ActionType<typeof Actions.removeFromList>;

export const taskListReducer = (
  state: TaskListState = initialState,
  action: TaskListAction,
): TaskListState => {
  return produce(state, draft => {
    switch (action.type) {
      case getType(Actions.addToList):

        const newId = (): number => {
          if (draft.taskList.length) {
            return draft.taskList[draft.taskList.length - 1].id + 1;
          } else {
            return 0;
          }
        };

        draft.taskList = [ 
          ...draft.taskList,
            {
              id: newId(),
              text: action.payload,
              checked: false
            }
        ];
        break;
      case getType(Actions.removeFromList):
        draft.taskList = draft.taskList.filter(({ id }) => id !== action.payload);
        break;
      default:
        return state;
    }
  });
};
