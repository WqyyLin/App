import React, {useEffect, useState} from 'react';
import {CheckOutlined, KeyOutlined, MailOutlined, PlusOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, Modal, Row, Typography, Upload,} from 'antd';
import {Link, useNavigate,useLocation} from "react-router-dom";
import type {RcFile, UploadProps} from 'antd/es/upload';
import type {UploadFile} from 'antd/es/upload/interface';
import ImgCrop from 'antd-img-crop';
import {HomeWrapper} from '../../js/style';
import MyBottomNavigation from '../../components/footbar'
import CssBaseline from "@material-ui/core/CssBaseline";
import validator from 'validator';
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactModal from "react-modal";
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { createTheme, responsiveFontSizes, ThemeProvider,createStyles, makeStyles,Theme} from '@material-ui/core/styles';

interface Information {
    message?: string;
}

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const {Text} = Typography;

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

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

const RegisterPage: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [infos, setInfo] = useState<Information>();
    const navigate = useNavigate();

    const classes = useStyles();

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const onFinish = (values: any) => {
        
        fetch('http://localhost:8080//user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
                if(data.ercode == 201){
                    console.log(data);
                    // alert('Register successfully!')
                    setInfo(data);
                    handleClickOpen();
                    navigate('/login')
                }else if(data.ercode == 400){
                    console.log(data);
                    setInfo(data);
                    handleClickOpen();
                }else{
                    console.log(data);
                    setInfo(data);
                    handleClickOpen();
                }

            })
            .catch(err => {
                // setInfo(err);
                // handleClickOpen();
                console.error(err);
            })
    };
    // const navigate = useNavigate();
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
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
  
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
      if (!validator.isEmail(e.target.value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    };

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf('/') + 1));
    };

    const handleChange: UploadProps['onChange'] = ({fileList: newFileList}) =>
        setFileList(newFileList);

    const [password, setPassword] = useState(""); 
    const [strength, setStrength] = useState(0);   
    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        // get the input value from event object
        const value = e.target.value;
        // update the state with the new value
        setPassword(value);
        // do other things with the value if needed
        // calculate the password strength
        calculateStrength(value);
        };    

      // define calculateStrength function to calculate password strength
    const calculateStrength = (value:any) => {
        // your logic to calculate password strength
        let strength = 0;
        if (value.length >= 6) {
        strength++;
        }
        if (value.match(/[a-z]/) && value.match(/[A-Z]/)) {
        strength++;
        }
        if (value.match(/\d/)) {
        strength++;
        }
        if (value.match(/[^a-zA-Z0-9]/)) {
        strength++;
        }
        // update the state with the new strength
        setStrength(strength);
    };    

  // define renderStrengthMeter function to render strength indicator
  const renderStrengthMeter = (strength:any) => {
    // your logic to render strength indicator
    const colors = ["red", "orange", "yellow", "green", "blue"];
    return (
      <div className="strength-meter">
        {colors.map((color, index) => (
          <div
            key={index}
            className={`strength-meter-bar ${color}`}
            style={{
              width: `${strength > index ? 20 : 0}%`
            }}
          ></div>
        ))}
      </div>
    );
    }

    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8, fontFamily:'Gorlock'}}>Upload</div>
        </div>
    );
    return (
        <HomeWrapper style={{height: screenHeight, width: screenWidth}}>
            <CssBaseline />
            <Form
                className=''
                labelCol={{span: 4}}
                wrapperCol={{span: 14}}
                layout="horizontal"
                name="login"
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                style={{maxWidth: 600}}
            >
                <Row>
                <Link to={'/login'}><svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5284" width="50" height="50" style={{position: 'fixed', top: 0, left: 0}} ><path d="M675.328 117.717333A425.429333 425.429333 0 0 0 512 85.333333C276.352 85.333333 85.333333 276.352 85.333333 512s191.018667 426.666667 426.666667 426.666667 426.666667-191.018667 426.666667-426.666667c0-56.746667-11.093333-112-32.384-163.328a21.333333 21.333333 0 0 0-39.402667 16.341333A382.762667 382.762667 0 0 1 896 512c0 212.074667-171.925333 384-384 384S128 724.074667 128 512 299.925333 128 512 128c51.114667 0 100.8 9.984 146.986667 29.12a21.333333 21.333333 0 0 0 16.341333-39.402667z m-324.693333 373.013334l174.464-174.485334a21.141333 21.141333 0 0 0-0.192-29.973333 21.141333 21.141333 0 0 0-29.973334-0.192l-208.256 208.256a20.821333 20.821333 0 0 0-6.122666 14.976c0.042667 5.418667 2.133333 10.837333 6.314666 14.997333l211.178667 211.2a21.141333 21.141333 0 0 0 29.973333 0.213334 21.141333 21.141333 0 0 0-0.213333-29.973334l-172.629333-172.629333 374.997333 2.602667a20.693333 20.693333 0 0 0 21.034667-21.034667 21.482667 21.482667 0 0 0-21.333334-21.333333l-379.242666-2.624z" fill="#3D3D3D" p-id="5285"></path></svg></Link>
                    <Typography.Title level={1} style={{margin: 0, marginBottom: 20, fontFamily:'airMitalic'}}>
                        Sign Up
                    </Typography.Title>
                </Row>
                <Form.Item label="" valuePropName="fileList" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 0
                }}>
                    <ImgCrop showGrid rotationSlider aspectSlider showReset cropShape="round" modalTitle="Crop Head">
                        <Upload
                            action={"http://localhost:8080/app/profilePhoto/"+ sessionStorage.getItem("email")}
                            method="PUT"
                            listType="picture-circle"
                            fileList={fileList}
                            onPreview={handlePreview}
                            onChange={handleChange}
                            multiple={true}
                            maxCount={1}
                        >{fileList.length >= 1 ? null : uploadButton}
                        </Upload>
                    </ImgCrop>
                    <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                        <img alt="example" style={{width: '100%'}} src={previewImage}/>
                    </Modal>
                </Form.Item>

                <Form.Item name="name"
                           rules={[{required: true, message: 'Please input your username!'},
                            {
                                pattern: /^[a-zA-Z0-9\u4e00-\u9fa5]{6,10}$/,
                                message: "Your name must contain 6 to 10 characters",
                            },
                        ]}
                           style={{marginBottom: 0}}
                >
                    <Input style={{
                        minHeight: '65px',
                        border: 0,
                        borderBottom: '1px solid black',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        fontSize: '12px',
                        backgroundColor: 'transparent'

                    }} prefix={<UserOutlined/>} placeholder="Username"/>
                </Form.Item>

                <Form.Item name="email"
                           rules={[{
                                type: "email",
                                message: "Please enter a valid email address",
                            },
                            {required: true, message: 'Please input your email!'}]}
                           style={{marginBottom: 0}}>
                    <Input 
                        type="text"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailChange}
                        style={{
                        minHeight: '65px',
                        border: 0,
                        borderBottom: '1px solid black',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        fontSize: '12px',
                        backgroundColor: 'transparent'
                    }} prefix={<MailOutlined/>} placeholder="Email"/>
                </Form.Item>

                <Form.Item

                    validateTrigger="onChange"
                    rules={[
                    {
                        required: true,
                        message: "Please input your password!",
                    },
                    {
                        pattern: /\w{6,}/,
                        message: "The password must contain at least 6 characters",
                    },
                    ]}
                    name="password"
                    //rules={[{required: true, message: 'Please input your password!'}]}
                    style={{marginBottom: 0}}
                >
                    <Input.Password 
                        iconRender={visible =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }  
                        onChange={handleChangePassword}
                                            
                        // minLength={6}
                        style={{
                        minHeight: '65px',
                        border: 0,
                        borderBottom: '1px solid black',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        fontSize: '12px',
                        backgroundColor: 'transparent'
                    }} prefix={<KeyOutlined/>} placeholder="Password"/>
                    
                    {/* {renderStrengthMeter(strength)}        */}
                </Form.Item>

                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    rules={[
                        {required: true, message: 'Please confirm your password!'},
                        ({getFieldValue}) => ({
                            // 添加自定义验证函数
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Passwords must match');
                            },
                        }),
                    ]}
                >
                    <Input.Password style={{
                        minHeight: '65px',
                        border: 0,
                        borderBottom: '1px solid black',
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                        fontSize: '12px',
                        backgroundColor: 'transparent'
                    }} prefix={<CheckOutlined/>} placeholder="Confirming"/>
                </Form.Item>

                <Form.Item style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Button type="primary" htmlType="submit" style={{
                        minWidth: '300px',
                        minHeight: '50px',
                        boxShadow: '0 9px 10px rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        borderRadius: 0,
                        fontFamily: 'AARDC',
                        
                    }}
                    // ><Link to='/login'>R E G I S T E R</Link></Button>
                    >R E G I S T E R</Button>
                </Form.Item>
                <MyBottomNavigation/>
                <Row style={{height: '75%', width: '100%'}} align='middle' justify='center'>
                    <Text type="secondary" style={{fontFamily:'Ellipsoideogram'}}>Do you have an account? <Link to='/login' style={{fontWeight: 'bold'}}>SIGN
                        IN</Link></Text>
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
            </Form>
            
            {/* <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Email" value="email" icon={<MailOutlined />} />
                <BottomNavigationAction label="QQ" value="recents" icon={<QqOutlined />} />
                <BottomNavigationAction label="WeChat" value="favorites" icon={<WechatOutlined />} />
                <BottomNavigationAction label="Telephone" value="telephone" icon={<PhoneOutlined />} />
            </BottomNavigation> */}

        </HomeWrapper>
    );
};

export default () => <RegisterPage/>;