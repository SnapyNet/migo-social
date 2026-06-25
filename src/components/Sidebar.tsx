import React from 'react';
import { useIde } from '../context/IdeContext';
import { IdeModule } from '../types';

interface SidebarProps {
  modules: IdeModule[];
}

export const Sidebar: React.FC<SidebarProps> = ({ modules }) => {
  const { openTab, activeTabId } = useIde();

  return (
    <aside className="w-64 bg-zinc-900 text-zinc-400 flex flex-col border-r border-zinc-800 select-none">
      <div className="p-4 uppercase text-xs font-semibold tracking-wider text-zinc-500 border-b border-zinc-800">
        MIGO - Explorador Social
      </div>

      <nav className="flex-1 p-2 space-y-1 overflow-y-auto">
        <div className="text-xs font-medium px-2 py-1 text-zinc-600 uppercase">
          Modulos Disponibles
        </div>
        {modules.map((mod) => {
          const isActive = activeTabId === mod.id;
          return (
            <button
              key={mod.id}
              onClick={() => openTab(mod.id, mod.title)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded text-sm transition-colors duration-150 text-left ${
                isActive
                  ? 'bg-zinc-800 text-white font-medium border-l-2 border-amber-500'
                  : 'hover:bg-zinc-800/50 hover:text-zinc-200'
              }`}
            >
              <span className="text-xs text-zinc-500">📂</span>
              <span className="truncate">{mod.title}</span>
            </button>
          );
        })}
      </nav>

      <div className="p-3 text-xs bg-zinc-950 text-zinc-600 border-t border-zinc-900 text-center">
        v2.0.0 - Santa Anna
      </div>
    </aside>
  );
};