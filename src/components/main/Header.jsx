'use client'

import { Layout, Menu } from 'antd';
import { useRouter } from "next/navigation";

const CustomHeader = () => {

    const router = useRouter();
    const { Header } = Layout;

    const manuHandler = ({ key }) => {
        (key === '/' || key === '/auth/login' || key === '/about-us') ? router.push(key) : console.log('Routes are not initialized yet');
    };

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <div className="demo-logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}
                onClick={manuHandler} items={[
                    { key: '/', label: 'Home' },
                    { key: '/about-us', label: 'About Us' },
                    { key: '/contact-us', label: 'Contact Us' },
                    { key: '/auth/login', label: 'Sign In' },
                ]} />
        </Header>
    );
};

export default CustomHeader;