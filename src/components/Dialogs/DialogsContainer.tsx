import {AllActionType, DialogsType, DialogType, MessagesType, StateType, StoreType} from "../../redux/store";
import {ChangeEvent} from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs, DialogsPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/reduxStore";

export type DialogsContainerType = {
    // dialogs: Array<DialogType>
    // messages: Array<MessagesType>
    // newMessageBody: string
    // dispatch: (action: AllActionType) => void
    state: AppStateType
}

type mapStateToPropsType = {

    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageBody: string
}


const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageAC())
        },
        updateNewMessageBody: (newBody: string) => {
            dispatch(updateNewMessageBodyAC(newBody))
        }
    }
}

export const DialogsContainer: any = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


// export const DialogsContainer = (props: DialogsContainerType) => {
//
//
//
//     const sendMessage = () => {
//         props.dispatch(sendMessageAC())
//     }
//     const updateNewMessageBody = (newBody: string) => {
//         props.dispatch(updateNewMessageBodyAC(newBody))
//     }
//
//     return (
//         <Dialogs dialogs={props.dialogs}
//                  messages={props.messages}
//                  newMessageBody={props.newMessageBody}
//                  sendMessage={sendMessage}
//                  updateNewMessageBody={updateNewMessageBody}/>
//     )
// }
