import { createContext, useState } from "react";

const SidebarContext = createContext();

const SidebarProvicer = ({children}) => {
  const [isOpened, setIsOpended] = useState(true);

  return (
    <SidebarContext.Provider value={{ isOpened, setIsOpended }}>
      {children}
    </SidebarContext.Provider>
  )
}

export { SidebarContext, SidebarProvicer }