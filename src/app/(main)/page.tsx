import { Layout } from "@/components/page/layout";
import type { PageParams } from "@/types/next";
import { Editor } from "../_components/editor";
import { Header } from "../_components/header";

export default async function RoutePage(props: PageParams) {
    return (
        <Layout className="h-full items-center text-center">
            <Header />
            <Editor />
        </Layout>
    );
}
