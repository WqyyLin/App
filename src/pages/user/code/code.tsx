import React, {useEffect, useState} from 'react';
import {DownOutlined, LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {Link} from "react-router-dom";
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
import { AppBar,Toolbar } from '@material-ui/core';
import { linkStyle } from "../../../js/settingsStyle";
import { View, Text, Switch} from 'react-native';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core'

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

            <AppBar position="fixed" color="default">
            <Toolbar>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1477" width="25" height="25" style={{position: 'relative', top: 0, left:350}}><path d="M512 938.666667c235.648 0 426.666667-191.018667 426.666667-426.666667S747.648 85.333333 512 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667z m0 85.333333C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z" fill="#3D3D3D" p-id="1478"></path><path d="M520.96 232.106667c-62.293333 0-111.786667 17.92-147.626667 54.613333-36.693333 35.84-54.613333 84.48-54.613333 146.773333h90.453333c0-37.546667 7.68-67.413333 23.04-87.893333 17.066667-23.893333 45.226667-35.84 83.626667-35.84 30.72 0 54.613333 8.533333 71.68 25.6 16.213333 17.066667 24.746667 40.106667 24.746667 69.973333 0 22.186667-7.68 42.666667-23.04 62.293334l-14.506667 16.213333c-52.906667 46.933333-85.333333 81.92-97.28 105.813333-11.093333 22.186667-16.213333 49.493333-16.213333 81.066667v14.506667h91.306666v-14.506667c0-21.333333 4.266667-40.106667 13.653334-57.173333 7.68-15.36 19.626667-29.866667 34.986666-43.52 40.96-34.986667 64.853333-57.173333 72.533334-66.56 20.48-27.306667 31.573333-62.293333 31.573333-104.106667 0-51.2-17.066667-92.16-50.346667-122.026667-34.133333-30.72-78.506667-45.226667-133.973333-45.226666z m-14.506667 499.2c-17.92 0-32.426667 5.12-43.52 17.066666-12.8 11.093333-18.773333 25.6-18.773333 43.52 0 17.066667 5.973333 31.573333 18.773333 43.52 11.093333 11.946667 25.6 17.92 43.52 17.92 17.066667 0 32.426667-5.973333 45.226667-17.066666 11.946667-11.946667 17.92-26.453333 17.92-44.373334 0-17.92-5.973333-32.426667-17.92-43.52-11.946667-11.946667-27.306667-17.066667-45.226667-17.066666z" fill="#3D3D3D" p-id="1479"></path></svg>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10, left:-30}}>            
                <View style={{position: 'absolute', left: 0, width: '100%' }}>
                    <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                        Your Code
                    </Text>
                </View>
            </View>
            
            </Toolbar>
                </AppBar> 
                <Toolbar />

            <Content style={{height: "100%"}}>
                <SimpleBar style={{marginTop:"5%", maxHeight: "90%"}}>
                    <Row>
                        <Col span={1}></Col>
                        <Col span={22}>
                            <Card title="Align the Code with the Scanning Port." bordered={false} style={{textAlign:'center'}}>
                                <QRCode
                                    bordered={false}
                                    value="2505217826@qq.com"
                                    size={320}
                                    errorLevel={"H"}
                                />                                
                            </Card>
                        </Col>
                        <Col span={1}></Col>
                    </Row>
                    <Row style={{marginTop: "10%"}} justify="center" align="middle">
                        <Col span={2}></Col>
                        <Col span={18}>
                        
                        </Col>
                        <Col span={3}></Col>
                    </Row>
                    <Row>
                        <Col span={3}></Col>
                        <Col span={18}>
                            <Button
                                style={{
                                    minWidth: '150px',
                                    minHeight: '50px',
                                    boxShadow: '0 9px 10px rgba(0, 0, 0, 0.5)',
                                    borderRadius: 0
                                }}
                                type="primary"
                                onClick={downloadQRCode}>
                                Entry Record
                            </Button>

                            <Button
                                style={{
                                    minWidth: '120px',
                                    minHeight: '50px',
                                    boxShadow: '0 9px 10px rgba(0, 0, 0, 0.5)',
                                    borderRadius: 0,
                                    marginLeft:"10px"
                                }}
                                type="primary"
                                onClick={downloadQRCode}>
                                Common Problem
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