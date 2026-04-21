import { GoogleGenAI } from "@google/genai";
import type { AIService, ChatMessage } from "../types";
import { context } from "../lib/const";

const genAI = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const geminiService: AIService = {
  name: "Gemini",

  async chat(messages: ChatMessage[]) {

    const response = await genAI.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: context }]
        },
        ...messages.map(m => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }]
        }))
      ]
    });

    return response.text ?? "";
  }
};




// import { GoogleGenAI } from "@google/genai";
// import type { AIService, ChatMessage } from "../types";
// import { context } from "../lib/const";

// const genAI = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY
// });

// export const geminiService: AIService = {
//   name: "Gemini",

//   async chat(messages: ChatMessage[]) {
//     const prompt = [
//       context,
//       ...messages.map(
//         m => `${m.role.toUpperCase()}: ${m.content}`
//       )
//     ].join("\n\n");

//     const response = await genAI.models.generateContent({
//       model: "gemini-1.5-flash",
//       contents: prompt
//     });

//     return response.text ?? "";
//   }
// };
