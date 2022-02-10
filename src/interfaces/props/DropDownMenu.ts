import Action from "interfaces/props/Action";

export default  interface  DropDownMenu {
    id: string,
    item : JSX.Element,
    actions: Array<Action>
}