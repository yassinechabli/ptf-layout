import React from "react";
import {
    CSSObject,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
} from "@mui/material";

import { styled } from '@mui/material/styles';
import Icon from "components/Icon";
import MuiDrawer from '@mui/material/Drawer';
import {buildSidebarItems} from "layouts/MainLayout/Sidebar/utils";
import {useNavigate} from "react-router-dom";
import Action from "interfaces/props/Action";

const drawerWidth = 180;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
        paddingTop: 80,

    },

});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(60)} + 1px)`,
    paddingTop: 56,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(60)} + 1px)`,
        paddingTop: 80,

    },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const Sidebar = ({open}: {open: boolean}) : JSX.Element => {

    const navigate = useNavigate();

    const items = buildSidebarItems({navigate});
    return (
        <Drawer variant="permanent" open={open} >
            <List>
                {items.map(({icon, label, onClick}: Action ) => (
                    <ListItem button key={label}>
                        <ListItemIcon  {...(!open) && {title: label}} onClick={onClick}>
                           <Icon component={icon} {...{color:"secondary"}} />
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>

        </Drawer>
    )
}


export default Sidebar;