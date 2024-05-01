import { OpenAIStream, StreamingTextResponse } from "ai";

import { openai } from "../openai";

export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<StreamingTextResponse> {
  const { messages, model } = await request.json();

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model,
    stream: true,
    messages,
  });

  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
