'use client';

import { Card, Col, Row, Avatar } from 'antd';

const { Meta } = Card;

export default function PostList({ records }) {

    const imageSrc = 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';

    return <Row>
        {(records.map(({ title, body, id }) => {
            return <Col span={6} key={id}>
                <Card hoverable style={{ width: 350 }} cover={<img alt="example" src={imageSrc} />}>
                    <Meta avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />} title={title} description={body} />
                </Card>
            </Col>
        }))}
    </Row>
};
