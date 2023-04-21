import React from 'react';
import { MailOutlined, QqOutlined, WechatOutlined, PhoneOutlined} from '@ant-design/icons';
import HomeIcon from '@material-ui/icons/Home';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import DirectionsRunTwoToneIcon from '@material-ui/icons/DirectionsRunTwoTone';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import m from '../img/manage1.jpg';
import { BrowserRouter, Route, Link } from "react-router-dom";
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
  // 定义一个状态变量，用来保存当前激活的导航项的值
//   const [value, setValue] = React.useState("/home");
  const location = useLocation(); // get current location object
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
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //   }}
      onChange={handleChange} // 设置onChange事件为事件处理函数  
      showLabels={false}
      className={classes.root}
      style={{ width: "100%", position: "fixed", bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
        <BottomNavigationAction label="Facilities" value="/manager/facility" icon={<AppsTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/manager/facility" showLabel={value === '/manager/facility'}/>
        <BottomNavigationAction label="Lesson" value="/user/lesson" icon={<DirectionsRunTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/user/lesson" showLabel={value === '/user/lesson'}/>
        <BottomNavigationAction label="Add" value="/home" icon={<AddCircleTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/home" showLabel={value === '/home'}/>
        <BottomNavigationAction label="Calendar" value="/manager/user" icon={<DateRangeTwoToneIcon />} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/manager/user" showLabel={value === '/manager/user'}/>
        <BottomNavigationAction label="User" value="/manager/scroll" icon={<StyledBadge
            overlap="circular"
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
            }}
            variant="dot"
        >
            <Avatar alt="Remy Sharp" src={m} />
        </StyledBadge>} style={{ display: 'inline-block', margin: '0px auto' }} component={Link}
          to="/manager/scroll" showLabel={value === '/manager/scroll'}/>
    </BottomNavigation>
  );
}