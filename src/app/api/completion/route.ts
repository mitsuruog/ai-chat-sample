import { OpenAIStream, StreamingTextResponse } from "ai";

import { openai } from "../openai";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<StreamingTextResponse> {
  const { prompt, model } = await request.json();

  // Request the OpenAI API for the response based on the prompt
  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages: [
      {
        role: "user",
        content: `以下に与えられたコンテンツを元に続きの文書を作成してください。
文章は昔話の一部です。
コンテンツ：
${prompt}

出力：\n
    `,
      },
    ],
    max_tokens: 150,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
