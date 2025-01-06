import OpenAI from 'openai'

const deepseekApiUrl = 'https://api.deepseek.com/v1'

const aiServiceUrl = (import.meta as any).env.VITE_AI_SERVICE_URL || deepseekApiUrl

export const openai = new OpenAI({
  baseURL: aiServiceUrl,
  apiKey: (import.meta as any).env.VITE_OPENAI_API_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser: true
})

export const baseModel = (import.meta as any).env.VITE_MODEL_NAME || 'deepseek-chat'

export const baseChatCompletionCreateParams: Partial<OpenAI.ChatCompletionCreateParamsNonStreaming> = {
  max_tokens: 100,
  // TODO: for use control
  // presence_penalty: 0,
  // frequency_penalty: 0,
  // stream: true
}
