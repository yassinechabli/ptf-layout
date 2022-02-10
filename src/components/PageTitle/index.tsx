import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import PageTitleProps from "interfaces/props/PageTitle";
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
          <Icon component="doubleArrow" {...{color: "secondary"}} />
          <Typography variant="h6">{title}</Typography>
        </>
      </Grid>
    </Grid>
  );

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
