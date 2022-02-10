import LABEL from "constants/label";

export const buildProfileDropDownMenu = () => [
    {
        label: LABEL.LOGOUT,
        onClick: () => { console.log("logout")},
        icon: "logout",
    },
];