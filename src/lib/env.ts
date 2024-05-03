import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const ENV = createEnv({
    server: {
        NODE_ENV: z.enum(["development", "production", "test"]),
        DATABASE_URL: z.string().url().min(1),
    },
    experimental__runtimeEnv: {},
});

export default ENV;
