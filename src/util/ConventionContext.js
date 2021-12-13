import { createContext, useState } from "react";

export const ConvetionContext = createContext();

export const ConvetionContextProvider = ({ children }) => {
  const [text, setText] = useState("Hello Navod");

  const contextValue = {
    text,
    setText,
  };
  return (
    <ConvetionContext.Provider value={contextValue}>
      {children}
    </ConvetionContext.Provider>
  );
};
