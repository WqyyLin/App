import React, {useEffect, useState} from 'react';
import { View, Text, Switch} from 'react-native';
import Button from '@material-ui/core/Button';
//import { useNavigation } from '@react-navigation/native';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from 'antd'
import {Link} from "react-router-dom";
import { Dimensions, Pressable } from 'react-native';
import {Settings} from '../../../js/settings';
import Typography from '@material-ui/core/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider,createStyles, makeStyles,Theme} from '@material-ui/core/styles';
import { Divider,List,ListItem,ListItemText,ListItemSecondaryAction,IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { AppBar,Toolbar } from '@material-ui/core';
import { linkStyle } from "../../../js/settingsStyle";
import { Col, Row, Statistic,Skeleton } from 'antd';
import CountUp from 'react-countup';
import { Card } from 'antd';
import Footer from "../../../components/footer"
import { valueToNode } from '@babel/types';
const { Meta } = Card;
// 定义一个接口，包含title, description, value, onChange四个属性
interface SettingItemProps {
    title: string;
    description: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

interface DataType {
    code?:number;
    money?:number;
}

interface valueType {
    money?:any;
}

const formatter = (value: number|string) => 
{
    if(typeof value ==="number"){
        return <CountUp end={value} separator="," />;
    }
}


// 使用React.FC<SettingItemProps>来指定组件的类型
const SettingItem: React.FC<SettingItemProps> = ({
    title,
    description,
    value,
    onChange,
  }) => {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor:'whitesmoke', marginBottom: 5, marginTop: 5}}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr',flex:1, marginBottom: 5, marginTop: 5}}>{title}</Text>
        <Text style={{ color: '#999',textAlign: 'center',flex:2}}>{description}</Text>
        <Switch value={value} onValueChange={onChange} style={{ alignSelf: 'flex-end' }}/>
      </View>
    );
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

  const Wallet:React.FC = () => {
    const [loading, setLoading] = useState(true);

    const onChange = (checked: boolean) => {
      setLoading(!checked);
    };
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [data, setData] = useState<DataType[]>([]);
    const [money, setMoney] = useState<Number | String>();
    const [error, setError] = useState<Error | null>(null);

    const classes = useStyles();
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

    useEffect(() => {
        fetch("http://localhost:8080/app/wallet")
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw response;
                }
            })
            .then((response) => {
                console.log(response)
                setData(response)
                setMoney(response.money)
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);


  // 使用useState来管理设置项的状态
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
// 获取屏幕的高度
  const screenHeight_1 = Dimensions.get('window').height;
//   // 使用useNavigation来获取导航对象
//   const navigation = useNavigation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Settings style={{width:screenWidth, height:screenHeight}}>
    <View style={{ flex: 1}} >
    
    <AppBar position="fixed" color="default">
        <Toolbar>
            <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2528" width="30" height="30" style={{position: 'relative', top: 0, left:350}}><path d="M727.798385 824.531461c-125.463063 0-258.785539-42.016708-258.785538-119.903966s133.310495-119.903966 258.785538-119.903966 258.785539 42.016708 258.785539 119.903966-133.358418 119.903966-258.785539 119.903966z m0-190.003697c-127.571686 0-208.945361 41.525494-208.945361 70.099731s81.397637 70.099731 208.969323 70.099731S936.731766 733.225693 936.731766 704.627495s-81.385656-70.099731-208.933381-70.099731zM727.798385 1023.868211c-125.463063 0-258.785539-42.028688-258.785538-119.915947 0-17.56387 7.272353-43.610156 41.932842-67.931204l28.598198 40.734761c-13.346625 9.416918-20.690862 19.061472-20.690863 27.196443 0 28.586217 81.373675 70.08775 208.945361 70.08775s208.93338-41.525494 208.933381-70.111712c0-8.134971-7.368199-17.779525-20.714824-27.1605l28.598198-40.734761c34.648508 24.321048 41.932842 50.31941 41.932842 67.919223-0.011981 77.887259-133.322476 119.915947-258.749597 119.915947z" p-id="2529" fill="#556bee"></path><path d="M727.798385 926.823634c-125.463063 0-258.785539-42.016708-258.785538-119.903966 0-17.575851 7.272353-43.622136 41.932842-67.943185l28.598198 40.734761c-13.346625 9.428899-20.690862 19.073453-20.690863 27.208424 0 28.574237 81.373675 70.075769 208.945361 70.075769s208.93338-41.525494 208.933381-70.099731c0-8.134971-7.368199-17.779525-20.714824-27.172481l28.598198-40.734761c34.648508 24.321048 41.932842 50.31941 41.932842 67.931204-0.011981 77.887259-133.322476 119.903966-258.749597 119.903966zM645.09484 171.577208h-359.424359a49.87612 49.87612 0 0 1-49.804236-49.804235V49.804235A49.864139 49.864139 0 0 1 285.646519 0h359.42436a49.852159 49.852159 0 0 1 49.792254 49.804235v71.968738a49.864139 49.864139 0 0 1-49.768293 49.804235z m0-49.804235z m-359.424359-71.968738v71.968738h359.340494l0.083865-71.968738zM475.518428 1024H112.116439A74.784228 74.784228 0 0 1 37.416076 949.299637V117.076495a74.784228 74.784228 0 0 1 74.700363-74.700363h51.337779v49.804235H112.116439a24.908108 24.908108 0 0 0-24.896128 24.896128v832.223142a24.920089 24.920089 0 0 0 24.896128 24.896128h363.401989zM893.301322 560.582193h-49.768293V117.076495a24.920089 24.920089 0 0 0-24.896127-24.896128h-57.507898V42.376132h57.507898a74.784228 74.784228 0 0 1 74.700363 74.700363z" p-id="2530" fill="#556bee"></path><path d="M230.235264 237.974868h347.551375v49.804236H230.235264zM223.741664 432.854756h506.680519v49.804235H223.741664z" p-id="2531" fill="#556bee"></path></svg>
   
            <IconButton component={Link} to="/user/info" size='medium' style={{position: 'relative', top: 0, left: -40}}>
                <ArrowBackIosIcon />
            </IconButton>        
                  
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10, left:-45}}>            
            <View style={{position: 'absolute', left: 0, width: '100%' }}>
                <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                    Wallet
                </Text>
            </View>
        </View>
        
        </Toolbar>
            </AppBar> 
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Card
                // hoverable
                // loading={loading}
                style={{ width: screenWidth, paddingTop:50, marginBottom:50,display:"inline-block",marginLeft:"auto",marginRight:"auto",backgroundColor:"transparent"}}
                cover={<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5950" width="200" height="200"><path d="M512 64c249.6 0 448 198.4 448 448s-198.4 448-448 448-448-198.4-448-448S262.4 64 512 64M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0L512 0z" p-id="5951" fill="#556bee"></path><path d="M716.8 256l-128 230.4 115.2 0 0 64L544 550.4l0 44.8 153.6 0 0 64L544 659.2l0 121.6-64 0 0-121.6L332.8 659.2l0-64 147.2 0L480 550.4 332.8 550.4l0-64L448 486.4 320 256l64 0 128 230.4 12.8 0 128-230.4L716.8 256z" p-id="5952" fill="#556bee"></path></svg>}
            >
            <Row gutter={80}>
                <Col span={40} style={{display:"inline-block",marginLeft:"auto",marginRight:"auto"}}>
                    <Statistic title="My Balance" value={money as unknown as import("f:/APP/teamApp/node_modules/antd/es/statistic/utils").valueType} formatter={formatter}/>
                </Col>
             </Row>
             {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
            </Card>
    {/* <div className={classes.root} style={{marginBottom:5, marginTop:5, backgroundColor:'whitesmoke'}}>
        <Button variant="outlined" color="primary" title="switch account" style={{width:screenWidth,height:50,fontFamily:'angltrr'}}>Recharge</Button>
      </div> */}
      <div className={classes.root} style={{marginBottom:5, marginTop:5, display:"inline-block",marginLeft:"auto",marginRight:"auto"}}>
        <Button variant="outlined" color="secondary" title="Log Out" onClick={handleClickOpen} style={{width:screenWidth - 180,height:50,fontFamily:'angltrr'}}>Recharge</Button>
        <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"This will log out and return."}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Do you want to do it continually?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" component={Link} to="/register">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      </div>
      <Footer></Footer>       
    </View>
    </Settings>
  );
};

export default Wallet;