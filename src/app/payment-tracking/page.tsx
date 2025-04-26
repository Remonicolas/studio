"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PlanesDePagoScreen() {
  const router = useRouter();
  const [planElegido, setPlanElegido] = useState<string | null>(null);
  const [pagoEnProceso, setPagoEnProceso] = useState<string | null>(null);

  const planes = [
    {
      titulo: "Plan Mensual",
      descripcion: "Un mes sin descuento",
    },
    {
      titulo: "Plan 3 Meses",
      descripcion: "Plan tri con 15% de descuento",
    },
    {
      titulo: "Plan 6 Meses",
      descripcion: "Pagás 6 meses y tenés 30% de descuento",
    },
    {
      titulo: "Plan 12 Meses",
      descripcion: "Con este plan obtenés 45% de descuento",
    },
  ];

  const mediosDePago = [
    "Cupón de pago",
    "Pago en efectivo en la sucursal",
    "Pago mediante billetera virtual",
    "Pago con transferencia",
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6 flex flex-col items-center gap-6 relative">
      <h1 className="text-2xl font-bold text-center">Elegí tu plan de entrenamiento</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
        {planes.map((plan, index) => (
          <Card
            key={index}
            onClick={() => setPlanElegido(plan.titulo)}
            className="bg-zinc-800 hover:bg-zinc-700 transition-all duration-200 cursor-pointer"
          >
            <CardContent className="p-4 text-center">
              <p className="text-lg font-semibold text-white">{plan.titulo}</p>
              <p className="text-sm text-gray-300">{plan.descripcion}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {planElegido && (
        <div className="text-center mt-4 w-full max-w-md">
          <p className="text-green-400 text-lg font-semibold">¡Elegiste el {planElegido}!</p>
          <p className="mt-2 text-white">Ahora seleccioná un medio de pago:</p>

          <div className="grid grid-cols-1 gap-3 mt-4">
            {mediosDePago.map((medio, index) => (
              <Button
                key={index}
                variant="secondary"
                className="bg-zinc-700 hover:bg-zinc-600 text-white"
                onClick={() => setPagoEnProceso(medio)}
              >
                {medio}
              </Button>
            ))}
          </div>
        </div>
      )}

      <Button
        onClick={() => router.back()}
        className="mt-8 bg-zinc-700 hover:bg-zinc-600 text-white"
      >
        Volver al menú anterior
      </Button>

      {pagoEnProceso && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={() => setPagoEnProceso(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 text-white p-6 rounded-lg shadow-lg text-center max-w-xs"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-semibold mb-2">Procesando medio de pago...</p>
            <p className="text-sm text-gray-300">{pagoEnProceso}</p>
            <p className="mt-4 text-xs text-gray-400">Tocá fuera para cerrar</p>
          </div>
        </div>
      )}
    </div>
  );
}

