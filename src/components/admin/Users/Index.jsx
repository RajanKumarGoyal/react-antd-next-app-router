"use client";

import { Table } from "antd";

const Index = ({ initialUsers }) => {

    let page = 1, limit = 10;

    const columns = [
        {
            title: "Sr.",
            dataIndex: "srNo",
            key: "srNo",
            render: (text, record, index) => (page - 1) * limit + index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
            render: (text, record) => `${text.suite} ${text.street}, ${text.city}`,
        },
    ];

    return (
        <Table dataSource={initialUsers} columns={columns} rowKey="id" />
    );
};

export default Index;