import React from 'react';
import { useIde } from '../context/IdeContext';
import { IdeModule } from '../types';

interface TabManagerProps {
  modules: IdeModule[];
}

export const TabManager: React.FC<TabManagerProps> = ({ modules }) => {
  const { openTabs, activeTabId, setActiveTabId, closeTab } = useIde();

  const activeModule = modules.find((mod) => mod.id === activeTabId);
  const ActiveComponent = activeModule ? activeModule.component : null;

  return (
    <div className="flex-1 flex flex-col min-w-0 bg-zinc-950 text-zinc-100">
      <div className="h-11 bg-zinc-900 border-b border-zinc-800 flex items-end overflow-x-auto scrollbar-none select-none">
        {openTabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <div
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`group flex items-center space-x-2 px-4 h-9 text-sm cursor-pointer border-r border-zinc-800 transition-colors duration-150 ${
                isActive
                  ? 'bg-zinc-950 text-amber-500 border-t-2 border-t-amber-500 font-medium'
                  : 'bg-zinc-900/60 text-zinc-500 hover:bg-zinc-800/40 hover:text-zinc-300'
              }`}
            >
              <span className="truncate">{tab.title}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeTab(tab.id);
                }}
                className="text-zinc-600 hover:text-zinc-300 rounded p-0.5 transition-colors"
              >
                ?
              </button>
            </div>
          );
        })}
      </div>

      <div className="flex-1 overflow-hidden relative">
        {ActiveComponent ? (
          <div className="w-full h-full p-6 overflow-y-auto block">
            <ActiveComponent />
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 space-y-2 p-4 text-center">
            <div className="text-4xl">???</div>
            <p className="text-sm font-medium text-zinc-500">MIGO IDE v2</p>
            <p className="text-xs max-w-xs text-zinc-600">
              Selecciona una función en el menú de la izquierda para desplegar las herramientas de asistencia.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
