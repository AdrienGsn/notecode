import { z } from "zod";

export const ShareSchema = z.object({
    language: z.string(),
    theme: z.string(),
    code: z.string(),
});
