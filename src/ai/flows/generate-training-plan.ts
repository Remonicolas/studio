'use server';
/**
 * @fileOverview Generates personalized training plans based on user fitness goals and experience level.
 *
 * - generateTrainingPlan - A function that generates a training plan.
 * - GenerateTrainingPlanInput - The input type for the generateTrainingPlan function.
 * - GenerateTrainingPlanOutput - The return type for the generateTrainingPlan function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateTrainingPlanInputSchema = z.object({
  fitnessGoals: z
    .string()
    .describe('The fitness goals of the user (e.g., lose weight, build muscle, improve endurance).'),
  experienceLevel: z
    .enum(['beginner', 'intermediate', 'advanced'])
    .describe('The experience level of the user (beginner, intermediate, or advanced).'),
});
export type GenerateTrainingPlanInput = z.infer<typeof GenerateTrainingPlanInputSchema>;

const GenerateTrainingPlanOutputSchema = z.object({
  trainingPlan: z.string().describe('A personalized training plan based on the user input.'),
});
export type GenerateTrainingPlanOutput = z.infer<typeof GenerateTrainingPlanOutputSchema>;

export async function generateTrainingPlan(
  input: GenerateTrainingPlanInput
): Promise<GenerateTrainingPlanOutput> {
  return generateTrainingPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTrainingPlanPrompt',
  input: {
    schema: z.object({
      fitnessGoals: z
        .string()
        .describe('The fitness goals of the user (e.g., lose weight, build muscle, improve endurance).'),
      experienceLevel: z
        .enum(['beginner', 'intermediate', 'advanced'])
        .describe('The experience level of the user (beginner, intermediate, or advanced).'),
    }),
  },
  output: {
    schema: z.object({
      trainingPlan: z.string().describe('A personalized training plan based on the user input.'),
    }),
  },
  prompt: `You are a personal trainer who designs training plans for gym users.

  Based on their fitness goals and experience level, create a training plan for the user.

  Fitness Goals: {{{fitnessGoals}}}
  Experience Level: {{{experienceLevel}}}

  Training Plan: `,
});

const generateTrainingPlanFlow = ai.defineFlow<
  typeof GenerateTrainingPlanInputSchema,
  typeof GenerateTrainingPlanOutputSchema
>(
  {
    name: 'generateTrainingPlanFlow',
    inputSchema: GenerateTrainingPlanInputSchema,
    outputSchema: GenerateTrainingPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
