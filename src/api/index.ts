import { getBlessContent } from "@/ai/api"

export async function apiGenerate(params: {
    prompt: string
  }) {
    try {
      const data = await getBlessContent(params.prompt);
      return data
    }
    catch (error: any) {
      console.error('error', error)
      return {
        content: null
      }
    }
  }