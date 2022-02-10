import React from "react";
import WithBackContainer from "hoc/withBackContainer";
import withPageTitle from "hoc/withPageTitle";
import PortfolioContainer from "containers/PortfolioContainer";
import PageTitle from "constants/pageTitle";


const Index =() => {

    return (<PortfolioContainer/>)
};

export default withPageTitle(WithBackContainer(Index))({pageTitle: PageTitle.PORTFOLIO});