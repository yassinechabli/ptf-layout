import React, {useState} from "react";
import NavBar from "layouts/MainLayout/NavBar";
import Sidebar from "layouts/MainLayout/Sidebar/Sidebar";
import Routes from "routes/AppRoutes";
import {Box} from "@mui/material";
import Main from "./styles";

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