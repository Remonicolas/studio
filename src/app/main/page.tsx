
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
          <CardTitle className="text-lg">Welcome to Palermo Gym Hub</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Grid numColumns={2} gap={4}>
            <Button onClick={() => navigateTo("/class-reservations")}>Class Reservations</Button>
            <Button onClick={() => navigateTo("/payment-tracking")}>Payment Tracking</Button>
            <Button onClick={() => navigateTo("/training-plans")}>Training Plans</Button>
            <Button onClick={() => navigateTo("/physical-progress")}>Physical Progress</Button>
            <Button onClick={() => navigateTo("/outdoor-classes")}>Outdoor Classes</Button>
            <Button onClick={() => navigateTo("/discounts-benefits")}>Discounts / Benefits</Button>
             <Button variant="destructive" onClick={() => router.push("/")}>Logout</Button>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
