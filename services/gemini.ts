import { GoogleGenAI } from "@google/genai";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const geminiService: AIService = {
  name: "Gemini",

  async chat(messages: ChatMessage[]) {
    const prompt = [
      context,
      ...messages.map(
        m => `${m.role.toUpperCase()}: ${m.content}`
      )
    ].join("\n\n");

    const response = await genAI.models.generateContent({
      model: "models/gemini-1.5-flash",
      contents: prompt,
      config: {
        maxOutputTokens: 300, 
        temperature: 0.6
      }
    });

    return response.text ?? "";
  }
};
