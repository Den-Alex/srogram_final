import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogTyp = {
    name: string
    id: string
}

export const Dialog = (props:DialogTyp) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialog/1" + props.id}>{props.name}</NavLink>
        </div>
    )
}