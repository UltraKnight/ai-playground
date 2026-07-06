# Engineering Journal

---

## Sprint 1 — Backend Foundations

### Goal

Build the first AI endpoint capable of streaming responses.

### What I built

- Created a Next.js project.
- Configured the Google Gemini API.
- Implemented the `/api/chat` Route Handler.
- Streamed responses using the Vercel AI SDK.

### What I learned

- Route Handlers execute on the server.
- API keys should never reach the browser.
- The model is stateless.
- Streaming uses Server-Sent Events (SSE).

### Engineering Notes

- Keep Route Handlers small.
- The browser should never communicate directly with the LLM.
- The server owns authentication.

---

## Sprint 2 — Streaming Chat UI

### Goal

Build the first ChatGPT-like interface.

### What I built

- Connected the frontend using `useChat()`.
- Added message rendering.
- Added a reusable chat architecture.
- Implemented streaming responses.

### What I learned

- The AI SDK handles the streaming protocol.
- UI Messages are different from Model Messages.
- Streaming does not guarantee one token per event.
- Time To First Token (TTFT) is different from generation speed.

### Engineering Notes

- Keep components focused on a single responsibility.
- Separate presentation from AI logic.
- Design components for future extensibility.

---

# Sprint 3 — UX Polish

## Summary

This sprint focused on improving the overall chat experience without introducing unnecessary architectural complexity.

## Implemented

- GitHub Flavored Markdown
- Auto-scroll
- Chat bubbles
- Header
- Empty state
- Loading indicator

## Engineering Decisions

- Kept the current component architecture.
- Avoided premature abstractions.
- Deferred Copy Code Button until a better Markdown rendering strategy is implemented.
