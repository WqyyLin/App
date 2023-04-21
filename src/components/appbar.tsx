// AppBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { View, Text} from 'react-native';
import { AppBar,Toolbar,IconButton} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// 定义组件属性的接口
interface AppBarProps {
  title: string; // 标题
  backUrl: string; // 返回按钮的链接
}

// 定义函数式组件
const AppBarCom: React.FC<AppBarProps> = ({ title, backUrl }) => {
  return (
    <AppBar position="fixed" color="default">
      <Toolbar>
        <IconButton component={Link} to={backUrl} size="medium" style={{ position: 'relative', top: 0, left: -10 }}>
          <ArrowBackIosIcon />
        </IconButton>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 10, paddingRight: 10, marginTop: 10, marginBottom: 10, left: -30 }}>
          <View style={{ position: 'absolute', left: 0, width: '100%' }}>
            <Text style={{ fontSize: 24, textAlign: 'center', fontFamily: 'Speedline', fontWeight: 'bold' }}>{title}</Text>
          </View>
        </View>
      </Toolbar>
    </AppBar>
  );
};

// 导出组件
export default AppBarCom;