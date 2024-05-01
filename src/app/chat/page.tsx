"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import { Key } from "react-aria-components";

import ChatMessage from "@/features/chat/chat_message";
import ModelSwitcher from "@/features/chat/model_switcher";
import NewMessage from "@/features/chat/new_message";

export default function Home() {
  const [model, setModel] = useState<Key>("gpt-3.5-turbo");
  const [streaming, setStreaming] = useState<boolean>(false);

  const { messages, input, isLoading, stop, handleInputChange, handleSubmit } =
    useChat({
      body: { model },
      onResponse: () => {
        if (streaming) {
          return;
        }
        setStreaming(true);
      },
      onFinish: () => {
        setStreaming(false);
      },
      onError: () => {
        setStreaming(false);
      },
    });

  const handleStop = () => {
    stop();
    setStreaming(false);
  };

  return (
    <main className="flex flex-grow flex-col container mx-auto p-8">
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
      <div className="flex flex-col items-center p-4">
        <form onSubmit={handleSubmit} className="w-1/2">
          <NewMessage
            stop={handleStop}
            input={input}
            handleInputChange={handleInputChange}
            streaming={streaming || isLoading}
          />
        </form>
      </div>
    </main>
  );
}
