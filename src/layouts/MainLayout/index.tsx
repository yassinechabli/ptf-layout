import React, {useState} from "react";
import NavBar from "layouts/MainLayout/NavBar";
import Sidebar from "layouts/MainLayout/Sidebar/Sidebar";
import Routes from "routes/AppRoutes";
import { styled } from '@mui/material/styles';
import {Box} from "@mui/material";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(10),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),

    paddingTop: "80px",

}));

const MainLayout = () : JSX.Element => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
return (
    <>
        <Box sx={{ display: 'flex' }}>
            <NavBar onMenuClick={()=> {setSidebarOpen(!sidebarOpen)}}/>
            <Sidebar open={sidebarOpen} />
            <Main open={sidebarOpen}>
                <Routes/>
            </Main>

        </Box>
    </>
)

};


export default MainLayout;