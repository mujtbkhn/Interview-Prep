import { useContext } from "react";
import { createContext } from "react";

export const countContext = createContext(null);

export const Provider = countContext.Provider;

export const useCount = () => {
  return useContext(countContext);
};
