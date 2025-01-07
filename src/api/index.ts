import { getBlessContent } from "@/ai/api"
import axios from "axios"

export async function apiGenerate(params: {
    prompt: string
  }) {
    try {
      // const data = await getBlessContent(params.prompt);
      const data = await axios.post('/api/blessing', {
        prompt: params.prompt
      })
      return data
    }
    catch (error: any) {
      return {
        status: 500,
        data: null,
        error
      }
    }
  }