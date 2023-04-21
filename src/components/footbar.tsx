import React from 'react';
import { MailOutlined, QqOutlined, WechatOutlined, PhoneOutlined} from '@ant-design/icons';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter, Route, Link } from "react-router-dom";



export default function MyBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels={false}
      style={{backgroundColor:'transparent'}}
    >
    <BottomNavigationAction label="Email" value="email" icon={<MailOutlined />} />               
        <BottomNavigationAction label="QQ" value="recents" icon={<QqOutlined />} />
        <BottomNavigationAction label="WeChat" value="favorites" icon={<WechatOutlined />} />
        <BottomNavigationAction label="Telephone" value="telephone" icon={<PhoneOutlined />} />
    </BottomNavigation>
  );
}