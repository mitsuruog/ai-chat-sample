"use client";

import { Message } from "ai";
import clsx from "clsx";
import { FaCommentDots, FaUser } from "react-icons/fa6";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import CodeBlock from "@/shared/components/code-block";
import Markdown from "@/shared/components/markdown";

export type ChatMessageProps = {
  message: Message;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const { role } = message;

  const content =
    message.role === "data"
      ? JSON.stringify(message.data, null, 2)
      : message.content;

  return (
    <div className="flex gap-4 border-b p-4">
      <div className="flex flex-shrink-0">
        <div
          className={clsx(
            "flex flex-col items-center justify-center border w-8 h-8 rounded shadow-sm",
            {
              "bg-gray-700 text-white": role !== "user",
            }
          )}
        >
          {role === "user" ? <FaUser /> : <FaCommentDots />}
        </div>
      </div>
      <Markdown
        className="flex flex-col overflow-hidden"
        remarkPlugins={[remarkGfm, remarkMath]}
        components={{
          p({ children }) {
            return <div>{children}</div>;
          },
          code({ node, className, children, ...props }) {
            if (Array.isArray(children) && children.length) {
              if (children[0] == "▍") {
                return (
                  <span className="mt-1 cursor-default animate-pulse">▍</span>
                );
              }

              children[0] = (children[0] as string).replace("`▍`", "▍");
            }

            const match = /language-(\w+)/.exec(className || "");

            return (
              <CodeBlock
                language={(match && match[1]) || ""}
                value={String(children).replace(/\n$/, "")}
                {...props}
              />
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default ChatMessage;
