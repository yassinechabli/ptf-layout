import IAction from "interfaces/props/IAction";

export default  interface IDropDownMenu {
    id: string,
    item : JSX.Element,
    actions: Array<IAction>
}