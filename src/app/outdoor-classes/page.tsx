"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Image from "next/image";

export default function GymQRScreen() {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.location.reload();
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        window.location.reload();
      });
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4 py-8 text-center">
      <h1 className="text-green-400 text-xl md:text-2xl font-semibold mb-2">Plan X 3</h1>
      <p className="text-green-400 text-base md:text-lg mb-6">Vencimiento del plan: 30/7/2025</p>

      <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] mb-8">
        <Image
          src="/qr_mygym_youtube.png"
          alt="Código QR de acceso"
          width={300}
          height={300}
          className="w-full h-full object-contain"
          priority // hace que el QR cargue rápido
        />
      </div>

      <Button variant="secondary" onClick={() => router.back()}>
        Volver al menú principal
      </Button>
    </div>
  );
}

