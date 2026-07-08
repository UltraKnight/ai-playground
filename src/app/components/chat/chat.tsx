"use client";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { ChatInput, MessageList, LoadingMessage } from ".";

export function Chat() {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col p-6">
      <header className="mb-6 border-b pb-4">
        {/* TODO: rename this to a meaningful name - initial idea: Forge */}
        <h1 className="text-2xl font-bold">Forge</h1>

        <p className="text-sm text-zinc-500">AI Developer Workspace</p>
      </header>

      <MessageList messages={messages} />

      {(status === "submitted" || status === "streaming") && <LoadingMessage />}

      <ChatInput
        disabled={status !== "ready" && status !== "error"}
        onSend={(text) => sendMessage({ text })}
      />
    </div>
  );
}
