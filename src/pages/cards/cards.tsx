import React, {useEffect, useState} from 'react';
import { View, Text, Switch} from 'react-native';
import Button from '@material-ui/core/Button';
//import { useNavigation } from '@react-navigation/native';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from 'antd'
import {Link} from "react-router-dom";
import { Dimensions, Pressable } from 'react-native';
import {Settings} from '../../js/settings'
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
import { AppBar,Toolbar } from '@material-ui/core';
import AppBarCom from '../../components/appbar';
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

  const SettingsGeneralPage:React.FC = () => {
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
    <AppBar position="fixed" color="default">
        <Toolbar>
            <IconButton component={Link} to="/user/info" size='medium' style={{position: 'relative', top: 0, left: -10}}>
                <ArrowBackIosIcon />
            </IconButton>              
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10, left:-30}}>            
            <View style={{position: 'absolute', left: 0, width: '100%' }}>
                <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                    Cards
                </Text>
            </View>
        </View>
        
        </Toolbar>
            </AppBar> 
            <Toolbar />
            {/* <AppBarCom title="Cards" backUrl="/user/info" /> */}
        <List component="nav" aria-label="account folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5}}>
            
            <ListItem button divider>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8713" width="25" height="25" style={{position:'relative', top:0,left:-5}}><path d="M938.666667 896H85.333333c-46.933333 0-85.333333-38.4-85.333333-85.333333V213.333333c0-46.933333 38.4-85.333333 85.333333-85.333333h853.333334c46.933333 0 85.333333 38.4 85.333333 85.333333v597.333334c0 46.933333-38.4 85.333333-85.333333 85.333333zM106.666667 213.333333c-12.8 0-21.333333 8.533333-21.333334 21.333334v554.666666c0 12.8 8.533333 21.333333 21.333334 21.333334h810.666666c12.8 0 21.333333-8.533333 21.333334-21.333334v-554.666666c0-12.8-8.533333-21.333333-21.333334-21.333334h-810.666666z m554.666666 426.666667V384H810.666667c34.133333 0 64 29.866667 64 64V512c0 34.133333-29.866667 64-64 64h-85.333334V640h-64z m64-119.466667h51.2c17.066667 0 34.133333-12.8 34.133334-34.133333V469.333333c0-17.066667-12.8-34.133333-34.133334-34.133333H725.333333v85.333333zM448 640v-64h34.133333v-128h-34.133333V384h128v64h-34.133333v128h34.133333V640h-128zM213.333333 640L149.333333 384H213.333333l42.666667 192L298.666667 384h64L298.666667 640H213.333333z" p-id="8714" fill="#f2ce2b"></path></svg>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>VIP Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10949" width="25" height="25" style={{position:'relative', top:0,left:-5}}><path d="M226.26 733.69h125.47c11.55 0 20.91-9.37 20.91-20.91 0-11.54-9.37-20.91-20.91-20.91H226.26c-11.54 0-20.91 9.37-20.91 20.91 0 11.54 9.37 20.91 20.91 20.91z m0 0" fill="#C60022" p-id="10950"></path><path d="M843.03 152.22c12.67-2.7 25.33-5.86 38.11-8.09 7.27-1.17 10.79-4.1 11.96-11.84 1.52-11.49 4.46-22.75 6.8-34.01 0.35-1.99 0.58-3.99 2.58-5.16 2.93 14.42 6.21 28.73 8.91 43.04 0.82 4.34 2.58 5.98 6.8 6.8 14.07 2.82 28.03 6.1 41.98 10.56-13.84 3.05-27.56 6.21-41.39 8.91-4.57 0.94-6.57 2.58-7.51 7.27-2.58 14.07-5.74 28.14-8.91 43.15-3.99-6.92-3.87-14.3-5.63-20.99-2-7.62-3.64-15.36-4.81-23.22-0.59-4.22-2.7-5.39-6.45-6.21-14.07-2.81-28.14-5.98-42.33-9.03 0.01-0.24-0.11-0.71-0.11-1.18z" fill="#C60022" opacity=".67" p-id="10951"></path><path d="M801.89 866.56c13.44-2.86 26.87-6.22 40.43-8.58 7.71-1.24 11.45-4.35 12.69-12.56 1.62-12.19 4.73-24.13 7.22-36.08 0.37-2.11 0.62-4.23 2.73-5.47 3.11 15.3 6.59 30.48 9.45 45.66 0.87 4.6 2.74 6.34 7.22 7.21 14.93 2.99 29.73 6.47 44.54 11.2-14.68 3.23-29.24 6.59-43.91 9.45-4.85 1-6.97 2.74-7.96 7.71-2.74 14.93-6.09 29.86-9.45 45.78-4.23-7.34-4.11-15.17-5.97-22.27-2.12-8.09-3.86-16.29-5.1-24.63-0.62-4.48-2.86-5.72-6.84-6.59-14.93-2.98-29.86-6.34-44.91-9.58-0.01-0.25-0.14-0.75-0.14-1.25z" fill="#FFA083" p-id="10952"></path><path d="M63.82 247.82c17.07-3.64 34.14-7.9 51.37-10.91 9.79-1.58 14.54-5.53 16.12-15.96 2.05-15.49 6.01-30.66 9.16-45.84 0.48-2.69 0.79-5.37 3.48-6.95 3.95 19.44 8.38 38.72 12.01 58.01 1.11 5.84 3.48 8.06 9.17 9.16 18.97 3.8 37.78 8.22 56.59 14.23-18.65 4.11-37.15 8.37-55.79 12.01-6.17 1.27-8.85 3.48-10.12 9.8-3.48 18.96-7.75 37.93-12.02 58.16-5.37-9.32-5.21-19.28-7.59-28.29-2.69-10.27-4.89-20.71-6.48-31.3-0.79-5.69-3.64-7.27-8.7-8.37-18.96-3.8-37.93-8.06-57.06-12.17-0.14-0.15-0.14-0.78-0.14-1.58z" fill="#C60022" opacity=".2" p-id="10953"></path><path d="M527.19 557.64m-196.18 0a196.18 196.18 0 1 0 392.36 0 196.18 196.18 0 1 0-392.36 0Z" fill="#C60022" opacity=".2" p-id="10954"></path><path d="M683.8 254.21m-26.26 0a26.26 26.26 0 1 0 52.52 0 26.26 26.26 0 1 0-52.52 0Z" fill="#C60022" p-id="10955"></path><path d="M832.72 229.37h-70.15v0.04h-7.21c-12.82 0-23.26 10.43-23.26 23.26 0 12.83 10.44 23.26 23.26 23.26h7.21v0.11h70.15c21.73 0 39.4 17.68 39.4 39.4v81.23h-580.7v-81.23c0-21.73 17.68-39.4 39.4-39.4h277.95v-0.11h1.75c12.82 0 23.26-10.43 23.26-23.26 0-12.82-10.43-23.26-23.26-23.26h-1.75v-0.04H330.83c-47.46 0-86.07 38.61-86.07 86.07v81.23h-81.23c-47.46 0-86.07 38.61-86.07 86.07v334.59c0 47.46 38.61 86.07 86.07 86.07h46.43v-0.03h1.45c12.87 0 23.34-10.48 23.34-23.37s-10.47-23.37-23.34-23.37H168.8v0.1h-5.27c-21.73 0-39.4-17.67-39.4-39.4v-206.7h580.7v206.7c0 21.73-17.67 39.4-39.4 39.4H373.1v-0.1h-13.55c-12.87 0-23.34 10.48-23.34 23.37 0 12.88 10.47 23.37 23.34 23.37h1.37v0.03h304.5c47.46 0 86.07-38.61 86.07-86.07V736.1h81.23c47.46 0 86.07-38.61 86.07-86.07v-334.6c0-47.45-38.61-86.06-86.07-86.06z m-127.9 334.59h-580.7v-81.22c0-21.73 17.68-39.4 39.4-39.4h501.9c21.73 0 39.4 17.68 39.4 39.4v81.22z m167.3 86.08c0 21.73-17.67 39.4-39.4 39.4h-81.23v-206.7c0-13.61-3.33-26.85-9.9-39.4h130.53v206.7z" fill="#C60022" p-id="10956"></path><path d="M290.03 880.29m-26.26 0a26.26 26.26 0 1 0 52.52 0 26.26 26.26 0 1 0-52.52 0Z" fill="#C60022" p-id="10957"></path></svg>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Date Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>

        <List component="nav" aria-label="general folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5, marginTop:5}}>
            <ListItem button divider >
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18144" width="25" height="25" style={{position:'relative', top:0,left:-5}}><path d="M928 181.333V480h-32a53.333 53.333 0 0 0-3.499 106.56l3.499 0.107h32v298.666H96V586.667h32a53.333 53.333 0 0 0 3.499-106.56L128 480H96V181.333h832z m-618.667 63.979L160 245.333v175.062l4.224 1.301a117.419 117.419 0 0 1 80.704 101.76l0.32 5.163 0.085 4.714a117.376 117.376 0 0 1-76.437 110.016l-4.672 1.622-4.224 1.28v175.082l149.333-0.021v-576z m554.667 0.021l-490.667-0.021v576l490.667 0.021V646.251l-4.224-1.28a117.419 117.419 0 0 1-80.704-101.76l-0.32-5.163-0.085-4.715a117.376 117.376 0 0 1 76.437-110.016l4.672-1.621 4.224-1.301V245.333z m-170.667 352v64H490.667v-64h202.666z m0-192v64H490.667v-64h202.666z" fill="#1677FF" p-id="18145"></path></svg>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Tickets</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19210" width="25" height="25" style={{position:'relative', top:0,left:-5}}><path d="M886.272 876.8H134.144c-50.944 0-92.16-41.216-92.16-92.16v-139.776c0-33.536 27.392-60.672 60.672-60.672h28.416c39.424 0 71.68-32.256 71.68-71.68s-32.256-71.68-71.68-71.68H102.4c-16.384 0-31.488-6.4-43.008-17.92s-17.664-26.88-17.664-43.264l0.512-137.472c0.256-50.688 41.472-91.648 92.16-91.648h752.384c50.944 0 92.16 41.216 92.16 92.16v139.008c0 33.536-27.392 60.672-60.672 60.672h-32.768c-39.424 0-71.424 32-71.424 71.424 0 39.424 32 71.424 71.424 71.424h32.512c33.536 0 60.672 27.392 60.672 60.672v138.496c-0.256 51.2-41.472 92.416-92.416 92.416zM103.424 645.632v139.008c0 16.896 13.824 30.72 30.72 30.72h752.128c16.896 0 30.72-13.824 30.72-30.72v-137.728h-31.744c-73.216 0-132.864-59.648-132.864-132.864 0-73.216 59.648-132.864 132.864-132.864h32V242.688c0-16.896-13.824-30.72-30.72-30.72H134.144c-16.896 0-30.72 13.824-30.72 30.464l-0.512 136.704h28.16c73.472 0 133.12 59.648 133.12 133.12s-59.648 133.12-133.12 133.12H103.424z" fill="#8407b6" p-id="19211"></path><path d="M666.112 444.928H366.08c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h300.288c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.976 30.72zM664.832 640H364.544c-16.896 0-30.72-13.824-30.72-30.72s13.824-30.72 30.72-30.72h300.288c16.896 0 30.72 13.824 30.72 30.72s-13.824 30.72-30.72 30.72z" fill="#8407b6" p-id="19212"></path></svg>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Coupons and Gift Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>
        <div style={{marginTop:5}}>
            {/* <div style={contentStyle}>
                <h1>Privacy<h1/>
            </div> */}

            <ThemeProvider theme={theme}>
                <Typography variant="h5" style={{color: '#999', fontSize:16, fontWeight:'bold'}}>Recently Use</Typography>
            </ThemeProvider>
        </div>
    </View>
    </Settings>
  );
};

export default SettingsGeneralPage;