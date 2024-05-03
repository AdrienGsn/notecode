"use client"

import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export const Providers = (props: PropsWithChildren) => {
    return(
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="theme"
        >
            {props.children}
        </ThemeProvider>
    )
}