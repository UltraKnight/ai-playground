# Project State

Last Updated: 2026-07-05

## Current Sprint

Sprint 3.2 — UX Polish

Status:
- Not started

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
