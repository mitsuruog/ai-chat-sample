"use client";

import { memo } from "react";
import ReactMarkdown, { Options } from "react-markdown";

export type MarkdownProps = Options;

const Markdown = memo(
  (props: MarkdownProps) => <ReactMarkdown {...props} />,
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

Markdown.displayName = "Markdown";

export default Markdown;
