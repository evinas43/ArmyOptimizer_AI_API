import OpenAI from "openai";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export const openaiService: AIService = {
  name: "OpenAI",

  async chat(messages: ChatMessage[]) {
    const response = await client.responses.create({
      model: "gpt-5.2",
      input: [
        {
          role: "system",
          content: context
        },
        ...messages.map(m => ({
          role: m.role,
          content: m.content
        }))
      ]
    });

    return response.output_text ?? "";
  }
};
