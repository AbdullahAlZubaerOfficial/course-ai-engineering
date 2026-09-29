import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "120-Day AI & Data Engineering Course Roadmap",
  description: "Master Python, Math, ML, Deep Learning, PyTorch, CV, NLP, LLMs, RAG, AI Agents & MLOps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-[#080c14] text-slate-100">
        {children}
      </body>
    </html>
  );
}
