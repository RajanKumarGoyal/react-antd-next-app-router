"use client";
import { Menu } from 'antd';
import { useRouter } from 'next/navigation';
import { PieChartOutlined, UserOutlined, TeamOutlined, LogoutOutlined } from '@ant-design/icons';

const Sidebar = () => {

    const router = useRouter();

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

    const manuHandler = ({ key }) => (key === "logout") ? router.push("/") : router.push(key);

    return (
        <>
            <div className="demo-logo-vertical" style={{
                float: 'left', width: '120px', height: '31px',
                margin: '16px 24px 16px 24px', background: 'rgba(255, 255, 255, 0.3)'
            }} />
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={manuHandler} />
        </>
    );
};

export default Sidebar;