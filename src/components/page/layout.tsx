import twx from "@/lib/twx";

export const Layout = twx.div((props) => [
    "max-w-6xl w-full flex flex-col gap-4 m-auto px-4",
    props.className,
]);
