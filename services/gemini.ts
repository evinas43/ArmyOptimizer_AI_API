import { GoogleGenAI } from "@google/genai";
import type { AIService, ChatMessage } from "../types";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const geminiService: AIService = {
  name: "Gemini",

  async chat(messages: ChatMessage[]) {
    const prompt = messages
      .map(m => `${m.role.toUpperCase()}: ${m.content}`)
      .join("\n");

    const response = await genAI.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt
    });

    return response.text ?? "";
  }
};
