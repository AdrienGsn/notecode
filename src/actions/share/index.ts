"use server";

import prisma from "@/lib/prisma";
import { ShareSchema } from "./schema";

import { action } from "@/lib/safe-action";

export const shareAction = action(ShareSchema, async (input) => {
    const share = await prisma.share.create({
        data: {
            language: input.language,
            code: input.code,
        },
    });

    return share;
});
