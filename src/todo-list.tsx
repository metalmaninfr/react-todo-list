import React from "react";
import { Form } from "./components/input";
import { Checkbox } from "./components/checkbox";

import { ContextTaskList } from "./context/taskList/index";

export const TodoList: React.FC = () => {
  const taskList = ContextTaskList.taskList();

  return (
    <div>
      <Form />
      {taskList.map((task) => (
        <Checkbox key={task.id} item={task} />
      ))}
    </div>
  )
}