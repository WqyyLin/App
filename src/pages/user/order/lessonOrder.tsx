import React, {useEffect, useState} from 'react';
import {Card, Carousel, Form, Input, Layout, Select} from 'antd';
import '../../../@type/.d.ts'
import clsx from 'clsx';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import {green} from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import CssBaseline from "@material-ui/core/CssBaseline";
import SimpleBar from "simplebar-react";

const {Content} = Layout;
const {Meta} = Card;
const {Option} = Select;
const {Search} = Input;


interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

interface Information {
    groundName: any;
}

interface Facility {
    Ad_title: string;
    activity: any;
    name: string;
    groundnumber: number;
    Ad_describtion: string;
    endtime: number;
    starttime: number;
    holdpeople: number;
}


function TabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`action-tabpanel-${index}`}
            aria-labelledby={`action-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function a11yProps(index: any) {
    return {
        id: `action-tab-${index}`,
        'aria-controls': `action-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.background.paper,
            width: 500,
            position: 'relative',
            minHeight: 200,
        },
        fab: {
            position: 'absolute',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
        fabGreen: {
            color: theme.palette.common.white,
            backgroundColor: green[500],
            '&:hover': {
                backgroundColor: green[600],
            },
        },
    }),
);

const contentStyle: React.CSSProperties = {
    margin: 0,
    marginLeft: "5%",
    marginRight: "5%",
    marginBottom: "5%",
    height: '90px',
    color: '#fff',
    borderRadius: 10,
    textAlign: 'center',
    background: '#a6b3c9',
};

const LessonOrder: React.FC = () => {
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
    // const { children, value, index, ...other } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: unknown, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    // const {
    //     token: {colorBgContainer},
    // } = theme.useToken();

    const theme = useTheme();
    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabs = [
        {
            color: 'primary' as 'primary',
            className: classes.fab,
            icon: <AddIcon/>,
            label: 'Add',
        },
        {
            color: 'secondary' as 'secondary',
            className: classes.fab,
            icon: <EditIcon/>,
            label: 'Edit',
        },
        {
            color: 'inherit' as 'inherit',
            className: clsx(classes.fab, classes.fabGreen),
            icon: <UpIcon/>,
            label: 'Expand',
        },
    ];
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    };

    const [form] = Form.useForm();
    const [infos, setInfo] = useState<Information>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    // useEffect(() => {
    //     fetch("http://localhost:8080/user/manager/facilities")
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             } else {
    //                 throw response;
    //             }
    //         })
    //         .then((data) => {
    //             setInfo(data);
    //         })
    //         .catch((error) => {
    //             setError(error);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         });
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }
    //
    // if (error) {
    //     return <div>Error!</div>;
    // }

    return (
        <Layout style={{width: screenWidth, height: screenHeight, overflow: "hidden"}}>
            <CssBaseline/>
            <Content>
                <SimpleBar
                    style={{maxHeight: screenHeight * 1}}
                >
                    {
                        new Array(30).fill(null).map((_, i) => {
                            return <Carousel>
                                <div>
                                    <h3 style={contentStyle}>Lesson{i + 1}</h3>
                                </div>
                            </Carousel>
                        })
                    }
                </SimpleBar>
            </Content>
        </Layout>
    );
};

export default LessonOrder;