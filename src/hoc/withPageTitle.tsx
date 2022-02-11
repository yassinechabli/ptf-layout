import PageTitle from "components/PageTitle";
import React from "react";
import IWithPageTitle from "interfaces/hoc/IWithPageTitle";


const withPageTitle = (WrappedComponent: any) => (moreProps: IWithPageTitle) => (props: object) => (
  <>
    <PageTitle title={moreProps.pageTitle} />
    <WrappedComponent {...props} />
  </>
);

export default withPageTitle;
