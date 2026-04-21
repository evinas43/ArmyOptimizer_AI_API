import { GoogleGenerativeAI } from "@google/generative-ai";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export const geminiService: AIService = {
  name: "Gemini",

  async chat(messages: ChatMessage[]) {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

    const prompt = [
      context,
      ...messages.map(m => `${m.role}: ${m.content}`)
    ].join("\n");

    const result = await model.generateContent(prompt);

    return result.response.text();
  }
};
