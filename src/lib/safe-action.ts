import { createSafeActionClient } from "next-safe-action";

export class ActionError extends Error {
    constructor(message: string) {
        super(message);

        this.name = "ActionError";
    }
}

const handleReturnedServerError = (error: Error) => {
    if (error instanceof ActionError) {
        return error.message;
    }

    return "Something went wrong!";
};

const handleServerErrorLog = (error: Error) => {
    console.error("Action error:", error.message);
};

export const action = createSafeActionClient({
    handleReturnedServerError,
    handleServerErrorLog,
});
