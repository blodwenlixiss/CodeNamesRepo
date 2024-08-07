import { createContext } from "react";

export const ContextProvider = createContext({
  users: [],
  createRoom: () => {},
});
