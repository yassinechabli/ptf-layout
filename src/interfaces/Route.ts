import * as React from "react";

export default interface Route{
    path: string,
    component: React.ReactNode |JSX.Element
}