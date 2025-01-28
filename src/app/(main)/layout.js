'use client'

import { Layout } from 'antd';
import Header from "@/components/main/Header";

export default function RootLayout({ children }) {

    const { Content, Footer } = Layout;

    return (
        <Layout className="layout">
            <Header />
            <Content style={{ padding: 24, minHeight: 280, margin: '24px 16px' }}>
                {children}
            </Content>
            <Footer style={{ textAlign: 'center' }}>Next Js Project using Ant</Footer>
        </Layout>
    );
}
