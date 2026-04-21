import Cerebras from "@cerebras/cerebras_cloud_sdk";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const cerebras = new Cerebras({
  apiKey: process.env.CEREBRAS_API_KEY
});

export const cerebrasService: AIService = {
  name: "Cerebras",

  async chat(messages: ChatMessage[]) {
    const completion = await cerebras.chat.completions.create({
      model: "llama3.1-8b",
      max_completion_tokens: 40960,
      temperature: 0.6,
      top_p: 0.95,
      messages: [
        { role: "system", content: context },
        ...messages
      ] as any
    });

    return (completion as any).choices?.[0]?.message?.content ?? "";
  }
};
