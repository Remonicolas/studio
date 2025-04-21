
"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  // Simulate login functionality
  const handleLogin = () => {
    router.push("/main");
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
    <div className="grid h-screen place-items-center">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle>Palermo Gym Hub</CardTitle>
          <CardDescription>Login to access your personalized gym experience.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" />
          </div>
          <Button onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}

