"use client";

import { useAssistant } from "ai/react";
import React, { useState } from "react";
import { Key, Label } from "react-aria-components";

import { useAssistantById } from "@/features/assistant/hooks/useAssistant";
import ChatMessage from "@/features/chat/chat_message";
import ModelSwitcher from "@/features/chat/model_switcher";
import NewMessage from "@/features/chat/new_message";

export default function CompletionPage() {
  const [model, setModel] = useState<Key>("gpt-3.5-turbo");
  const [selectedToolIndex, setSelectedToolIndex] = useState<number>(0);

  const { data: assistant } = useAssistantById(
    process.env["NEXT_PUBLIC_SAMPLE_ASSISTANT_ID"] ?? ""
  );

  const { messages, input, handleInputChange, status, submitMessage } =
    useAssistant({
      api: "/api/assistants",
      body: {
        model,
        assistantId: assistant?.id,
        tool_choice: assistant?.tools[selectedToolIndex],
      },
    });

  const handleStop = () => {
    stop();
  };

  const streaming = status !== "awaiting_message";

  return (
    <main className="flex flex-grow flex-col gap-8 container mx-auto p-8">
      <div className="flex justify-end">
        <ModelSwitcher
          selectedKey={model}
          onSelectionChange={(selectedKey) => setModel(selectedKey)}
        />
      </div>
      <div className="flex flex-grow flex-col">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>
      <div className="flex items-center p-4">
        <form onSubmit={submitMessage} className="flex gap-8 w-3/4">
          <NewMessage
            stop={handleStop}
            input={input}
            handleInputChange={handleInputChange}
            streaming={streaming}
          />
          <fieldset className="flex max-w-md flex-col">
            <Label>Tool</Label>
            {assistant?.tools.map((tool, index) => (
              <label className="flex items-center gap-2" key={index}>
                <input
                  type="radio"
                  name="tool"
                  checked={selectedToolIndex === index}
                  onChange={() => {
                    setSelectedToolIndex(index);
                  }}
                />
                {tool.type === "function" ? tool.function.name : tool.type}
              </label>
            ))}
          </fieldset>
        </form>
      </div>
    </main>
  );
}
