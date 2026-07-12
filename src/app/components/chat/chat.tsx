"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ChatInput, GenerationSettings, MessageList, LoadingMessage } from ".";
import { defaultGenerationConfig, ModelConfig } from "@/ai/config/generation";
import { useState } from "react";
import { AIError, deserializeAIError } from "@/ai/errors";

export function Chat() {
  const [generationConfig, setGenerationConfig] = useState(
    defaultGenerationConfig,
  );

  const [modelStatus, setModelStatus] = useState<
    | "unknown"
    | "available"
    | "quota_exceeded"
    | "invalid_api_key"
    | "missing_api_key"
  >("unknown");

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
      body: {
        generationConfig,
      },
    }),
  });

  const aiError = error
    ? (deserializeAIError(error.message) ?? {
        code: "unknown",
        message: error.message,
      })
    : null;

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-6">
      <header className="mb-6 border-b pb-4">
        <details>
          <summary>Generation Settings</summary>

          <GenerationSettings
            value={generationConfig}
            aiError={aiError}
            onChange={setGenerationConfig}
          />
        </details>

        {/* TODO: rename this to a meaningful name - initial idea: Forge */}
        <h1 className="text-2xl font-bold">Forge</h1>

        <p className="text-sm text-zinc-500">AI Developer Workspace</p>
      </header>

      <MessageList messages={messages} />

      {(status === "submitted" || status === "streaming") && <LoadingMessage />}

      {aiError && (
        <div className="rounded border border-red-500 p-3 mb-2 text-sm">
          {aiError.message}
        </div>
      )}

      <ChatInput
        disabled={status !== "ready" && status !== "error"}
        onSend={(text) => sendMessage({ text })}
      />
    </div>
  );
}
