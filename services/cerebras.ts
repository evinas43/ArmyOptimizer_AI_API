import Cerebras from '@cerebras/cerebras_cloud_sdk';
import type { AIService, ChatMessage } from '../types';

const cerebras = new Cerebras();

export const cerebrasService: AIService = {
  name: 'Cerebras',

  async chat(messages: ChatMessage[]) {
    const chatCompletion = await cerebras.chat.completions.create({
      messages: messages as any,
      model: 'zai-glm-4.7',
      max_completion_tokens: 65000,
      temperature: 1,
      top_p: 0.95
    });

    return (chatCompletion as any ).choices?.[0]?.message?.content ?? '';
  }
};
