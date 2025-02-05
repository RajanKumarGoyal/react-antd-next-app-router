"use client";

import { Layout } from 'antd';
import { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';

const { Header, Content, Footer, Sider } = Layout;

export default function AdminLayout({ children }) {

    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={isCollapsed} onCollapse={(value) => setIsCollapsed(value)}>
                <Sidebar />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280 }}>
                    {children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>Admin Layout</Footer>
            </Layout>
        </Layout>
    );
};