import GoBackContainer from "containers/common/goBack";
import React from "react";
import Grid from "@mui/material/Grid";

const withBackContainer = (WrappedComponent: any) => (props: object) => (
  <>
    <Grid container mb={5}>
      <Grid item xs={12}>
        <GoBackContainer />
      </Grid>
    </Grid>
    <WrappedComponent {...props} />
  </>
);

export default withBackContainer;



