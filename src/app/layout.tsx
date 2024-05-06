import clsx from "clsx";
import { Inter } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Open AI Sandbox",
  description: "Open AI Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "flex min-h-screen flex-col antialiased"
        )}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
