import OpenAI from "openai";
import { context } from "../lib/const";

const together = new OpenAI({
  apiKey: process.env.TOGETHER_API_KEY,
  baseURL: "https://api.together.xyz/v1"
});

export const togetherService = {
  name: "Together",

  async chat(messages: any) {
    const res = await together.chat.completions.create({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
      temperature: 0.6,
      max_tokens: 800,
      messages: [
        { role: "system", content: context },
        ...messages
      ]
    });

    return res.choices[0]?.message?.content ?? "";
  }
};