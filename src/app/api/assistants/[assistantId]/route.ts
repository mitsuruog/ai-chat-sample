import { openai } from "../../openai";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: { assistantId: string } }
) {
  const assistantId = params.assistantId;
  console.log("GET request received", assistantId);

  if (!assistantId) {
    return new Response(
      JSON.stringify({ error: "Missing assistantId path parameter" }),
      { status: 400 }
    );
  }

  const assistant = await openai.beta.assistants.retrieve(assistantId);

  return Response.json(assistant);
}
