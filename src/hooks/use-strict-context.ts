import React from "react";

export function useCreateStrictContext<T>(
  options: {
    errorMessage?: string;
    name?: string;
  } = {},
) {
  const Context = React.createContext<T | undefined>(undefined);

  Context.displayName = options.name;

  function useContext() {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(
        options.errorMessage || `${options.name || ""} Context Provider is missing`,
      );
    }
    return context;
  }

  return [Context.Provider, useContext] as [React.Provider<T>, () => T];
}
