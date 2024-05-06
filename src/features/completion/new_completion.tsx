"use client";

import clsx from "clsx";
import { Button, TextArea } from "react-aria-components";
import { FaStop, FaSpinner } from "react-icons/fa6";

export type NewCompletionProps = {
  stop: () => void;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  streaming: boolean;
};

const NewCompletion = ({
  stop,
  input,
  handleInputChange,
  streaming,
}: NewCompletionProps) => {
  return (
    <div className="flex items-center w-full relative">
      <TextArea
        value={input}
        onChange={handleInputChange}
        disabled={streaming}
        placeholder={streaming ? "Generating Answer..." : "Ask a question..."}
        className={clsx("form-textarea w-full", {
          "pr-16": streaming,
        })}
        style={{ resize: "none" }}
        rows={5}
      />
      {streaming && (
        <div className="absolute inset-y-0 right-4 flex items-center gap-2">
          <Button onPress={stop}>
            <FaStop />
          </Button>
          <FaSpinner className="animate-spin" />
        </div>
      )}
    </div>
  );
};

export default NewCompletion;
