import {AllActionType, DialogsType, MyPostType, StateType} from "./store";

const initialState: DialogsType = {
    dialogs: [
        {name: "Den", id: "1"},
        {name: "Ket", id: "2"},
        {name: "Marina", id: "3"},
        {name: "Elena", id: "4"}
    ],
    messages: [
        {id: 1, message: "H"},
        {id: 2, message: "K"},
        {id: 3, message: "D"}
    ],
    newMessageBody: ""
}
export const dialogsReducer = (state: DialogsType = initialState, action: AllActionType): DialogsType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY" : {
            const newState = {...state, newMessageBody: action.newMessageBody}
            return newState
        }
        case "SEND-MESSAGE" : {
            const body = state.newMessageBody
            const newState = {...state,newMessageBody: "", messages: [...state.messages, {id: 4, message: body}]}
            return newState
        }
        default:
            return state
    }
}
export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageBody: newMessageBody
    } as const
}
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
