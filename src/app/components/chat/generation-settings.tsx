"use client";

import { GenerationConfig, ModelConfig, MODELS } from "@/ai/config/generation";
import { AIError } from "@/ai/errors";

type Props = {
  value: GenerationConfig;
  aiError: AIError | null;
  onChange: (config: GenerationConfig) => void;
};

export function GenerationSettings({ value, aiError, onChange }: Props) {
  function getModelError(
    model: ModelConfig,
    selectedModel: ModelConfig,
    aiError: AIError | null,
  ): AIError | null {
    if (!aiError) {
      return null;
    }

    if (model.model !== selectedModel.model) {
      return null;
    }

    return aiError;
  }

  return (
    <div className="mb-4 rounded-lg border p-4">
      <h2 className="mb-4 text-sm font-semibold">Generation Settings</h2>

      <label>
        <div>Model</div>

        <select
          value={`${value.model.provider}:${value.model.model}`}
          onChange={(e) => {
            const model = Object.values(MODELS).find(
              (m) => `${m.provider}:${m.model}` === e.target.value,
            );

            if (model) {
              onChange({
                ...value,
                model,
              });
            }
          }}
        >
          {Object.values(MODELS).map((model) => {
            const modelError = getModelError(model, value.model, aiError);

            return (
              <option
                key={model.model}
                value={`${model.provider}:${model.model}`}
                className="bg-background text-foreground"
              >
                {model.label}
                {modelError ? ` (${modelError.message})` : ""}
              </option>
            );
          })}
        </select>
      </label>

      <div className="space-y-4">
        <label className="block">
          <div className="mb-1 flex justify-between text-sm">
            <span>Temperature</span>
            <span>{value.temperature.toFixed(1)}</span>
          </div>

          <input
            className="w-full"
            type="range"
            min={0}
            max={2}
            step={0.1}
            value={value.temperature}
            onChange={(e) =>
              onChange({
                ...value,
                temperature: Number(e.target.value),
              })
            }
          />
        </label>

        <label className="block">
          <div className="mb-1 flex justify-between text-sm">
            <span>Top P</span>
            <span>{value.topP.toFixed(2)}</span>
          </div>

          <input
            className="w-full"
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={value.topP}
            onChange={(e) =>
              onChange({
                ...value,
                topP: Number(e.target.value),
              })
            }
          />
        </label>

        <label className="block">
          <div className="mb-1 text-sm">Max Output Tokens</div>

          <input
            className="w-full rounded border p-2"
            type="number"
            min={1}
            max={8192}
            value={value.maxOutputTokens}
            onChange={(e) =>
              onChange({
                ...value,
                maxOutputTokens: Number(e.target.value),
              })
            }
          />
        </label>
      </div>
    </div>
  );
}
