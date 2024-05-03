import { z } from "zod";

export const ShareSchema = z.object({
    language: z.string(),
    code: z.string(),
});
