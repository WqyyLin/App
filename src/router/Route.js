import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// 导入组件
import Home from "../pages/App";
import LoginPage from "../pages/login/login";
import RegisterPage from "../pages/register/register"
import UserManager from "../pages/manager/user/userManager";
import FacilityManager from "../pages/manager/facility/facilityManager";
import OurCalendar from "../pages/user/calendar/calendar";
import UserInfo from "../pages/user/info/userInfo";
import UserFacility from "../pages/user/facility/userFacility";
import UserLesson from "../pages/user/lesson/userLesson";
import Scrollbars from '../pages/manager/user/scroll';
import UserCode from "../pages/user/code/code";
import Settings from '../pages/settings/settings';
import General from "../pages/settings/General";
import Cards from "../pages/cards/cards";
import Order from "../pages/user/order/allOrder";
import LessonOrder from "../pages/user/order/lessonOrder";
import InfoEdit from "../pages/user/info/accountinfo";
import Activity from "../pages/user/activity/activity"
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
            <Route path={'/user/info/edit'} element={<InfoEdit/>} />
            {/*user/order*/}
            <Route path={'/user/order'} element={<Order/>} />
            <Route path={'/user/lessonorder'} element={<LessonOrder/>} />

            {/*user/activity*/}
            <Route path={'/facility/:id'} element={<Activity/>} />


            {/*test*/}            
            <Route path={'/manager/scroll'} element={<Scrollbars/>} />

            {/*settings*/}      
            <Route path={'/settings'} element={<Settings/>}  />
            <Route path={'/settings/general'} element={<General />} />

            {/*cards*/}  
            <Route path={'/cards'} element={<Cards/>}  />


        </Routes>
    </Router>
);

export default routes;
