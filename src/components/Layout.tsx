import React from 'react';
import { Sidebar } from './Sidebar';
import { TabManager } from './TabManager';
import { IdeModule } from '../types';

interface LayoutProps {
  modules: IdeModule[];
}

export const Layout: React.FC<LayoutProps> = ({ modules }) => {
  return (
    <div className="w-screen h-screen flex overflow-hidden bg-zinc-950 font-sans antialiased text-zinc-200">
      <Sidebar modules={modules} />
      <TabManager modules={modules} />
    </div>
  );
};
