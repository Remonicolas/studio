"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProgresoFisico() {
  const router = useRouter();
  const canvasRef = useRef(null);
  const [progreso, setProgreso] = useState(70);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar la barra de progreso
    ctx.fillStyle = "#4CAF50";
    ctx.fillRect(10, 50, (canvas.width - 20) * (progreso / 100), 20);

    // Texto de porcentaje
    ctx.fillStyle = "#fff";
    ctx.font = "16px Arial";
    ctx.fillText(`${progreso}% de progreso`, canvas.width / 2 - 50, 40);
  }, [progreso]);

  return (
    <div className="grid h-screen place-items-center p-4 bg-black">
      <Card className="w-full sm:w-[450px]">
        <CardHeader>
          <CardTitle className="text-white">Progreso Físico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 flex flex-col items-center text-white">
          <canvas
            ref={canvasRef}
            width="400"
            height="100"
            className="bg-gray-800 rounded-lg"
          />
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

