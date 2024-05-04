"use server";

import prisma from "@/lib/prisma";
import { UpdateSchema } from "./schema";

import { ActionError, action } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";

export const updateAction = action(UpdateSchema, async (input) => {
    const existingShare = await prisma.share.findUnique({
        where: { id: input.shareId },
    });

    if (!existingShare) {
        throw new ActionError("Invalid shared id!");
    }

    const share = await prisma.share.update({
        where: { id: input.shareId },
        data: {
            language: input.language,
            theme: input.theme,
            code: input.code,
        },
    });

    revalidatePath(`/s/${input.shareId}`);

    return share;
});
