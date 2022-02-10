import LABEL from "constants/label";
import {NavigateFunction} from "react-router";
import PATH from "constants/path";

export const buildSidebarItems = ({navigate}: {navigate: NavigateFunction}) =>(
    [
        {
        icon: "wallet",
        label: LABEL.PORTFEUILLE,
        onClick: () => navigate(PATH.PORTFOLIO)

    },
        {
            icon: "claim",
            label: LABEL.CLAIM,
            onClick: () => {console.log("to claims page")}

        },
    ]
);