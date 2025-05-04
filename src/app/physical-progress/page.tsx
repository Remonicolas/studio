"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export default function ProgresoFisico() {
  const router = useRouter();

  const [progreso, setProgreso] = useState(70); // Este es un ejemplo de progreso, puedes cambiarlo dinámicamente.

  // Función para calcular el progreso y mostrarlo en un gráfico de barras.
  const renderChart = () => {
    const canvas = document.getElementById("myChart");
    const ctx = canvas.getContext("2d");

    // Limpiar el canvas antes de dibujar el nuevo gráfico
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar barra de progreso
    ctx.fillStyle = "#4CAF50"; // Color verde para el progreso
    ctx.fillRect(10, 50, (canvas.width - 20) * (progreso / 100), 20);

    // Agregar texto de porcentaje
    ctx.fillStyle = "#fff"; // Color blanco para el texto
    ctx.font = "16px Arial";
    ctx.fillText(`${progreso}% de progreso`, canvas.width / 2 - 50, 40);
  };

  // Ejecutamos el renderizado del gráfico al cargar el componente
  React.useEffect(() => {
    renderChart();
  }, [progreso]);

  return (
    <div className="grid h-screen place-items-center p-4 bg-black">
      <Card className="w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle className="text-white">Progreso Físico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col items-center text-white">
          <div className="space-y-4">
            {/* Canvas para el gráfico de barras */}
            <canvas
              id="myChart"
              width="400"
              height="100"
              className="bg-gray-800 rounded-lg"
            ></canvas>
          </div>

          <div className="mt-4 p-4 bg-gray-900 bg-opacity-75 rounded-lg shadow-md w-full text-center">
            <h2 className="text-xl font-semibold mb-2">Meta: Aumento de masa muscular</h2>
            <p>Progreso: <span className="font-bold">{progreso}% (último mes)</span></p>
          </div>

          <Button variant="secondary" onClick={() => router.back()} className="mt-4">
            Volver al Menú Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

