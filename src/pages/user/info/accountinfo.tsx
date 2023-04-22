import React, {useEffect, useState} from 'react';
import { View, Text, Switch} from 'react-native';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Layout from 'antd'
import {Link} from "react-router-dom";
import { Dimensions, Pressable } from 'react-native';
import {Settings} from '../../../js/settings'
import Typography from '@material-ui/core/Typography';
import { createTheme, responsiveFontSizes, ThemeProvider,createStyles, makeStyles,Theme} from '@material-ui/core/styles';
import { Divider,List,ListItem,ListItemText,ListItemSecondaryAction,IconButton } from '@material-ui/core'
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { AppBar,Toolbar } from '@material-ui/core';
import AppBarCom from '../../../components/appbar';

// 定义一个接口，包含title, description, value, onChange四个属性
interface SettingItemProps {
    title: string;
    description: string;
    value: boolean;
    onChange: (value: boolean) => void;
}

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
        offset: theme.mixins.toolbar,
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


  const [open, setOpen] = React.useState(false);
  return (
    <Settings style={{width:screenWidth, height:screenHeight}}>
    <View style={{ flex: 1}} >
        <AppBarCom title='Edit Info' backUrl="/user/info/edit"></AppBarCom>
        <div className={classes.offset}>
        <List component="nav" aria-label="account folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5}}>
            {/* <Toolbar style={{backgroundColor:'transparent'}}/> */}
            <ListItem button divider>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>VIP Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Date Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>

        <List component="nav" aria-label="general folders" style={{ backgroundColor:'whitesmoke',marginBottom: 5, marginTop:5}}>
            <ListItem button divider >
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Tickets</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
            <ListItem button>
                <ListItemText primary={<span style={{textAlign: 'left' ,fontSize: 17, fontFamily:'angltrr'}}>Coupons and Gift Cards</span>}/>
                <ListItemSecondaryAction> <IconButton edge="end" aria-label="arrow"> <ArrowForwardIosIcon /> </IconButton> </ListItemSecondaryAction>
            </ListItem>
        </List>
        </div>
    </View>
    </Settings>
  );
};

export default SettingsGeneralPage;