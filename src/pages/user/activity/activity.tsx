import React, {useEffect, useState} from 'react';
import {EditOutlined, UserOutlined, DownOutlined } from '@ant-design/icons';
import {Dropdown, message, Space, Avatar, List, Skeleton, Card, Carousel, Col, Form, Input, Layout, Row, Select, theme} from 'antd';
import MyFootNav from "../../../components/footnav";
import {AddOutlined, DeleteOutline} from "@material-ui/icons";
import type { MenuProps } from 'antd';
import member from "../../../img/member.jpg"
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';
import CssBaseline from "@material-ui/core/CssBaseline";
import { View, Text, Switch} from 'react-native';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useNavigate } from 'react-router-dom'
import { AppBar,Toolbar } from '@material-ui/core';
import {Link,useLocation} from "react-router-dom";
import { Divider,ListItem,ListItemText,ListItemSecondaryAction,IconButton } from '@material-ui/core'

const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;

interface ActivityType{
    name?:String;
}

interface DataType {
    fid?:number;
    Ad_title?: string;
    Ad_describtion?: string;
    name?:string;
    holdpeople?:number;
    groundnumber?:number;
    starttime?:number;
    endtime?:number;
    activity?:ActivityType[];
    email?: string;
    loading: boolean;
}

interface Information {
    facilities: any;
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

const Activity: React.FC = () => {
    const location = useLocation(); 
    const { id, name } = location.state;
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
        fetch("/facilities")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((response) => {
                console.log(response)
                setInfo(response.facilities);
                setInitLoading(false);
                setData(response.facilities);
                setList(response.facilities);
                console.log(response.facilities)
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const navigate = useNavigate();
    // 使用useNavigate import { useNavigate } from “react-router-dom”;

    // function ListItem() { 
    //     const navigate = useNavigate();
    //     function handleClick() { 
    //         navigate({ pathname: "/newpage", state: { id: item.id } }); 
    //     }
    //     return ( <List.Item actions={[<a key="book" onClick={handleClick}>Book</a>]} > // 其他内容 </List.Item> ); 
    // }

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

    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>
            <Content style={{marginTop: "5%", height: "100%"}}>
            <AppBar position="fixed" color="default">
                <Toolbar>
                    <IconButton component={Link} to="/user/facility" size='medium' style={{position: 'relative', top: 0, left: -10}}>
                        <ArrowBackIosIcon />
                    </IconButton>              
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10, left:-30}}>            
                    <View style={{position: 'absolute', left: 0, width: '100%' }}>
                        <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                            {name}
                        </Text>
                    </View>
                </View>
                
                </Toolbar>
                    </AppBar> 
                    <Toolbar />
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
                                    placeholder="What you want to search for"
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
                                actions={[
                                    <a key="book" onClick={() => navigate("/facility?id="+item.fid, { state: { id: item.fid } })}>Book</a>
                                ]}
                            >
                                <Skeleton avatar title={false} loading={item.loading} active>
                                    <List.Item.Meta
                                        title= {item.name}
                                        // description={item.activity?.map((act:ActivityType) => <p>{act.name}</p>)}
                                        description={
                                            <div>
                                            <p style={{fontSize:18}}>{item.Ad_describtion}</p>
                                            <h1>Time: {item.starttime}:00 ~ {item.endtime}:00</h1>
                                            <p></p>
                                            </div>
                                    }

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

export default Activity;