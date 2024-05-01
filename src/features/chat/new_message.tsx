"use client";

import clsx from "clsx";
import { Button } from "react-aria-components";

import Icon, { faSpinner, faStop } from "@/shared/components/icon";

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
    <div className="flex items-center w-full relative">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        disabled={streaming}
        placeholder={streaming ? "Generating Answer..." : "Ask a question..."}
        className={clsx(
          "w-full  border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          {
            "pr-20": streaming,
          }
        )}
      />
      {streaming && (
        <div className="absolute inset-y-0 right-4 flex items-center gap-2">
          <Button className="flex items-center" onPress={stop}>
            <Icon icon={faStop} className="h-6 w-6" />
          </Button>
          <Icon icon={faSpinner} spin className="h-6 w-6" />
        </div>
      )}
    </div>
  );
};

export default NewMessage;
