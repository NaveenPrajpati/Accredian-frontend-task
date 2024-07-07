import React, { createContext, useState } from "react";

export const MyContext = createContext();
export default function Context({ children }) {
  const [open, setOpen] = useState(false);

  const value = {
    open,
    setOpen,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
