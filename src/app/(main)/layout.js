import ClientLayout from "@/components/main/ClientLayout";

export const metadata = { 
    title: "Next Js + App Router",
    description: 'An App configured with Next.js, Antd, JavaScript.'
};

export default function Layout({ children }) {
    return (<ClientLayout> {children} </ClientLayout>);
};