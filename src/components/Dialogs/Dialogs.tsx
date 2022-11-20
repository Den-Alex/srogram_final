import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

let dialogs = [
    {name: "Den",id: "1"},
    {name: "Ket",id: "2"},
    {name: "Marina",id: "3"},
    {name: "Elena",id: "4"}
]
let messages = [
    {message: "H"},
    {message: "K"},
    {message: "D"}
]

export type DialogsType = {
    name: string
    id: string
    message: string
}
let dialogsElement = dialogs.map( d => <Dialog name={d.name} id={d.id}/>)

let messagesElement = messages.map( m => <Message message={m.message}/>)


export const Dialogs = (props:any) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}