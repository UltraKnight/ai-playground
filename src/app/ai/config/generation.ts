export interface ModelConfig {
  provider: "google" | "openai";
  model: string;
  label: string;
}

export interface GenerationConfig {
  model: ModelConfig;
  temperature: number;
  topP: number;
  maxOutputTokens: number;
}

export const MODELS = {
  flash: {
    provider: "google",
    model: "gemini-2.5-flash",
    label: "Gemini 2.5 Flash",
  },
  pro: {
    provider: "google",
    model: "gemini-2.5-pro",
    label: "Gemini 2.5 Pro",
  },
} as const;

export const defaultGenerationConfig: GenerationConfig = {
  model: MODELS.flash,
  temperature: 0.7,
  topP: 1,
  maxOutputTokens: 2048,
};
