"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// Progreso de cuerpo general
export default function PhysicalProgressScreen() {
  const router = useRouter();

  const [zone, setZone] = useState<string>("");

  // Manejo de progreso físico por área
  const handleZoneClick = (zone: string) => {
    setZone(zone);
  };

  return (
    <div className="grid h-screen place-items-center p-4 bg-gray-800">
      <Card className="w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle className="text-white">Progreso Físico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col items-center text-white">
          {/* Figura humana con áreas generales */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 400" className="w-full max-w-md">
            {/* Pecho y Espalda (Parte superior) */}
            <rect
              x="70"
              y="50"
              width="60"
              height="30"
              className="fill-blue-400 stroke-gray-600 stroke-2 hover:fill-blue-500 cursor-pointer transition-all duration-200"
              onClick={() => handleZoneClick("Parte Superior del Cuerpo")}
            />
            {/* Abdomen */}
            <rect
              x="80"
              y="90"
              width="40"
              height="50"
              className="fill-green-400 stroke-gray-600 stroke-2 hover:fill-green-500 cursor-pointer transition-all duration-200"
              onClick={() => handleZoneClick("Abdomen")}
            />
            {/* Pierna izquierda */}
            <rect
              x="75"
              y="150"
              width="20"
              height="80"
              className="fill-red-400 stroke-gray-600 stroke-2 hover:fill-red-500 cursor-pointer transition-all duration-200"
              onClick={() => handleZoneClick("Pierna Izquierda")}
            />
            {/* Pierna derecha */}
            <rect
              x="105"
              y="150"
              width="20"
              height="80"
              className="fill-red-400 stroke-gray-600 stroke-2 hover:fill-red-500 cursor-pointer transition-all duration-200"
              onClick={() => handleZoneClick("Pierna Derecha")}
            />
          </svg>

          {/* Mostrar el progreso en base a la zona seleccionada */}
          {zone && (
            <div className="mt-4 p-4 bg-gray-900 bg-opacity-75 rounded-lg shadow-md w-full text-center">
              <h2 className="text-xl font-semibold mb-2">{`Progreso en ${zone}`}</h2>
              <div className="space-y-2">
                <p>Ganancia de masa muscular: <span className="font-bold">10% (último mes)</span></p>
                <p>Reducción de grasa: <span className="font-bold">5% (último mes)</span></p>
                <p>Mejora en rendimiento de sentadillas: <span className="font-bold">+5 kg</span></p>
              </div>
            </div>
          )}

          <Button variant="secondary" onClick={() => router.back()} className="mt-4">
            Volver al Menú Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
