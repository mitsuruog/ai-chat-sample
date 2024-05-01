"use client";

import { useCompletion } from "ai/react";
import { useState } from "react";
import { Button, Key } from "react-aria-components";

import ModelSwitcher from "@/features/chat/model_switcher";
import NewCompletion from "@/features/completion/new_completion";
import Markdown from "@/shared/components/markdown";

export default function CompletionPage() {
  const [model, setModel] = useState<Key>("gpt-3.5-turbo");
  const [streaming, setStreaming] = useState<boolean>(false);

  const { completion, input, handleInputChange, handleSubmit, stop } =
    useCompletion({
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
    <main className="flex flex-grow flex-col gap-8 container mx-auto p-8">
      <div className="flex justify-end">
        <ModelSwitcher
          selectedKey={model}
          onSelectionChange={(selectedKey) => setModel(selectedKey)}
        />
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <NewCompletion
          input={input}
          handleInputChange={handleInputChange}
          stop={handleStop}
          streaming={streaming}
        />
        <div className="self-end">
          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Generate
          </Button>
        </div>
      </form>
      <div className="flex flex-col flex-1 gap-2">
        <div>続き:</div>
        <div>
          <Markdown>{completion}</Markdown>
        </div>
      </div>
    </main>
  );
}
