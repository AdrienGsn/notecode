import { Header } from "@/app/_components/header";
import { Layout } from "@/components/page/layout";
import prisma from "@/lib/prisma";
import type { PageParams } from "@/types/next";
import { notFound } from "next/navigation";
import { Editor } from "../../_components/editor";

export default async function RoutePage(
    props: PageParams<{ shareId: string }>
) {
    const shared = await prisma.share.findUnique({
        where: { id: props.params.shareId },
    });

    if (!shared) {
        return notFound();
    }

    return (
        <Layout className="h-full items-center text-center">
            <Header />
            <Editor shared={shared} />
        </Layout>
    );
}
