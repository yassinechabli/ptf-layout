import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@mui/material";

import Icon from "components/Icon";
import {buildSidebarItems} from "layouts/MainLayout/Sidebar/utils";
import {useNavigate} from "react-router-dom";
import IAction from "interfaces/props/IAction";
import MuiDrawer from "@mui/material/Drawer";
import useStyles from "layouts/MainLayout/Sidebar/styles";

const Sidebar = ({open}: {open: boolean}) : JSX.Element => {
    const classes = useStyles({open});
    const navigate = useNavigate();
    const items = buildSidebarItems({navigate});
    return (
        <MuiDrawer variant="permanent" open={open} classes={classes}>
            <List>
                {items.map(({icon, label, onClick}: IAction ) => (
                    <ListItem button key={label}>
                        <ListItemIcon  {...(!open) && {title: label}} onClick={onClick}>
                           <Icon component={icon} color="secondary" />
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                ))}
            </List>

        </MuiDrawer>
    )
}


export default Sidebar;