import React from 'react';
import { Layout, FloatButton } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';

import Bottom, { Foot } from './foot.js';
import Head from './head.js';

const { Header, Content, Footer } = Layout;

export function Home() {
    return (
        <div style={{ backgroundColor: "#ffffff", minHeight: '100vh' }}>
            <Layout style={{ backgroundColor: "#ffffff" }}>
                <Header style={{ backgroundColor: 'pink', width: '100%' }}>
                    <Head />
                </Header>

                <Content style={{ backgroundColor: "#ffffff", minHeight: '100vh' }}>
                    <Outlet />
                </Content>

                <Footer style={{ backgroundColor: 'pink' }}>
                    <Foot />
                </Footer>
            </Layout>

            <FloatButton
                icon={<QuestionCircleOutlined />}
                type="primary"
                style={{ insetInlineEnd: 90 }}
            />
            <FloatButton.BackTop />
        </div>
    );
}

export default Home;
