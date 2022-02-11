import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Icon from "components/Icon";
import PageTitleProps from "interfaces/props/IPageTitle";
/**
 *
 * @param title
 * @returns {JSX.Element}
 * @constructor
 */
const PageTitle = ({ title }: PageTitleProps) => (
    <Grid container mt={5} mb={10}>
      <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
        <>
          <Icon component="doubleArrow" color="secondary" />
          <Typography variant="h6">{title}</Typography>
        </>
      </Grid>
    </Grid>
  );


export default PageTitle;
