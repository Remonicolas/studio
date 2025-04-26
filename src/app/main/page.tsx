
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Grid } from "@/components/ui/grid";
import { useEffect } from "react";

export default function MainUserScreen() {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

    useEffect(() => {
        // Prevent caching of the page
        window.addEventListener('beforeunload', () => {
            // Reload the page from the server
            window.location.reload();
        });

        return () => {
            window.removeEventListener('beforeunload', () => {
                // Reload the page from the server
                window.location.reload();
            });
        };
    }, []);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className=" flex justify-center mt-4 text-lg text-white">MyGym -- Palermo</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Grid numColumns={2} gap={4}>
            <Button onClick={() => navigateTo("/class-reservations")}>Reservar clase</Button>
            <Button onClick={() => navigateTo("/payment-tracking")}>Paga tu cuota</Button>
            <Button onClick={() => navigateTo("/training-plans")}>Planes de entrenamiento</Button>
            <Button onClick={() => navigateTo("/physical-progress")}>Tu progreso fisico</Button>
            <Button onClick={() => navigateTo("/outdoor-classes")}>Novedades ! </Button>
            <Button onClick={() => navigateTo("/discounts-benefits")}>Descuentos / Beneficios</Button>
          </Grid>
          <div className="flex justify-center mt-4">
              <Button variant="destructive" onClick={() => router.push("/")}>
              Cerrar Sesión
              </Button>
        </div>
        </CardContent>
      </Card>
    </div>
  );
}
