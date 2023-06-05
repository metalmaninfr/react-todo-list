import React from "react";


import { StoreProvider } from './context';
import { TodoList } from "./todo-list";


export const App: React.FC = () => {
  return (
    <div>
      <StoreProvider>
        <TodoList />
      </StoreProvider>
    </div>
  )
}