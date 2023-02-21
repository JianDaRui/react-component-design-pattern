import React, { useContext, createContext, useReducer } from "react";

const CustomizeContext = createContext(undefined);

function CustomizeProvider({ value, children }) {
  return (
    <CustomizeContext.Provider value={value}>
      {children}
    </CustomizeContext.Provider>
  )
}

function useCustomizeContext() {
  const context = useContext(CustomizeContext);
  if (!context) {
    throw new Error("context必须在Provider中使用！！");
  }
  return context;
}

function internalReducer({ count }, { type }) {
  switch (type) {
    case "Increment": {
      return {
        count: count + 1,
      };
    }
    default:
      break;
  }
}

function useCustomReducer({ initValue = 0 }, reducer = internalReducer) {
  const [{ count }, dispatch] = useReducer(reducer, { count: initValue });
  const handleIncrement = () => {
    dispatch({ type: "Increment" });
  };
  return {
    count,
    handleIncrement,
  };
}

export { CustomizeProvider, useCustomizeContext, useCustomReducer };
