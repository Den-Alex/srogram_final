import {AllActionType, MyPostType, StateType} from "./store";

export const dialogsReducer = (state: StateType, action: AllActionType): StateType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY" : {
            state.dialogsPage.newMessageBody = action.newMessageBody
            return state
        }
        case "SEND-MESSAGE" : {
            const body = state.dialogsPage.newMessageBody
            state.dialogsPage.newMessageBody = ""
            state.dialogsPage.messages.push({id: 4, message: body})
            return state
        }
        default: return state
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
