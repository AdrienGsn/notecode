import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoteCode - Challenge",
  description: "",
};

export default function RootLayout(props: PropsWithChildren) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("h-full",inter.className)}>{props.children}</body>
    </html>
  );
}
