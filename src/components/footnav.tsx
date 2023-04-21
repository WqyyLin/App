import React from 'react';
import { MailOutlined, QqOutlined, WechatOutlined, PhoneOutlined, QrcodeOutlined} from '@ant-design/icons';
import HomeIcon from '@material-ui/icons/Home';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import DirectionsRunTwoToneIcon from '@material-ui/icons/DirectionsRunTwoTone';
import HomeWorkTwoToneIcon from '@material-ui/icons/HomeWorkTwoTone';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import m from '../img/manage1.jpg';
import {Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'; 
const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default function MyFootNav() {
  //const [value, setValue] = React.useState(0);
  const location = useLocation(); // get current location object
  // 定义一个状态变量，用来保存当前激活的导航项的值
  // const [value, setValue] = React.useState();
  const [value, setValue] = React.useState(location.pathname); // initialize value state with current pathname
  // 定义一个事件处理函数，用来在点击导航项时更新value的状态，并跳转到相应的路由路径
  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
    //window.location.href = newValue;
  };
  
  const classes = useStyles();

  return (
    <BottomNavigation
      value={value}
      // onChange={(event, newValue) => {
      //   setValue(newValue);
      // }}
      onChange={handleChange} // 设置onChange事件为事件处理函数 
      showLabels={false}
      className={classes.root}
      style={{ width: "100%", position: "fixed", bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <BottomNavigationAction label="Facilities" value="/user/facility" icon={<AppsTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/facility" showLabel={value === '/user/facility'}/>
        <BottomNavigationAction label="Lesson" value="/user/lesson" icon={<DirectionsRunTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/lesson" showLabel={value === '/user/lesson'}/>
        <BottomNavigationAction label="Code" value="/user/code" icon={<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2477" width={30} height={30}><path d="M384 64l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2c0 51.2 41.6 89.6 89.6 89.6l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2C473.6 105.6 435.2 64 384 64zM428.8 380.8c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8l0-227.2c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8L428.8 380.8z" p-id="2478"></path><path d="M192 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2479"></path><path d="M377.6 544l-243.2 0c-48 0-86.4 38.4-86.4 89.6l0 220.8c0 48 38.4 89.6 86.4 89.6l243.2 0c48 0 86.4-38.4 86.4-89.6l0-220.8C467.2 582.4 425.6 544 377.6 544zM422.4 851.2c0 25.6-19.2 44.8-44.8 44.8l-243.2 0c-25.6 0-44.8-19.2-44.8-44.8l0-220.8c0-25.6 19.2-44.8 44.8-44.8l243.2 0c25.6 0 44.8 19.2 44.8 44.8L422.4 851.2z" p-id="2480"></path><path d="M192 668.8l131.2 0 0 131.2-131.2 0 0-131.2Z" p-id="2481"></path><path d="M633.6 470.4l249.6 0c51.2 0 89.6-41.6 89.6-89.6l0-227.2c0-51.2-41.6-89.6-89.6-89.6l-249.6 0c-51.2 0-89.6 41.6-89.6 89.6l0 227.2C544 432 585.6 470.4 633.6 470.4zM588.8 153.6c0-25.6 19.2-44.8 44.8-44.8l249.6 0c25.6 0 44.8 19.2 44.8 44.8l0 227.2c0 25.6-19.2 44.8-44.8 44.8l-249.6 0c-25.6 0-44.8-19.2-44.8-44.8L588.8 153.6z" p-id="2482"></path><path d="M700.8 192l134.4 0 0 134.4-134.4 0 0-134.4Z" p-id="2483"></path><path d="M572.8 716.8l137.6 0c12.8 0 22.4-9.6 22.4-22.4l0-137.6c0-12.8-9.6-22.4-22.4-22.4l-137.6 0c-12.8 0-22.4 9.6-22.4 22.4l0 137.6C550.4 707.2 560 716.8 572.8 716.8z" p-id="2484"></path><path d="M886.4 563.2l0 38.4c0 12.8 12.8 25.6 25.6 25.6l38.4 0c12.8 0 25.6-12.8 25.6-25.6l0-38.4c0-12.8-12.8-25.6-25.6-25.6l-38.4 0C899.2 537.6 886.4 547.2 886.4 563.2z" p-id="2485"></path><path d="M582.4 944l48 0c12.8 0 22.4-9.6 22.4-22.4l0-48c0-12.8-9.6-22.4-22.4-22.4l-48 0c-12.8 0-22.4 9.6-22.4 22.4l0 48C560 934.4 569.6 944 582.4 944z" p-id="2486"></path><path d="M944 704l-99.2 0c-16 0-28.8 12.8-28.8 28.8l0 44.8-48 0c-19.2 0-32 12.8-32 32l0 99.2c0 16 12.8 28.8 28.8 28.8l179.2 3.2c16 0 28.8-12.8 28.8-28.8l0-179.2C972.8 716.8 960 704 944 704z" p-id="2487"></path></svg>} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/code" showLabel={value === '/user/code'}/>
        {/* <BottomNavigationAction label="Code" value="code" icon={<QrcodeOutlined />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/code"/> */}
        <BottomNavigationAction label="Calendar" value="/user/calendar" icon={<DateRangeTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/calendar" showLabel={value === '/user/calendar'}/>
        <BottomNavigationAction label="User" value="/user/info" icon={<StyledBadge
            overlap="circular"
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src={m} />
        </StyledBadge>} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/info" showLabel={value === '/user/info'}/>
    </BottomNavigation>
  );
}