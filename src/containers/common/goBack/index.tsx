import React from "react";
import {useNavigate} from "react-router-dom";
import Label from "constants/label";
import Icon from "components/Icon";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {createStyles, Link, Theme} from "@mui/material";
import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root:{
            fontFamily: "Open Sans Condensed",
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            cursor: "pointer",
        }
    }),
);

const  GoBackContainer = () =>  {
  const navigate = useNavigate();
  const classes = useStyles();
  const back = () => {
    navigate(-1);
  };
  return (
    <>
      <Grid container>
        <Grid item>
          <Link classes={classes} onClick={back} >
            <Icon component="back" />
            <Typography  alignContent="center" align="center" variant="subtitle1">
              {Label.BACK}
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}

export default GoBackContainer;