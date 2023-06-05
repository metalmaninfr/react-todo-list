import { createAction } from "typesafe-actions";

export const Actions = {
  addToList: createAction("app/task-list/set")<string>(),
  removeFromList: createAction("app/task-list/remove")<number>(),
};
