import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import logo from "assets/images/logo.png";
import * as React from "react";
import ProgressBar from "components/ProgressBar";
import {Grid} from "@mui/material";
import {AccountCircle} from "@mui/icons-material";
import DropDownMenu from "components/DropDownMenu";
import {buildProfileDropDownMenu} from "layouts/MainLayout/NavBar/utils";
import Icon from "components/Icon";
import useStyles from "./styles";
import INavbar from "interfaces/props/INavbar";

const  NavBar= ({onMenuClick}:INavbar) => {
    const classes = useStyles();
    const counter = 1; // this should be connected to an api call counter.

    return (
        <>
            <AppBar
                enableColorOnDark
                position="fixed"
                color="primary"
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Grid container   alignItems="center">
                        <Grid item  >
                            <IconButton
                                size="large"
                                color="inherit"
                                aria-label="menu"
                                onClick={onMenuClick}
                            >
                                <Icon component="menu" />
                            </IconButton>
                        </Grid>

                        <Grid item flexGrow="1" >
                            <IconButton
                                disableRipple
                                disableFocusRipple
                                >
                                <img src={logo} className={classes.logo} alt="logo" />
                            </IconButton>
                        </Grid>

                        <Grid item>
                            <DropDownMenu id="profile" item={<AccountCircle />} actions={buildProfileDropDownMenu()}/>
                        </Grid>
                    </Grid>


                </Toolbar>
                {counter > 0 && <ProgressBar />}
            </AppBar>

        </>
    );
}


export default NavBar;