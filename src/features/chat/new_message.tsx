"use client";

import clsx from "clsx";
import { Button, Input, Label, TextField } from "react-aria-components";
import { FaStop, FaSpinner } from "react-icons/fa6";

export type NewMessageProps = {
  stop: () => void;
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  streaming: boolean;
};

const NewMessage = ({
  stop,
  input,
  handleInputChange,
  streaming,
}: NewMessageProps) => {
  return (
    <TextField className="flex items-center gap-4 w-full relative">
      <Label>Message</Label>
      <Input
        value={input}
        onChange={handleInputChange}
        disabled={streaming}
        placeholder={streaming ? "Generating Answer..." : "Ask a question..."}
        className={clsx("form-input w-full", {
          "pr-16": streaming,
        })}
      />
      {streaming && (
        <div className="absolute inset-y-0 right-4 flex items-center gap-2">
          <Button onPress={stop}>
            <FaStop />
          </Button>
          <FaSpinner className="animate-spin" />
        </div>
      )}
    </TextField>
  );
};

export default NewMessage;
