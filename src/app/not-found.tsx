"use client";

import { Layout } from "@/components/page/layout";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function RouteNotFound() {
    const router = useRouter();

    return (
        <Layout className="size-full items-center justify-center">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl">Error 404</CardTitle>
                </CardHeader>
                <CardContent className="text-xl">
                    Sorry, the page you are looking for appears to be missing.
                    Please check the URL you entered or return to the homepage.
                </CardContent>
                <CardFooter>
                    <Button size="lg" onClick={() => router.push("/")}>
                        Go home
                    </Button>
                </CardFooter>
            </Card>
        </Layout>
    );
}
