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
import { relative } from 'path';

// 定义一个接口，包含title, description, value, onChange四个属性
interface SettingItemProps {
    title: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

// 使用React.FC<SettingItemProps>来指定组件的类型
const SettingItem: React.FC<SettingItemProps> = ({
    title,
    value,
    onChange,
  }) => {
    return (
      <View style={{ padding:2.5, flex: 1, flexDirection: 'row', alignItems: 'center', backgroundColor:'whitesmoke', marginBottom: 5, marginTop: 5}}>
        <Text style={{ textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr',flex:1, position:'relative',left:-2.5}}>{title}</Text>
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
            <IconButton component={Link} to="/settings" size='medium' style={{position: 'relative', top: 0, left: -10}}>
                <ArrowBackIosIcon />
            </IconButton>              
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center',paddingLeft: 10, paddingRight: 10 ,marginTop:10, marginBottom: 10, left:-30}}>            
            <View style={{position: 'absolute', left: 0, width: '100%' }}>
                <Text style={{ fontSize: 24 , textAlign: 'center' , fontFamily:'Speedline',fontWeight:'bold'}}>
                    Gerneral
                </Text>
            </View>
        </View>
        
        </Toolbar>
            </AppBar> 
            <Toolbar />
        
        <List component="nav" aria-label="about folders" style={{ backgroundColor:'whitesmoke'}}>
            <ListItem button divider>
              <SettingItem
                title="Landscape Mode"
                value={darkModeEnabled}
                onChange={setDarkModeEnabled}
              />
            </ListItem>
            <ListItem button divider>
              <SettingItem
                title="NFC Function"
                value={notificationsEnabled}
                onChange={setNotificationsEnabled}
              />
            </ListItem>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Multi-language</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Font Size</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Miscellaneous Function</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Automatically Downloads</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 20, fontFamily:'angltrr'}}>Storage Space</span>} />
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>

    </View>
    </Settings>
  );
};

export default SettingsGeneralPage;