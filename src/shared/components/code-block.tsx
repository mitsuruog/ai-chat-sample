"use client";

import { FaCheck, FaClipboard } from "react-icons/fa6";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { useCopyToClipboard } from "@/shared/hooks/use-copy-to-clipboard";

type languageMap = {
  [key: string]: string | undefined;
};

export const programmingLanguages: languageMap = {
  javascript: ".js",
  python: ".py",
  java: ".java",
  c: ".c",
  cpp: ".cpp",
  "c++": ".cpp",
  "c#": ".cs",
  ruby: ".rb",
  php: ".php",
  swift: ".swift",
  "objective-c": ".m",
  kotlin: ".kt",
  typescript: ".ts",
  go: ".go",
  perl: ".pl",
  rust: ".rs",
  scala: ".scala",
  haskell: ".hs",
  lua: ".lua",
  shell: ".sh",
  sql: ".sql",
  html: ".html",
  css: ".css",
  // add more file extensions here, make sure the key is same as language prop in CodeBlock.tsx component
};

export type CodeBlockProps = {
  language: string;
  value: string;
};

const CodeBlock = ({ language, value }: CodeBlockProps) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard({});

  const onCopy = () => {
    if (isCopied) {
      return;
    }
    copyToClipboard(value);
  };

  return (
    <div className="flex flex-col bg-zinc-950 rounded my-2 w-[50rem]">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 text-zinc-100 rounded-t">
        <span className="text-xs lowercase">{language}</span>
        <div>
          <button onClick={onCopy}>
            {isCopied ? <FaCheck /> : <FaClipboard />}
          </button>
        </div>
      </div>
      <SyntaxHighlighter
        language={language}
        style={coldarkDark}
        PreTag="div"
        showLineNumbers
        lineNumberStyle={{ userSelect: "none" }}
        codeTagProps={{
          style: { fontSize: "0.9rem", fontFamily: "var(--font-mono)" },
        }}
        customStyle={{
          margin: 0,
          width: "100%",
          background: "transparent",
          padding: "1.5rem 1rem",
        }}
      >
        {value}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
