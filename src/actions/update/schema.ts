import { z } from "zod";

export const UpdateSchema = z.object({
    shareId: z.string(),
    language: z.string(),
    theme: z.string(),
    code: z.string(),
});
