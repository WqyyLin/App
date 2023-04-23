import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Typography} from 'antd';
import {KeyOutlined, MailOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {HomeWrapper} from "../../js/style";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Navigate } from 'react-router-dom';
import "./login.css"
import { useNavigate } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactModal from "react-modal";
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { createTheme, responsiveFontSizes, ThemeProvider,createStyles, makeStyles,Theme} from '@material-ui/core/styles';
const {Text} = Typography;

interface Information {
    message?: string;
}


const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};


let theme = createTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme: Theme) =>
createStyles({
      root: {
      '& > *': {
          margin: theme.spacing(0),
      },
      },
  }),
  );


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const LoginPage: React.FC = () => {
  // 定义一个状态变量，表示是否显示弹窗
    const [showModal, setShowModal] = React.useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [open, setOpen] = React.useState(false);
    const [infos, setInfo] = useState<Information>();

    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const navigate = useNavigate();

    // const MyComponent = () => {
    //     const navigate = useNavigate();
      
    //     const handleClick = () => {
    //       navigate("/some-url");
    //     };
    // }

    const onFinish = (values: any) => {
        fetch('http://localhost:8080/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(values)
        })
            .then((res) => {
                if(res.ok){
                    // console.log(111111111)
                    return res.json();
                }else{
                    throw res;
                }
            })
            .then(data => {
                console.log(data);
                if(data.ercode == 201){
                    // 存储登录信息到sessionStorage
                    sessionStorage.setItem("email", data.user.email);
                    //sessionStorage.setItem("token", data.token);
                    console.log(sessionStorage.getItem('email'))
                    // return <Navigate to="/user/facility"/>;
                    // 设置isAuthenticated为true，进行页面跳转
                    setIsAuthenticated(true);
                    navigate("/user/facility", { replace: true });
                }
                else if(data.ercode == 400){
                    setInfo(data);
                    console.log(sessionStorage.getItem('email'))    
                    // setIsAuthenticated(true); 
                    console.log(isAuthenticated)
                    // navigate("/user/facility", { replace: true });
                    setShowModal(true);
                    handleClickOpen();
                }else{
                    setInfo(data);
                    handleClickOpen();
                }
            })
            .catch(err => {
                console.error(err);
            });
            // 如果isAuthenticated为true，跳转到/user/facility路径
            console.log(isAuthenticated)
            // if (isAuthenticated) {
            //     // 使用navigate函数跳转
            //     navigate("/user/facility", { replace: true });
            // }
    };


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
    return (
        <HomeWrapper>
            <CssBaseline />
            <Row style={{height: screenHeight}} align='middle' justify='center'>
                <Col span={3}></Col>
                <Col span={18} style={{top: '25%'}}>
                    <Row>
                    <Link to={'/user/facility'}><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5284" width="50" height="50" style={{position: 'fixed', top: 0, left: 0}}><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m-324.693333 373.013334l174.464-174.485334a21.141333 21.141333 0 0 0-0.192-29.973333 21.141333 21.141333 0 0 0-29.973334-0.192l-208.256 208.256a20.821333 20.821333 0 0 0-6.122666 14.976c0.042667 5.418667 2.133333 10.837333 6.314666 14.997333l211.178667 211.2a21.141333 21.141333 0 0 0 29.973333 0.213334 21.141333 21.141333 0 0 0-0.213333-29.973334l-172.629333-172.629333 374.997333 2.602667a20.693333 20.693333 0 0 0 21.034667-21.034667 21.482667 21.482667 0 0 0-21.333334-21.333333l-379.242666-2.624z" fill="#3D3D3D" p-id="5285"></path></svg></Link>
                        <Typography.Title level={1} style={{margin: 0, fontFamily:'blackJar'}}>
                            Sign In
                        </Typography.Title>
                    </Row>
                    <br/>
                    <Row align='middle' justify='center'>
                        <Col>
                            <Form
                                className="login"
                                name="login"
                                labelCol={{span: 8}}
                                wrapperCol={{span: 16}}
                                style={{maxWidth: 300}}
                                initialValues={{remember: true}}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item
                                    name="email"
                                    rules={[{
                                        type: "email",
                                        message: "Please enter a valid email address",
                                    },
                                    {required: true, message: 'Please input your email!'}]}
                                   style={{marginBottom: 0}}
                                >
                                    <Input
                                        className='login'
                                        style={{
                                            minHeight: '65px',
                                            border: 0,
                                            borderBottom: '1px solid black',
                                            borderBottomLeftRadius: 0,
                                            borderBottomRightRadius: 0,
                                            fontSize: '12px',
                                            minWidth: '300px',
                                            backgroundColor: 'transparent'
                                        }} prefix={<MailOutlined/>} placeholder="Email"/>
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    rules={[{required: true, message: 'Please input your password!'}]}
                                    style={{marginBottom: 0}}
                                >
                                    <Input.Password
                                        className='login'
                                        style={{
                                            minHeight: '65px',
                                            border: 0,
                                            borderBottom: '1px solid black',
                                            borderBottomLeftRadius: 0,
                                            borderBottomRightRadius: 0,
                                            fontSize: '12px',
                                            minWidth: '300px',
                                            backgroundColor: 'transparent',
                                        }} prefix={<KeyOutlined/>} placeholder="Password"/>
                                </Form.Item>

                                <Form.Item style={{textAlign: 'right', marginBottom: 0}}>
                                    <Link to='/register' style={{color: 'gray'}}>Forget Password?</Link>
                                </Form.Item>

                                <Form.Item>
                                    <Button type="primary" htmlType="submit" style={{
                                        minWidth: '300px',
                                        minHeight: '50px',
                                        boxShadow: '0 9px 10px rgba(0, 0, 0, 0.5)',
                                        borderRadius: 0,
                                        fontFamily: 'AARDC'
                                    }}>
                                        SIGN IN
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                    <div className={classes.root} style={{marginBottom:5, marginTop:5, backgroundColor:'whitesmoke'}}>
                          <Dialog
                            open={open}
                            TransitionComponent={Transition}
                            keepMounted
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-slide-title"
                            aria-describedby="alert-dialog-slide-description"
                        >
                            <DialogTitle id="alert-dialog-slide-title" style={{fontFamily:"Ihop",fontSize:18}}>{infos?.message}</DialogTitle>
                            <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                            </Button>
                            </DialogActions>
                        </Dialog></div>

                </Col>
                <Col span={3}></Col>
                <Row style={{height: '75%', width: '100%'}} align='middle' justify='center'>
                    <Text type="secondary" style={{fontFamily:'Ellipsoideogram'}}>Don't have an account? <Link to='/register' style={{fontWeight: 'bold'}}>SIGN
                        UP</Link></Text>
                </Row>
            </Row>
            {/* 弹窗组件 */}
            {/* <ReactModal
                            isOpen={showModal} // 是否显示弹窗
                            onRequestClose={() => setShowModal(false)} // 点击遮罩或按ESC时关闭弹窗
                            contentLabel="Error Message" // 弹窗的内容标签，用于屏幕阅读器
                          >
                            <h2>Something went wrong</h2>
                            <p>Please try again later</p>
                            <button onClick={() => setShowModal(false)}>Close</button>
                          </ReactModal> */}

        </HomeWrapper>
                          
    );
};

export default LoginPage;