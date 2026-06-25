import React from 'react';

export const SafeDocumentModule: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-white">Mis Documentos (Caja Fuerte)</h2>
      <p className="text-zinc-400 text-sm">
        Custodia segura de documentación digitalizada para usuarios en situación de vulnerabilidad.
      </p>
      <div className="p-8 border-2 border-dashed border-zinc-800 rounded-lg flex flex-col items-center justify-center text-zinc-500">
        <span>?? Arrastra aquí los archivos escaneados (DNI, Tarjeta Sanitaria)</span>
      </div>
    </div>
  );
};
