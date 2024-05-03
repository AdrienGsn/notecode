"use client";

import { Logo } from "./logo";

export const Header = () => {
    return (
        <header className="flex flex-col items-center gap-10 py-5">
            <Logo />
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-3xl font-semibold">Create & Share</h2>
                <h1 className="text-4xl font-semibold">Your Code easily</h1>
            </div>
        </header>
    );
};
