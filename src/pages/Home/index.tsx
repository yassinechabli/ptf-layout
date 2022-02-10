import React from "react";
import withPageTitle from "hoc/withPageTitle";
import HomeContainer from "containers/HomeContainer";


const Index =() => {

    return (<HomeContainer/>)
};

export default withPageTitle(Index)({pageTitle: "home page"});