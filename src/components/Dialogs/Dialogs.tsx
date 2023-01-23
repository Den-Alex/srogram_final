import s from "./Dialogs.module.css"
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";
import {AllActionType, DialogType, MessagesType} from "../../redux/store";
import {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";

export type DialogsPropsType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageBody: string
    dispatch: (action: AllActionType) => void

}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs.map(d => <Dialog key={d.id} name={d.name} id={d.id}/>)
    let messagesElement = props.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = props.newMessageBody

    const onClickHandler = () => {
        props.dispatch(sendMessageAC())
    }
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageBodyAC(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onChangeHandler}></textarea></div>
                    <div>
                        <button onClick={onClickHandler}>add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}