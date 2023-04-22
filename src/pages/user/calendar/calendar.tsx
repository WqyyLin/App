import React, {Fragment, useEffect, useState} from 'react';
import {Layout, Badge, Calendar} from 'antd';
import type { BadgeProps } from 'antd';
import MyFootNav from "../../../components/footnav";
import type { Dayjs } from 'dayjs';
import "./calendar.css"
import {Link} from "react-router-dom";
import SimpleBar from "simplebar-react";
import CssBaseline from "@material-ui/core/CssBaseline";
const {Content} = Layout;

interface Information {
    information: any;
}

interface User {
    id: number;
    email: string;
    name: string;
    money: number;
    member: boolean;
    head: any;
}

const getListData = (value: Dayjs) => {
    let listData;
    switch (value.date()) {
        case 8:
            listData = [
                { type: 'success', content: '' },
                { type: 'success', content: '' },
                { type: 'success', content: '' },
            ];
            break;
        case 10:
            listData = [
                { type: 'error', content: '' },
            ];
            break;
        case 15:
            listData = [
                { type: 'warning', content: '' },
            ];
            break;
        default:
    }
    return listData || [];
};

const getMonthData = (value: Dayjs) => {
    if (value.month() === 8) {
        return 0;
    }
};

const OurCalendar: React.FC = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

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
    const monthCellRender = (value: Dayjs) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
            </div>
        ) : null;
    };

    const dateCellRender = (value: Dayjs) => {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <Fragment>
                        <Link to='calendat/event'>
                            <li key={item.content} style={{maxHeight: 100}}>
                                <Badge status={item.type as BadgeProps['status']} text={item.content} />
                            </li>
                        </Link>

                    </Fragment>
                ))}
            </ul>
        );
    };

    return (
        <Layout style={{height: screenHeight, width: screenWidth, overflow: "hidden"}}>
            <CssBaseline />
            <Content style={{marginTop: "5%"}}>
                <SimpleBar style={{maxHeight: "92%"}}>
                    <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
                </SimpleBar>
            </Content>
            <MyFootNav/>
        </Layout>
    );
};

export default OurCalendar;

