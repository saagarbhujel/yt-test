

import React, { createContext, useState } from "react";
import type { SectionName } from "../components/constants/types";

type ActiveSectionContextProps = {
  children: React.ReactNode;
};
type ActiveSectionContextProviderProps = {
  active: SectionName;
  setActive: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext =
  createContext<ActiveSectionContextProviderProps | null>(null);

function ActiveSectionContextProvider({ children }: ActiveSectionContextProps) {
  const [active, setActive] = useState<SectionName>("Home");

  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        active,
        setActive,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export default ActiveSectionContextProvider;

//custom hook for using active section context
export function useActiveSectionContext() {
  const context = React.useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within a ActiveSectionContextProvider"
    );
  }
  return context;
}
