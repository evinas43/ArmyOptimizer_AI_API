import { Groq } from "groq-sdk";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

export const groqService: AIService = {
  name: "Groq",

  async chat(messages: ChatMessage[]) {
    const completion = await groq.chat.completions.create({
      model: "moonshotai/kimi-k2-instruct-0905",
      temperature: 0.6,
      max_completion_tokens: 4096,
      messages: [
        { role: "system", content: context },
        ...messages
      ]
    });

    return completion.choices[0]?.message?.content ?? "";
  }
};
