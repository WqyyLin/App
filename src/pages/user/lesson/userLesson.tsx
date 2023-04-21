import React, {useEffect, useState} from 'react';
import {EditOutlined, UserOutlined,} from '@ant-design/icons';
import {Radio, Tabs, Menu, Card, Col, Form, Input, Layout, Row, Select, theme, Carousel} from 'antd';
import MyFootNav from "../../../components/footnav";
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import {AddOutlined, DeleteOutline} from "@material-ui/icons";
import member from "../../../img/member.jpg"
import type { MenuProps, TabsProps, RadioChangeEvent } from 'antd';
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;

type TabPosition = 'left' | 'right' | 'top' | 'bottom';

type MenuItem = Required<MenuProps>['items'][number];
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
    height: '100px',
    color: '#fff',
    lineHeight: "100px",
    textAlign: 'center',
    background: '#364d79',
    borderRadius: 15,
};

const onSearch = (value: string) => console.log(value);

const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
};

const onChange = (key: string) => {
    console.log(key);
};


function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}


const weekTabs: TabsProps['items'] = [
    {
        key: 'All',
        label: `All`,
        children:
        <SimpleBar style={{maxHeight: 890}}>
            {
                new Array(30).fill(null).map((_, i) => {
                    return <Carousel>
                        <div>
                            <h3 style={contentStyle}>lesson{i+1}</h3>
                        </div>
                    </Carousel>
                })
            }
        </SimpleBar>


    },
    {
        key: 'Mo',
        label: `Mo`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'Tu',
        label: `Tu`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'We',
        label: `We`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'Th',
        label: `Th`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'Fr',
        label: `Fr`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'Sa',
        label: `Sa`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
    {
        key: 'Su',
        label: `Su`,
        children:
            <SimpleBar style={{maxHeight: 890}}>
                {
                    new Array(30).fill(null).map((_, i) => {
                        return <Carousel>
                            <div>
                                <h3 style={contentStyle}>lesson{i+1}</h3>
                            </div>
                        </Carousel>
                    })
                }
            </SimpleBar>
    },
];

const facilityTabs: TabsProps['items'] = [
    {
        key: 'All',
        label: `All`,
        children:
            <Tabs
                style={{marginRight: "10%"}}
                defaultActiveKey="1"
                items={weekTabs}
                onChange={onChange}
            />
    },
    {
        key: 'Swimming pool',
        label: `Swimming pool`,
        children: <Tabs
            defaultActiveKey="1"
            items={weekTabs}
            onChange={onChange}
        />,
    },
    {
        key: 'Fitness room',
        label: `Fitness room`,
        children: <Tabs
            defaultActiveKey="1"
            items={weekTabs}
            onChange={onChange}
        />,
    },
    {
        key: 'Squash courts',
        label: `Squash courts`,
        children: <Tabs
            defaultActiveKey="1"
            items={weekTabs}
            onChange={onChange}
        />,
    },
    {
        key: 'Sports hall',
        label: `Sports hall`,
        children: <Tabs
            defaultActiveKey="1"
            items={weekTabs}
            onChange={onChange}
        />,
    }
];

const UserLesson: React.FC = () => {
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
    const [mode, setMode] = useState<TabPosition>('top');
    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    // useEffect(() => {
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
    // }, []);
    //
    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>Error!</div>;
    // }

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    const handleModeChange = (e: RadioChangeEvent) => {
        setMode(e.target.value);
    };

    const prefixSelector = (
        <Form.Item name="prefix1" noStyle>
            <Select style={{width: 120}}>
                <Option value="all">Variety</Option>
                <Option value="name">Name</Option>
                <Option value="description">Description</Option>
            </Select>
        </Form.Item>
    );

    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>
            <CssBaseline />
            <Content style={{marginTop: "5%"}}>
                <Row>
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
                <SimpleBar style={{maxHeight: "88%"}}>
                    <Tabs
                        style={{
                            width: "100%",
                            height: "100%"
                        }}
                        defaultActiveKey="1"
                        tabPosition= "left"
                        items={facilityTabs}
                    />
                </SimpleBar>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default UserLesson;