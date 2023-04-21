import React, {useEffect, useState} from 'react';
import {DownOutlined, LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {
    Breadcrumb,
    Button, Card,
    Carousel,
    Col,
    Dropdown,
    Form,
    Layout,
    List,
    Menu,
    QRCode,
    Row,
    Skeleton,
    Space,
    theme
} from 'antd';
import MyFootNav from '../../../components/footnav'
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleBar from "simplebar-react";
const { Header, Content, Footer, Sider } = Layout;


const downloadQRCode = () => {
    const canvas = document.getElementById('myqrcode')?.querySelector<HTMLCanvasElement>('canvas');
    if (canvas) {
        const url = canvas.toDataURL();
        const a = document.createElement('a');
        a.download = 'QRCode.png';
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
};

const Code: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    useEffect(() => {
        // Define a function to handle window resize
        function handleResize() {
            // Update the state variables with the new window size
            setScreenWidth(window.innerWidth);
            setScreenHeight(window.innerHeight);
        }

        // Add the event listener for window resize
        window.addEventListener("resize", handleResize);

        // Return a function to remove the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Pass an empty array as dependency to run only once
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>
            <CssBaseline />
            <Content style={{marginTop: "25%", height: "100%"}}>
                <SimpleBar style={{maxHeight: "90%"}}>
                    <Row>
                        <Col span={3}></Col>
                        <Col span={12}>
                            <Card title="Current identity" bordered={false}>
                                Stuff
                            </Card>
                        </Col>
                        <Col span={6}></Col>
                    </Row>
                    <Row style={{marginTop: "10%"}} justify="center" align="middle">
                        <Col span={2}></Col>
                        <Col span={18}>
                            <QRCode
                                bordered={false}
                                value="2505217826@qq.com"
                                size={320}
                                errorLevel={"H"}
                            />
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                    <Row style={{marginTop: "20%"}}>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Button
                                style={{
                                    minWidth: '300px',
                                    minHeight: '50px',
                                    boxShadow: '0 9px 10px rgba(0, 0, 0, 0.5)',
                                    borderRadius: 0
                                }}
                                type="primary"
                                onClick={downloadQRCode}>
                                Download
                            </Button>
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                </SimpleBar>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default Code;