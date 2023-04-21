import React, {useEffect, useState} from 'react';
import { View, Text, Switch} from 'react-native';
import Button from '@material-ui/core/Button';
//import { useNavigation } from '@react-navigation/native';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from 'antd'
import {Link} from "react-router-dom";
import { Dimensions, Pressable } from 'react-native';
import {Settings} from '../../../js/settings'
import Typography from '@material-ui/core/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider,createStyles, makeStyles,Theme} from '@material-ui/core/styles';
import { Divider,List,ListItem,ListItemText,ListItemSecondaryAction,IconButton } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

// 定义一个接口，包含title, description, value, onChange四个属性
interface SettingItemProps {
    title: string;
    description: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

// const contentStyle: React.CSSProperties = {
//     margin: 0,
//     width: '90px',
//     height: '90px',
//     color: '#fff',
//     borderRadius: 20,
//     textAlign: 'center',
//     background: '#a6b3c9',
// }

// 使用React.FC<SettingItemProps>来指定组件的类型
const SettingItem: React.FC<SettingItemProps> = ({
    title,
    description,
    value,
    onChange,
  }) => {
    return (
      <View style={{ padding: 10, flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor:'whitesmoke', marginBottom: 5, marginTop: 5}}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr',flex:1}}>{title}</Text>
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

  const SettingsPage:React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
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
  // 使用useState来管理设置项的状态
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
// 获取屏幕的高度
  const screenHeight_1 = Dimensions.get('window').height;
//   // 使用useNavigation来获取导航对象
//   const navigation = useNavigation();

  // 定义一个退出登录的函数
  const handleLogout = () => {
    // 这里可以调用你的api或者其他逻辑来实现退出登录
    alert('退出登录成功');
  };

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
        
        <View style={{ backgroundColor: '#eee', flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10}}>
            
            <View style={{alignItems: 'flex-start' }}>
                <IconButton component={Link} to="/user/info" size='medium'>
                    <ArrowBackIosIcon />
                </IconButton>
            </View>
            
            <View style={{position: 'absolute', left: 0, width: '100%' }}>
                <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                    Settings
                </Text>
            </View>
        </View>

        <List component="nav" aria-label="account folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5}}>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Account and Security</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>

        <List component="nav" aria-label="general folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5, marginTop:5}}>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>General</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>New Message Notification</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>
        <div style={{marginTop:5}}>
            {/* <div style={contentStyle}>
                <h1>Privacy<h1/>
            </div> */}

            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: '#999', fontSize:16, fontWeight:'bold'}}>Privacy</Typography>
            </ThemeProvider>
            <List component="nav" aria-label="privacy folders" style={{ backgroundColor:'whitesmoke', marginBottom: 5, marginTop: 5}}>
                <ListItem button divider>
                    <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Friend permission</span>}/>
                    <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
                </ListItem>
                <ListItem button divider style={{marginTop:5}}>
                    <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr',verticalAlign: 'middle'}}>Personal Permission Setting</span>} />
                    <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
                </ListItem>
                <ListItem button divider style={{marginTop:5}}>
                    <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr',verticalAlign: 'middle'}}>Information Collection List</span>} />
                    <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
                </ListItem>
                <ListItem button>
                    <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Plugin</span>} />
                    <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
                </ListItem>
            </List>
        </div>
        <List component="nav" aria-label="about folders" style={{ backgroundColor:'whitesmoke', marginBottom: 5, marginTop: 5}}>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Help and Feedback</span>} />
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>About APP</span>} />
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>

      {/* <SettingItem
        title="接收通知"
        description="开启后可以接收来自微信的消息通知"
        value={notificationsEnabled}
        onChange={setNotificationsEnabled}
      /> */}
      <SettingItem
        title="Dark Mode"
        description="Turned on to use dark themes."
        value={darkModeEnabled}
        onChange={setDarkModeEnabled}
      />
        {/* <Pressable style={{ backgroundColor: '#e9ccd3', justifyContent: 'flex-start', paddingLeft: 10 }} onPress={() => console.log('pressed')}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Account and Security</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: '#e9ccd3', justifyContent: 'flex-start', paddingLeft: 10 }} onPress={() => console.log('pressed')}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Permission Setting</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: '#e9ccd3', justifyContent: 'flex-start', paddingLeft: 10 }} onPress={() => console.log('pressed')}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>About APP</Text>
        </Pressable>
        <Pressable style={{ backgroundColor: '#e9ccd3', justifyContent: 'flex-start', paddingLeft: 10 }} onPress={() => console.log('pressed')}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Help and Feedback</Text>
        </Pressable> */}
      <div className={classes.root} style={{marginBottom:5, marginTop:5, backgroundColor:'whitesmoke'}}>
        <Button variant="outlined" color="primary" title="switch account" style={{width:screenWidth,height:50,fontFamily:'angltrr'}}>switch account</Button>
      </div>
      <div className={classes.root} style={{marginBottom:5, marginTop:5, backgroundColor:'whitesmoke'}}>
        <Button variant="outlined" color="secondary" title="Log Out" onClick={handleClickOpen} style={{width:screenWidth,height:50,fontFamily:'angltrr'}}>Log Out</Button>
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
    </View>
    </Settings>
  );
};

export default SettingsPage;