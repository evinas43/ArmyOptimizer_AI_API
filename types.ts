// Chat message specificates a rol and the content of the messsage to send 
export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// Ai service  makes all the services aded will use the same "contract"
export interface AIService {
  name: string;
  chat(messages: ChatMessage[]): Promise<string>;
}
