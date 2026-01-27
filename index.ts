import { cerebrasService } from "./services/cerebras";
import { geminiService } from "./services/gemini";
import { groqService } from "./services/groq";
import { openaiService } from "./services/chatGPT";
import type { AIService, ChatMessage } from "./types";

const services: AIService[] = [
  groqService,
  cerebrasService,
  geminiService,
  openaiService
];

let currentServiceIndex = 0;

function getNextService() {
  const service = services[currentServiceIndex];
  currentServiceIndex = (currentServiceIndex + 1) % services.length;
  return service;
}


const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {

    const { pathname } = new URL(req.url)

    if (req.method === 'POST' && pathname === '/chat') {
      const { messages } = await req.json() as { messages: ChatMessage[] };
      const service = getNextService();

      console.log(`Using ${service?.name} service `)
      const stream = await service?.chat(messages)

      return new Response(stream, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response("Not found", { status: 404 });

  }
})
console.log(`Server running on port ${server.port} ⚡`)
