"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiscountsBenefitsScreen() {
  const router = useRouter();

  return (
    <div className="grid h-screen place-items-center bg-gray-800 p-4">
      <Card className="w-full max-w-4xl bg-gray-900 text-white shadow-xl rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-semibold text-blue-400">
            Beneficios y Descuentos para Clientes
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-blue-300">¡Refiere a un amigo!</h2>
            <p className="text-gray-300">
              Por cada amigo que refieras y se inscriba en el gimnasio, ambos obtendrán un 15% de descuento en su siguiente mes de membresía.
            </p>
            <Button variant="primary" className="w-full">
              Referir un Amigo
            </Button>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-blue-300">Membresía Anual</h2>
            <p className="text-gray-300">
              Si adquieres una membresía anual, recibirás 2 meses adicionales ¡totalmente gratis!
            </p>
            <Button variant="secondary" className="w-full">
              Adquirir Membresía Anual
            </Button>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-blue-300">Descuento en Productos</h2>
            <p className="text-gray-300">
              Todos los miembros tienen un 10% de descuento en nuestra tienda de suplementos y productos deportivos.
            </p>
            <Button variant="secondary" className="w-full">
              Comprar Productos
            </Button>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-medium text-blue-300">Promoción de Cumpleaños</h2>
            <p className="text-gray-300">
              ¡Celebra tu cumpleaños con nosotros! Obtén un 20% de descuento en tu próxima membresía o clase personalizada.
            </p>
            <Button variant="secondary" className="w-full">
              Obtener Descuento de Cumpleaños
            </Button>
          </section>

          {/* Testimonios */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-blue-300">Testimonios de Clientes</h2>
            <div className="space-y-2 text-gray-300">
              <p>"¡Me encantó el programa de referidos! Ahora disfruto de un descuento y mi amigo también." - Juan</p>
              <p>"La membresía anual es la mejor inversión, los dos meses gratis son geniales." - Laura</p>
            </div>
          </section>
        </CardContent>

        <Button variant="secondary" onClick={() => router.back()} className="w-full mt-4">
          Volver al Menú Principal
        </Button>
      </Card>
    </div>
  );
}
