import { Header } from "@/app/_components/header";
import { Layout } from "@/components/page/layout";
import prisma from "@/lib/prisma";
import type { PageParams } from "@/types/next";
import { notFound } from "next/navigation";
import { Editor } from "../../_components/editor";

export default async function RoutePage(
    props: PageParams<{ shareId: string }>
) {
    const share = await prisma.share.findUnique({
        where: { id: props.params.shareId },
    });

    if (!share) {
        return notFound();
    }

    return (
        <Layout className="h-full items-center text-center">
            <Header />
            <Editor language={share.language} code={share.code} />
        </Layout>
    );
}
