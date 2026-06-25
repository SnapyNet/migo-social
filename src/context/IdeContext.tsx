import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Tab } from '../types';

interface IdeContextType {
  openTabs: Tab[];
  activeTabId: string | null;
  openTab: (id: string, title: string) => void;
  closeTab: (id: string) => void;
  setActiveTabId: (id: string) => void;
}

const IdeContext = createContext<IdeContextType | undefined>(undefined);

export const IdeProvider = ({ children }: { children: ReactNode }) => {
  const [openTabs, setOpenTabs] = useState<Tab[]>([]);
  const [activeTabId, setActiveTabId] = useState<string | null>(null);

  const openTab = (id: string, title: string) => {
    if (!openTabs.some((tab) => tab.id === id)) {
      setOpenTabs([...openTabs, { id, title }]);
    }
    setActiveTabId(id);
  };

  const closeTab = (id: string) => {
    const filteredTabs = openTabs.filter((tab) => tab.id !== id);
    setOpenTabs(filteredTabs);

    if (activeTabId === id) {
      if (filteredTabs.length > 0) {
        setActiveTabId(filteredTabs[filteredTabs.length - 1].id);
      } else {
        setActiveTabId(null);
      }
    }
  };

  return (
    <IdeContext.Provider value={{ openTabs, activeTabId, openTab, closeTab, setActiveTabId }}>
      {children}
    </IdeContext.Provider>
  );
};

export const useIde = () => {
  const context = useContext(IdeContext);
  if (!context) {
    throw new Error('useIde debe usarse dentro de un IdeProvider');
  }
  return context;
};