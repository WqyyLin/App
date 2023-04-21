import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Input, Row, Typography} from 'antd';
import {KeyOutlined, MailOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import {HomeWrapper} from "../../js/style";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./login.css"

const {Text} = Typography;

const onFinish = (values: any) => {
    fetch('http://localhost:8080/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => {
            console.error(err);
        });
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};
const LoginPage: React.FC = () => {
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
                </Col>
                <Col span={3}></Col>
                <Row style={{height: '75%', width: '100%'}} align='middle' justify='center'>
                    <Text type="secondary" style={{fontFamily:'Ellipsoideogram'}}>Don't have an account? <Link to='/register' style={{fontWeight: 'bold'}}>SIGN
                        UP</Link></Text>
                </Row>
            </Row>
        </HomeWrapper>
    );
};

export default LoginPage;