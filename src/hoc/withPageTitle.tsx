import PageTitle from "components/PageTitle";
import React from "react";


const withPageTitle = (WrappedComponent: any) => (moreProps: {pageTitle: string}) => (props: object) => (
  <>
    <PageTitle title={moreProps.pageTitle} />
    <WrappedComponent {...props} />
  </>
);

export default withPageTitle;
