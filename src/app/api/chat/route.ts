import {
  defaultGenerationConfig,
  GenerationConfig,
} from "@/ai/config/generation";
import { composePrompt } from "@/ai/prompts";
import { getLanguageModel } from "@/ai/providers";
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  UIMessage,
} from "ai";
import { normalizeAIError, serializeAIError } from "@/ai/errors";

interface ChatRequest {
  messages: UIMessage[];
  generationConfig?: Partial<GenerationConfig>;
}

export async function POST(req: Request) {
  const { messages, generationConfig }: ChatRequest = await req.json();
  const config: GenerationConfig = {
    ...defaultGenerationConfig,
    ...generationConfig,
    model: {
      ...defaultGenerationConfig.model,
      ...generationConfig?.model,
    },
  };

  const { model, ...options } = config;

  const result = streamText({
    ...options,
    model: getLanguageModel(model),
    system: composePrompt(),
    messages: await convertToModelMessages(messages),
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({
      stream: result.stream,
      onError: (error) => {
        return serializeAIError(normalizeAIError(error));
      },
    }),
  });
}
