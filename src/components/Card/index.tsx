import {makeStyles, } from "@mui/styles";
import React from "react";
import Paper from "@mui/material/Paper";
import {createStyles, Theme} from "@mui/material";
import CardProps from "interfaces/props/ICard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        backgroundColor: theme.palette.primary.light,
        padding: "10px",
      },
    }),
);
export default function Card({  children }: CardProps) {
  const classes = useStyles();
  return (
    <Paper component="div" classes={classes} sx={{ boxShadow: 1 }}>
      {children}
    </Paper>
  );
}
