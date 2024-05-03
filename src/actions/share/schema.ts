import { z } from "zod";

export const ShareSchema = z.object({
    code: z.string(),
});
