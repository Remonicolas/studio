"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";

export default function OutdoorClassesScreen() {
  const router = useRouter();

  useEffect(() => {
    // Prevent caching of the page
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
    <div className="grid h-screen place-items-center p-4">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-muted-foreground">Novedades del Gym</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Label className="text-muted-foreground text-center block">
            ¡Próximamente! Acá encontrarás las novedades del Gym.
          </Label>
          <Button variant="secondary" onClick={() => router.back()}>
            Volver Menu Principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
