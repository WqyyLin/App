import React, {useEffect, useState} from 'react';
import {EditOutlined, UserOutlined,} from '@ant-design/icons';
import {Avatar, Card, Col, Form, Input, Layout, Row, Select, theme} from 'antd';
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

const UserInfo: React.FC = () => {
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
  
    

    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        fetch("http://localhost:8080/user/manager/facilities")
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


    
    return (
        <Layout style={{width: "100%", height: "100%"}}>
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
                                <EditOutlined key="edit"/>
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
                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="action tabs example"
                        >
                        <Tab label="Your Lessons and Activities" {...a11yProps(0)} />
                        <Tab label="Personal Information" {...a11yProps(1)} />
                        <Tab label="Settings" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                        Your Lessons and Activities
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                        Personal Information
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        Settings
                        </TabPanel>
                    </SwipeableViews>
                    {fabs.map((fab, index) => (
                        <Zoom
                        key={fab.color}
                        in={value === index}
                        timeout={transitionDuration}
                        style={{
                            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
                        }}
                        unmountOnExit
                        >
                        <Fab aria-label={fab.label} className={fab.className} color={fab.color}>
                            {fab.icon}
                        </Fab>
                        </Zoom>
                    ))}
                    </div>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default UserInfo;