import React, {useEffect, useState} from 'react';
import {
    EditOutlined,
    EllipsisOutlined,
    KeyOutlined,
    MailOutlined,
    SettingOutlined,
    UserOutlined
} from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import {Avatar, Card, Col, Form, Input, Layout, Row, Select, theme} from 'antd';
import MyFootNav from "../../../components/footmanager";
import {AddOutlined, DeleteOutline} from "@material-ui/icons";
import './facilityManager.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import SimpleBar from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;

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


const onClickKey = () => {
    alert("Password reset succeeded!")
};


  
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
      },
    }),
  );
  interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
  }

  interface FacilityManagerProps {
    props: Props;
    // more props here
  }

  function ScrollTop(props: Props) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return (
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.root}>
          {children}
        </div>
      </Zoom>
    );
  }


const onSearch = (value: string) => console.log(value);
const FacilityManager: React.FC<FacilityManagerProps> = (props) => {

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
    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
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

    const prefixSelector = (
        <Form.Item name="prefix1" noStyle>
            <Select style={{width: 90}}>
                <Option value="name">Name</Option>
                <Option value="description">Info</Option>
                <Option value="all">Variety</Option>
            </Select>
        </Form.Item>
    );

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    
    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>

            <Content style={{marginTop: "5%"}}>
                <Row style={{
                }}>
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
                                className="fixed-top"
                                name="variety"
                                style={{
                                    height: "100%",
                                }}
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
                <SimpleBar style={{
                        maxHeight: "88%",
                     }}>
                <Row
                    gutter={[10, 20]}
                    justify="center"
                    align='middle'
                    style={{marginLeft: "2%", marginRight: "2%"}}
                >
                    {
                        infos?.groundName.map((facility: Facility)=>{
                            return <Col span={22}>
                                <Card
                                    cover={
                                        <img
                                            style={{height: 150}}
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                        />
                                    }
                                    actions={[
                                        <EditOutlined key="edit" />,
                                        <AddOutlined key="add" />,
                                        <DeleteOutline key="delete" />
                                    ]}
                                >
                                    <Meta
                                        style={{minHeight: "100px"}}
                                        title={facility.name}
                                        description={facility.Ad_describtion}
                                    />
                                </Card>
                            </Col>
                    })
                    }
                </Row>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
                </SimpleBar>
            </Content>
            <MyFootNav/>
        </Layout>
        
    );
};

export default FacilityManager;// eslint-disable-next-line @typescript-eslint/no-unused-expressions 