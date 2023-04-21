import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 导入组件
import Home from "../pages/App";
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register"
import UserManager from "../pages/manager/user/userManager";
import FacilityManager from "../pages/manager/facility/facilityManager";
import {Calendar} from "antd";
import OurCalendar from "../pages/user/calendar/calendar";
import UserInfo from "../pages/user/info/userInfo";
import UserFacility from "../pages/user/facility/userFacility";
import UserLesson from "../pages/user/lesson/userLesson";
import Scrollbars from '../pages/manager/user/scroll';
import UserCode from "../pages/user/code/code";
import UserOrder from "../pages/user/order/allOrder";
import LessonOrder from "../pages/user/order/lessonOrder";
import SettingsPage from "../pages/user/settings/settings";
const routes = () => (
    <Router>
        <Routes>
            <Route path={'/'}  element={<UserFacility/>} />
            <Route path={'/home'} element={<UserFacility/>} />
            <Route path={'/login'} element={<LoginPage/>} />
            <Route path={'/register'} element={<RegisterPage/>} />
            {/*manager*/}
            <Route path={'/manager/user'} element={<UserManager/>} />
            <Route path={'/manager/facility'} element={<FacilityManager/>} />
            {/*user*/}
            <Route path={'/user/calendar'} element={<OurCalendar/>} />
            <Route path={'/user/info'} element={<UserInfo/>} />
            <Route path={'/user/facility'} element={<UserFacility/>} />
            <Route path={'/user/lesson'} element={<UserLesson/>} />
            <Route path={'/user/code'} element={<UserCode/>} />
            <Route path={'/user/order'} element={<UserOrder/>} />
            <Route path={'/user/orderLesson'} element={<LessonOrder/>} />
            <Route path={'/user/setting'} element={<SettingsPage/>} />
            {/*test*/}            
            <Route path={'/manager/scroll'} element={<Scrollbars/>} />
        </Routes>
    </Router>
);

export default routes;
