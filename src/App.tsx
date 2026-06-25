import React from 'react';
import { IdeProvider } from './context/IdeContext';
import { Layout } from './components/Layout';
import { IdeModule } from './types';

import { FoodMapModule } from './modules/food-map';
import { SafeDocumentModule } from './modules/safe-docs';

const AVAILABLE_MODULES: IdeModule[] = [
  {
    id: 'food-map',
    title: 'Comedores y Albergues',
    icon: 'map',
    component: FoodMapModule,
  },
  {
    id: 'safe-docs',
    title: 'Mis Documentos',
    icon: 'lock',
    component: SafeDocumentModule,
  },
];

export default function App() {
  return (
    <IdeProvider>
      <Layout modules={AVAILABLE_MODULES} />
    </IdeProvider>
  );
}
