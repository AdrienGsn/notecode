/* eslint-disable @next/next/no-img-element */
"use client";

import { shareAction } from "@/actions/share";
import { LinkIcon } from "@/components/link-icon";
import { ShareIcon } from "@/components/share-icon";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { getServerUrl } from "@/lib/get-server-url";
import { Editor as MEditor, useMonaco } from "@monaco-editor/react";
import { Share as ShareProps } from "@prisma/client";
import { useAction } from "next-safe-action/hooks";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const DEFAULT_CODE = `
<html>
  <head>
    <title>HTML Sample</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <style type="text/css">
      h1 {
        color: #CCA3A3;
      }
    </style>
    <script type="text/javascript">
      alert("I am a sample... visit devChallenges.io for more projects");
    </script>
  </head>
  <body>
    <h1>Heading No.1</h1>
    <input disabled type="button" value="Click me" />
  </body>
</html>
`;

export type EditorProps = {
    sharable?: boolean;
    shared?: ShareProps;
};

export const Editor = (props: EditorProps) => {
    const router = useRouter();
    const monaco = useMonaco();

    const [language, setLanguage] = useState(props.shared?.language || "html");
    const [theme, setTheme] = useState(props.shared?.theme || "light");
    const [code, setCode] = useState<string | undefined>(
        props.shared?.code || DEFAULT_CODE
    );

    const handleCopy = () => {
        navigator.clipboard.writeText(
            `${getServerUrl()}/s/${props.shared?.id}`
        );
    };

    const { execute, status } = useAction(shareAction, {
        onSuccess: (data) => {
            toast.success("Success share code!");

            setTimeout(() => router.push(`/s/${data.id}`), 2000);
        },
        onError: (error) => {
            toast.error(error.serverError);
        },
    });

    const handleShare = () => {
        if (code) {
            execute({ language, theme, code });
        } else {
            toast.error("You must enter content!");
        }
    };

    return (
        <div className="relative mb-10 size-full overflow-hidden rounded-lg">
            <div className="absolute bottom-0 left-0 z-10 flex w-full flex-wrap items-end justify-between pb-2 pl-2 pr-5">
                <div className="flex items-center gap-2">
                    <Select
                        value={language}
                        onValueChange={setLanguage}
                        disabled={!props.sharable}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="language" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {monaco?.languages
                                    .getLanguages()
                                    .map((language) => (
                                        <SelectItem
                                            key={language.id}
                                            value={language.id}
                                        >
                                            {language.id}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select value={theme} onValueChange={setTheme}>
                        <SelectTrigger>
                            <SelectValue placeholder="theme" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="light">light</SelectItem>
                                <SelectItem value="vs-dark">dark</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-end gap-2">
                    {props.shared && (
                        <Button
                            variant="ghost"
                            size="lg"
                            className="flex items-center gap-1 rounded-full"
                            onClick={handleCopy}
                        >
                            <LinkIcon className="size-6" />
                            <span>.../s/{props.shared.id.slice(0, 8)}</span>
                        </Button>
                    )}
                    <Button
                        variant={props.sharable ? "default" : "secondary"}
                        size="lg"
                        className="flex items-center gap-2 rounded-full"
                        onClick={handleShare}
                        disabled={
                            !props.sharable || status === "executing"
                                ? true
                                : false
                        }
                    >
                        {status === "executing" ? (
                            <Loader size="sm" />
                        ) : (
                            <ShareIcon className="size-4" />
                        )}
                        <span>Share</span>
                    </Button>
                </div>
            </div>
            <MEditor
                theme={theme}
                language={language}
                value={code}
                onChange={(value) => setCode(value)}
            />
        </div>
    );
};
