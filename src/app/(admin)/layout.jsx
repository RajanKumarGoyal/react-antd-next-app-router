import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = { 
    title: "Admin Dashboard",
    description: 'A user admin dashboard configured with Next.js, Antd, JavaScript.'
};

export default function Layout({ children }) {
    return (<AdminLayout> {children} </AdminLayout>);
};