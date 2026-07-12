# Project State

Last Updated: 2026-07-07

## Completed

### Sprint 1
- Next.js
- Gemini
- Route Handler
- Streaming API

### Sprint 2
- useChat()
- Chat components
- Streaming UI
- Markdown rendering
- Syntax highlighting

### Sprint 3 — UX Polish
- GitHub Flavored Markdown
- Auto-scroll
- Chat bubbles
- Header
- Empty state
- Loading indicator

### Sprint 4 — Prompt Engineering
- Introduced provider-agnostic prompt architecture.
- Added reusable system prompt.
- Added prompt presets.
- Added dynamic prompt composition.
- Decoupled prompt logic from the API route.
- Centralized generation configuration
- Provider abstraction
- Temperature
- Top-P
- Max Output Tokens
- Model selection
- Provider-agnostic generation configuration
- AI error normalization
- Friendly provider error messages

The Prompt Inspector was postponed to the AI Observability sprint, where it can expose prompts, context, RAG retrievals, tool calls, MCP interactions, latency and token usage from a single debugging interface.

## Current Sprint

Sprint 5

## Current Architecture

Browser

↓

Chat

↓

useChat

↓

DefaultChatTransport

↓

/api/chat

↓

Gemini

## Next Tasks

### Prompt Engineering

- System prompts
- Prompt organization
- Prompt presets
- Prompt engineering fundamentals
- Provider-agnostic prompt architecture

## Decisions

- Use Gemini during development.
- AI SDK as transport layer.
- Never render raw HTML.
- Provider-agnostic architecture.
- Keep the chat architecture simple.
- Avoid premature abstractions.

## Pending Refactors

None

## Known Issues

- No syntax theme customization
- Copy code button not implemented yet.

## Current Branch

main
