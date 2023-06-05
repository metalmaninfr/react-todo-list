import { ReactNode, useReducer, FunctionComponent } from "react";
import { ContextStore } from "../models/context-store";

import { useCreateStrictContext } from "../hooks/use-strict-context";
import { ContextValues } from "./reducers";

interface ProviderProps {
  children: ReactNode;
}

interface IContextStore {
  state: ContextStore;
  dispatch: ({ type }: { type: string }) => void;
}

const [ContextProvider, useContext] = useCreateStrictContext<IContextStore>();

export const useStore = () => {
  return useContext();
};


export const StoreProvider: FunctionComponent<ProviderProps> = ({
  children,
}: ProviderProps) => {
  const [state, dispatch] = useReducer(
    ContextValues.contextReducer,
    ContextValues.initialState,
  );

  
  const value = { state, dispatch };
  
  return <ContextProvider value={value}>{children}</ ContextProvider>
}