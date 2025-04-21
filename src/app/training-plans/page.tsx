
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateTrainingPlan } from "@/ai/flows/generate-training-plan";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEffect } from "react";

export default function TrainingPlansScreen() {
  const router = useRouter();
  const [trainingPlan, setTrainingPlan] = useState<string | null>(null);
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const handleGenerateTrainingPlan = async () => {
    const input = {
      fitnessGoals: fitnessGoals,
      experienceLevel: experienceLevel,
    };
    const result = await generateTrainingPlan(input);
    setTrainingPlan(result?.trainingPlan || "Failed to generate training plan.");
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
          <CardTitle>Training Plans</CardTitle>
          <CardDescription>Get personalized training plan suggestions.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fitnessGoals">Fitness Goals</Label>
            <Textarea
              id="fitnessGoals"
              placeholder="Enter your fitness goals (e.g., lose weight, build muscle)"
              value={fitnessGoals}
              onChange={(e) => setFitnessGoals(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label>Experience Level</Label>
            <select
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={experienceLevel}
              onChange={(e) => setExperienceLevel(e.target.value as "beginner" | "intermediate" | "advanced")}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <Button onClick={handleGenerateTrainingPlan}>Generate Training Plan</Button>
          {trainingPlan && (
            <div className="mt-4">
              <Label>Suggested Training Plan:</Label>
              <p className="whitespace-pre-line">{trainingPlan}</p>
            </div>
          )}
          <Button variant="secondary" onClick={() => router.back()}>Go Back</Button>
        </CardContent>
      </Card>
    </div>
  );
}
