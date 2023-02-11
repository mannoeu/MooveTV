import React, { createContext, useContext, useEffect, useReducer } from "react";

import light from "../global/themes/light";
import dark from "../global/themes/dark";

const StoreContext = createContext();

const initialState = {
  theme: JSON.parse(localStorage.getItem("theme")) ?? dark,
};

const reducer = (state, action) => {
  const mappedAction = {
    GET_THEME: state,
    TOGGLE_THEME: {
      theme: state.theme.title === "light" ? dark : light,
    },
  };

  return mappedAction[action.type] || state;
};

export default function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(state.theme));
  }, [state.theme]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
export const useStore = () => useContext(StoreContext);
