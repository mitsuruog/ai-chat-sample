import { Assistant } from "openai/resources/beta/assistants.mjs";
import useSWR from "swr";

// @ts-expect-error need to move to shared
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function useAssistantById(assistantId: string) {
  return useSWR<Assistant>(`/api/assistants/${assistantId}`, fetcher);
}
