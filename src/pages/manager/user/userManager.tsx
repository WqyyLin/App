import React, {useEffect, useState} from 'react';
import {
    EditOutlined,
    EllipsisOutlined,
    KeyOutlined,
    MailOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import {Avatar, Button, Card, Col, Form, Input, Layout, Modal, Row, Select, theme} from 'antd';
import MyFootNav from "../../../components/footmanager";
import {Console} from "inspector";
import { View } from 'react-native'
const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;


// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

interface Information {
    information: any;
}

interface User {
    id: number;
    email: string;
    name: string;
    money: number;
    member: boolean;
    head: any;
}

const onClickKey = () => {
    alert("Password reset succeeded!")
};

const onSearch = (value: string) => console.log(value);
const UserManager: React.FC = () => {
    const [form] = Form.useForm();
    const [open, setOpen] = useState(false);
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    useEffect(() => {
        fetch("http://localhost:8080/user/manager/users")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((data) => {
                setInfo(data);
            })
            .catch((error) => {
                console.log(error)
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    const prefixSelector1 = (
        <Form.Item name="prefix1" noStyle>
            <Select style={{width: 90}}>
                <Option value="name">Name</Option>
                <Option value="email">Email</Option>
                <Option value="money">Money</Option>
                <Option value="all">Variety</Option>
            </Select>
        </Form.Item>
    );

    const prefixSelector2 = (
        <Form.Item name="prefix2" noStyle>
            <Select style={{
                marginLeft: 1,
                width: 100
            }}>
                <Option value="member">Member</Option>
                <Option value="outsider">Outsider</Option>
                <Option value="all">All</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleKeyOk = (props: any) => {
        fetch('http://localhost:8080/user/manager/users/'+ props, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.error(err);
            });
        setOpen(false);
    };

    const handleKeyCancel = () => {
        setOpen(false);
    };

    return (
        <Layout style={{width: "100%", height: "100%"}}>
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
                                    addonBefore={prefixSelector1}
                                    addonAfter={prefixSelector2}
                                    style={{width: '100%'}}/>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col span={1}></Col>
                </Row>

                <Row
                    gutter={[10, 20]}
                    justify="center"
                    align='middle'
                    style={{marginLeft: "2%", marginRight: "2%"}}
                >
                    {
                        infos?.information.map((user: User) => {
                            return <Col span={12}>
                                <Card
                                    hoverable
                                    style={{
                                        width: "100%",
                                    }}
                                    actions={[
                                        <KeyOutlined key="key" onClick={showModal}/>,
                                        <EditOutlined key="edit"/>,
                                        <MailOutlined key="email"/>,
                                    ]}
                                    title={user.name}
                                >
                                    <Meta
                                        avatar={user.head?<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}/> : <Avatar icon={<UserOutlined />}/>}
                                        title={user.money+"￥"}
                                        description={user.member ? "Member" : "Outsider" }
                                    />
                                    <Modal
                                        open={open}
                                        title="Title"
                                        onOk={() => handleKeyOk(user.email)}
                                        onCancel={handleKeyCancel}
                                    >
                                        <p>Please confirm to reset the password of the account</p>
                                    </Modal>
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </Content>


            <MyFootNav/>
        </Layout>
        
    );
};

export default UserManager;