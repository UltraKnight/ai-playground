export type AIErrorCode =
  | "missing_api_key"
  | "invalid_api_key"
  | "quota_exceeded"
  | "unsupported_model"
  | "unknown";

export interface AIError {
  code: AIErrorCode;
  message: string;
}

const PREFIX = "__FORGE_ERROR__:";

export function serializeAIError(error: AIError): string {
  return `${PREFIX}${JSON.stringify(error)}`;
}

export function deserializeAIError(message: string): AIError | null {
  if (!message.startsWith(PREFIX)) {
    return null;
  }

  try {
    return JSON.parse(message.slice(PREFIX.length));
  } catch {
    return null;
  }
}

export function normalizeAIError(error: unknown): AIError {
  console.debug("normalizeAIError", error);

  if (!(error instanceof Error)) {
    return {
      code: "unknown",
      message: "An unexpected error occurred.",
    };
  }

  switch (error.name) {
    case "AI_LoadAPIKeyError":
      return {
        code: "missing_api_key",
        message:
          "No API key was found. Configure a valid api key such as GOOGLE_GENERATIVE_AI_API_KEY.",
      };
  }

  const message = error.message.toLowerCase();

  if (message.includes("api key not valid")) {
    return {
      code: "invalid_api_key",
      message: "The configured API key is invalid.",
    };
  }

  if (message.includes("quota exceeded")) {
    return {
      code: "quota_exceeded",
      message:
        "Quota exceeded for the selected model. Try another model or wait until your quota resets.",
    };
  }

  if (message.includes("model")) {
    return {
      code: "unsupported_model",
      message: "The selected model is not available.",
    };
  }

  return {
    code: "unknown",
    message: error.message,
  };
}
