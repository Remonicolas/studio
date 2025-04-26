"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { generateTrainingPlan } from "@/ai/flows/generate-training-plan";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function TrainingPlansScreen() {
  const router = useRouter();
  const [trainingPlan, setTrainingPlan] = useState<string | null>(null);
  const [fitnessGoals, setFitnessGoals] = useState("");
  const [experienceLevel, setExperienceLevel] = useState<
    "beginner" | "intermediate" | "advanced"
  >("beginner");

  const handleGenerateTrainingPlan = async () => {
    const input = {
      fitnessGoals: fitnessGoals,
      experienceLevel: experienceLevel,
    };
    const result = await generateTrainingPlan(input);
    setTrainingPlan(result?.trainingPlan || "No se pudo generar el plan.");
  };

  useEffect(() => {
    const reloadPage = () => {
      window.location.reload();
    };

    window.addEventListener("beforeunload", reloadPage);

    return () => {
      window.removeEventListener("beforeunload", reloadPage);
    };
  }, []);

  return (
    <div className="min-h-screen grid place-items-center px-4 bg-black text-white">
      <Card className="w-full max-w-md shadow-lg bg-zinc-900 text-white">
        <CardHeader>
          <CardTitle className="text-white text-center">
            Planes de entrenamiento con IA
          </CardTitle>
          <CardDescription className="text-gray-300 text-center">
            Personaliza tu plan de entrenamiento con IA
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="fitnessGoals" className="text-white">
              Describí tus objetivos físicos
            </Label>
            <Textarea
              id="fitnessGoals"
              className="bg-zinc-800 text-white placeholder:text-gray-400"
              placeholder="La Inteligencia Artificial te dará el mejor plan según tus preferencias"
              value={fitnessGoals}
              onChange={(e) => setFitnessGoals(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label className="text-white">Nivel de entrenamiento</Label>
            <select
              className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-800 text-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={experienceLevel}
              onChange={(e) =>
                setExperienceLevel(
                  e.target.value as "beginner" | "intermediate" | "advanced"
                )
              }
            >
              <option value="beginner">Principiante</option>
              <option value="intermediate">Intermedio</option>
              <option value="advanced">Profesional</option>
            </select>
          </div>
          <Button onClick={handleGenerateTrainingPlan}>
            Generar Plan de Entrenamiento
          </Button>
          {trainingPlan && (
            <div className="mt-4">
              <Label className="text-white">Plan sugerido:</Label>
              <p className="whitespace-pre-line text-gray-200">
                {trainingPlan}
              </p>
            </div>
          )}
          <Button variant="secondary" onClick={() => router.back()}>
            Volver al menú principal
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
