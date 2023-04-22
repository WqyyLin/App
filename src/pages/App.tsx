import React, {useState}  from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import MyFootNav from '../components/footnav'
import {BackHandler, ToastAndroid} from 'react-native';
const { Header, Content, Footer, Sider } = Layout;

const items1: MenuProps['items'] = ['Facility', '', '3'].map((key) => ({
    key,
    label: `${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
    (icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`,
                };
            }),
        };
    },
);

const App: React.FC = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const [backClickCount, setBackClickCount] = useState(0);

    React.useEffect(() => {
      BackHandler.addEventListener('hardwareBackPress', handleBackButton);
      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
      };
    }, [backClickCount]);
  
    const handleBackButton = () => {
      backClickCount == 1 ? BackHandler.exitApp() : showToast();
      return true;
    };
  
    const showToast = () => {
      ToastAndroid.show('Press again to exit the application', ToastAndroid.SHORT);
      setBackClickCount(1);
      setTimeout(() => {
        setBackClickCount(0);
      }, 2000);
    };


    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
                    <Sider style={{ background: colorBgContainer }} width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%' }}
                            items={items2}
                        />
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>Content</Content>
                </Layout>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
            </Footer>
            <MyFootNav></MyFootNav>
        </Layout>
    );
};

export default App;