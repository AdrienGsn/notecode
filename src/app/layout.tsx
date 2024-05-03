/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { PropsWithChildren } from "react";
import "./globals.css";
import { Providers } from "./providers";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "NoteCode - Challenge",
    description: "",
};

export default function RootLayout(props: PropsWithChildren) {
    return (
        <html lang="en" className="h-full">
            <body className={cn("h-full relative", outfit.className)}>
                <Providers>
                    <div className="absolute size-full bg-gradient-to-br from-purple-500 to-indigo-600">
                        <img
                            src="/images/background.svg"
                            alt="background"
                            className="w-full object-cover"
                        />
                    </div>
                    <main className="absolute size-full">{props.children}</main>
                </Providers>
            </body>
        </html>
    );
}
