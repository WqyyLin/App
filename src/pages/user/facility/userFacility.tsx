import React, {useEffect, useState} from 'react';
import {EditOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import {Dropdown, message, Space, Avatar, Button, List, Skeleton, Card, Carousel, Col, Form, Input, Layout, Row, Select, theme} from 'antd';
import MyFootNav from "../../../components/footnav";
import {AddOutlined, DeleteOutline} from "@material-ui/icons";
import type { MenuProps } from 'antd';
import member from "../../../img/member.jpg"
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import gym1 from "../../../img/1.jpg"
import gym2 from "../../../img/2.jpg"
import gym3 from "../../../img/5.jpg"
import gym4 from "../../../img/7.jpg"
import gym5 from "../../../img/8.jpg"

const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;

interface DataType {
    gender?: string;
    name: {
        title?: string;
        first?: string;
        last?: string;
    };
    email?: string;
    picture: {
        large?: string;
        medium?: string;
        thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
}

interface Information {
    groundName: any;
}

interface Facility {
    Ad_title: string;
    activity: any;
    name: string;
    groundnumber: number;
    Ad_describtion: string;
    endtime: number;
    starttime: number;
    holdpeople: number;
}

const contentStyle: React.CSSProperties = {
    height: 250,
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const onClick: MenuProps['onClick'] = ({ key }) => {
    message.info(`Click on item ${key}`);
};

const items: MenuProps['items'] = [
    {
        label: 'Swimming pool',
        key: 'Swimming pool',
    },
    {
        label: 'Fitness room',
        key: 'Fitness room',
    },
    {
        label: 'Squash courts',
        key: 'Squash courts',
    },
    {
        label: 'Sports hall',
        key: 'Sports hall',
    },
];

const onClickKey = () => {
    alert("Password reset succeeded!")
};

const count = 100;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const onSearch = (value: string) => console.log(value);
const UserFacility: React.FC = () => {
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
    const [data, setData] = useState<DataType[]>([]);
    const [list, setList] = useState<DataType[]>([]);
    const [initLoading, setInitLoading] = useState(true);
    const [pageHeight, setPageHeight ] = useState([]);
    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    useEffect(() => {
    //     fetch("http://localhost:8080/user/manager/facilities")
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw response;
    //             }
    //         })
    //         .then((data) => {
    //             setInfo(data);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
            fetch(fakeDataUrl)
                .then((res) => res.json())
                .then((res) => {
                    setInitLoading(false);
                    setData(res.results);
                    setList(res.results);
                });
    }, []);

    const prefixSelector = (
        <Form.Item name="prefix1" noStyle>
            <Select style={{width: 90}}>
                <Option value="all">Variety</Option>
                <Option value="name">Name</Option>
                <Option value="description">Info</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>Error!</div>;
    // }


    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>
            <Content style={{marginTop: "5%", height: "100%"}}>
                <Row>
                    <Col span={10}></Col>
                    <Col span={2}>
                        <Dropdown
                            overlayStyle={{
                                width: "100%"
                            }}
                            menu={{ items, onClick }}>
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    Facilities
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </Col>
                    <Col span={10}></Col>
                </Row>
                <Carousel autoplay>
                    <div>
                        <h3 style={contentStyle}>
                            <img src={gym1} alt="gym1" style={{width: '100%', height: '100%'}}/>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img src={gym2} alt="gym2" style={{width: '100%', height: '100%'}}/>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img src={gym3} alt="gym3" style={{width: '100%', height: '100%'}}/>
                        </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img src={gym4} alt="gym4" style={{width: '100%', height: '100%'}}/>
                            </h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>
                            <img src={gym5} alt="gym5" style={{width: '100%', height: '100%'}}/>
                            </h3>
                    </div>
                </Carousel><Row>
                    <Col span={1}></Col>
                    <Col span={22}>
                        <Form
                            form={form}
                            name="register"
                            initialValues={{prefix1: 'all', prefix2: 'all'}}
                            onFinish={onFinish}
                            style={{
                                width: '100%',
                            }}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="variety"
                                style={{height: "100%"}}
                            >
                                <Search
                                    placeholder="input search text"
                                    onSearch={onSearch}
                                    enterButton
                                    addonBefore={prefixSelector}
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={1}></Col>
                </Row>
                <CssBaseline />
                <SimpleBar style={{ maxHeight: "50%", marginRight: "5%", marginLeft: "5%"}}>
                    <List
                        loading={initLoading}
                        itemLayout="horizontal"
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item
                                actions={[<a key="book">Book</a>]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        title= "Activity"
                                        description="Activity Description!!!Activity Description!!!Activity Description!!!Activity Description!!!"
                                    />
                                </Skeleton>
                            </List.Item>
                        )}
                    />
                </SimpleBar>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default UserFacility;