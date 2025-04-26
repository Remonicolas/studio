"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/main");
  };

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
    <div className="min-h-screen grid place-items-center px-4 bg-black">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-white text-center">MyGym</CardTitle>
          <CardDescription className="text-sm text-white text-center">
            Accede a la experiencia personalizada de nuestra App
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Ingresa tu email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Ingresa tu password" />
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}

