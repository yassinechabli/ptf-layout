import * as React from "react";

export default interface IRoute {
    path: string,
    component: React.ReactNode |JSX.Element
}