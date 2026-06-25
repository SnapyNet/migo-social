import React from 'react';

export const FoodMapModule: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Comedores y Albergues</h2>
      <p className="text-zinc-400 text-sm">
        Listado en tiempo real de recursos disponibles coordinados con el Hospital de Campanya de Santa Anna.
      </p>
      <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
        <p className="text-amber-500 font-medium">Hospital de Campanya Santa Anna</p>
        <p className="text-xs text-zinc-500">Calle de Santa Anna, 29, Barcelona</p>
        <div className="mt-2 text-xs inline-block bg-emerald-950 text-emerald-400 px-2 py-1 rounded">
          ?? Comedor Abierto - Servicio de Almuerzo
        </div>
      </div>
    </div>
  );
};
