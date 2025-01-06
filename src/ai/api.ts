import type OpenAI from 'openai'
import { baseChatCompletionCreateParams, baseModel, openai } from './config'

export async function getBlessContent(prompt: string) {
  /**
   * 限制输入长度
   */
  prompt = prompt.trim().slice(0, 100);

  // 尽可能少的 token
  const tooltip = `请根据我的提示生成一条节日祝福语，祝福语字数控制在5到12个字之间，比如春节祝福语：辞暮尔尔，烟火年年~。注意生成的祝福语一定一定要喜庆、符合节日气氛、正能量、欢乐吉祥、积极向上。
  格式类型为纯文本即可`

  const messages: OpenAI.ChatCompletionMessageParam[] = [
    {
      role: 'system',
      content: tooltip,
    },
  ]

  if (prompt)
    messages.push({ role: 'user', content: `我的提示是：${prompt}` })

  const chatCompletion = await openai.chat.completions.create({
    ...baseChatCompletionCreateParams,
    messages,
    model: baseModel,
    // stream: true
  })

  // console.log(chatCompletion)
  return chatCompletion?.choices[0]?.message ?? ({ content: null });
}
