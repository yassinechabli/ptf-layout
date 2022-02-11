import {createStyles, makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import Common from "constants/common";

const useStyles =makeStyles((theme:Theme)=> createStyles({
    root: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        width: (props:{open:boolean}) => props.open ?  Common.DRAWER_WIDTH : `calc(${theme.spacing(60)} + 1px)`,
        transition: ({open})=> theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration[open ? "leavingScreen": "leavingScreen"],
        }),
    },
    paper:{
        paddingTop: 76,
        overflowX: 'hidden',
        width: (props:{open:boolean}) => props.open ?  Common.DRAWER_WIDTH : `calc(${theme.spacing(60)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            paddingTop: 76,
            width: ({open})=> !open ? `calc(${theme.spacing(60)} + 1px)`: Common.DRAWER_WIDTH,
        },
        transition: ({open})=> theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration[open ? "leavingScreen": "leavingScreen"],
        }),
    },
}) );

export default useStyles;