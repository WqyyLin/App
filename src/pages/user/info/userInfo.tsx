import React, {useEffect, useState} from 'react';
import {EditOutlined, UserOutlined, LogoutOutlined} from '@ant-design/icons';
import {Avatar, Card, Carousel, Col, Form, Input, Layout, Row, Select, theme} from 'antd';
import {Link, useNavigate} from "react-router-dom";
import MyFootNav from "../../../components/footnav";
import {AddOutlined, DeleteOutline} from "@material-ui/icons";
import member from "../../../img/member.jpg"
import "./userInfo.css"
import '../../../@type/.d.ts'
import clsx from 'clsx';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import CardMembershipTwoToneIcon from '@material-ui/icons/CardMembershipTwoTone';
import SettingsApplicationsTwoToneIcon from '@material-ui/icons/SettingsApplicationsTwoTone';
import CreditCardTwoToneIcon from '@material-ui/icons/CreditCardTwoTone';
import GroupTwoToneIcon from '@material-ui/icons/GroupTwoTone';
import RedoTwoToneIcon from '@material-ui/icons/RedoTwoTone';
import WorkOutlineTwoToneIcon from '@material-ui/icons/WorkOutlineTwoTone';
const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
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



function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`action-tabpanel-${index}`}
        aria-labelledby={`action-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
        position: 'relative',
        minHeight: 200,
      },
      fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
      fabGreen: {
        color: theme.palette.common.white,
        backgroundColor: green[500],
        '&:hover': {
          backgroundColor: green[600],
        },
      },
    }),
  );

const contentStyle: React.CSSProperties = {
    margin: 0,
    width: '90px',
    height: '90px',
    color: '#fff',
    borderRadius: 20,
    textAlign: 'center',
    background: '#a6b3c9',
};

const UserInfo: React.FC = () => {
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
    // const { children, value, index, ...other } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: unknown, newValue: number) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index: number) => {
      setValue(index);
    };

    // const {
    //     token: {colorBgContainer},
    // } = theme.useToken();

    const theme = useTheme();
    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen,
    };
  
    const fabs = [
      {
        color: 'primary' as 'primary',
        className: classes.fab,
        icon: <AddIcon />,
        label: 'Add',
      },
      {
        color: 'secondary' as 'secondary',
        className: classes.fab,
        icon: <EditIcon />,
        label: 'Edit',
      },
      {
        color: 'inherit' as 'inherit',
        className: clsx(classes.fab, classes.fabGreen),
        icon: <UpIcon />,
        label: 'Expand',
      },
    ];
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
      };

    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

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

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>Error!</div>;
    // }

    return (
        <Layout style={{width: screenWidth, height: screenHeight}}>
            <CssBaseline />
            <Content style={{marginTop: "5%"}}>
                <Row
                    gutter={[10, 20]}
                    justify="center"
                    align='middle'
                    style={{marginLeft: "2%", marginRight: "2%"}}
                >
                    <Col span={22}>
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={member}
                                />
                            }
                            actions={[
                                <EditOutlined key="edit"/>,
                                <LogoutOutlined key="logout"/>
                            ]}
                        >
                            <Meta
                                style={{
                                    minHeight: "100px"
                            }}
                                avatar={<Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}/>}
                                title={"Lin"}
                                description="The user is too lazy to leave a personal signature"
                            />
                        </Card>
                    </Col>
                </Row>
                <Row
                    gutter={[30, 30]}
                    justify="center"
                    align='middle'
                    style={{marginTop: "10%"}}
                >
                    <Col span={7}>
                        <Carousel>
                            <div onMouseEnter={onHover} onMouseLeave={onHover}>
                                <div style={contentStyle}>
                                    <Link to='/user/order' style={{color:'white'}}>
                                    <br/>   
                                    <AppsTwoToneIcon />
                                    <h3 style={{margin: 0}}>Order</h3></Link>
                                    <br/>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Carousel>
                            <div>
                                <div style={contentStyle}>
                                <Link to='/user/orderLesson' style={{color:'white'}}>
                                    <br/>
                                    <WorkOutlineTwoToneIcon />
                                    <h3 style={{margin: 0}}>Lesson</h3></Link>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Carousel>
                            <div>
                                <div style={contentStyle}>
                                    <Link to='/register' style={{color:'white'}}>
                                    <br/>
                                    <CardMembershipTwoToneIcon />
                                    <h3 style={{margin: 0}}>Card</h3></Link>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Carousel>
                            <div>
                                <div style={contentStyle}>
                                    <br/>
                                    <GroupTwoToneIcon />
                                    <h3 style={{margin: 0}}>VIP</h3>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Carousel>
                            <div>
                                <div style={contentStyle}>
                                    <br/>
                                    <CreditCardTwoToneIcon />
                                    <h3 style={{margin: 0}}>Coupon</h3>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                    <Col span={7}>
                        <Carousel>
                            <div>
                                <div style={contentStyle}>
                                    <Link to='/user/setting' style={{color:'white'}}>
                                    <br/>
                                    <SettingsApplicationsTwoToneIcon />
                                        <h3 style={{margin: 0}}>Setting</h3></Link>
                                </div>
                            </div>
                        </Carousel>
                    </Col>
                </Row>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default UserInfo;