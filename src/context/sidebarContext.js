import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvicer = ({children}) => {
  const [isOpened, setIsOpened] = useState(false);

  // function to handle the opening of 

  return (
    <SidebarContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvicer }