
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function OutdoorClassesScreen() {
  const router = useRouter();
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
    <div className="grid h-screen place-items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Outdoor Classes</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Simulated Outdoor Classes Screen</p>
          <Button onClick={() => router.back()}>Go Back</Button>
        </CardContent>
      </Card>
    </div>
  );
}
