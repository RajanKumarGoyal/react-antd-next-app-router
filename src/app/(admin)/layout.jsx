'use client';

import Head from 'next/head';
import { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { useRouter } from 'next/navigation';
import { PieChartOutlined, UserOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';

export default function AdminLayout({ children }) {

    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);

    const { Header, Content, Footer, Sider } = Layout;
    const { token: { colorBgContainer } } = theme.useToken();

    function getItem(label, key, icon, children) {
        return {
            key, icon, children, label,
        };
    };

    const items = [
        getItem('Dashboard', '/admin', <PieChartOutlined />),
        getItem('Users', '', <UserOutlined />, [
            getItem('List', '/admin/users'),
            getItem('Create', '/admin/users/create')
        ]),
        getItem('Companies', '/admin/companies', <TeamOutlined />),
        getItem('Log Out', 'logout', <LogoutOutlined />),
    ];

    return (
        <>
            <Head>
                <title>Admin Panel</title>
            </Head>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={isCollapsed} onCollapse={(value) => setIsCollapsed(value)}>
                    <div className="demo-logo-vertical" style={{
                        float: 'left', width: '120px', height: '31px',
                        margin: '16px 24px 16px 24px', background: 'rgba(255, 255, 255, 0.3)'
                    }} />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer }}>
                        {children}
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Admin Layout</Footer>
                </Layout>
            </Layout>
        </>
    );
}