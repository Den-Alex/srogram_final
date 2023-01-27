import {addPostAC, profileReducer, updateNewPostTextAC} from "./profileReducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsType
    sidebar: {}
}
export type ProfilePageType = {
    posts: Array<MyPostType>
    newPostText: string
}

export type DialogsType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageBody: string

}
type SidebarType = {}

export type DialogType = {
    name: string
    id: string
}
export type MessagesType = {
    message: string
    id: number
}

export type MyPostType = {
    message: string
    likesCount: string
    id: string
}
export type AllActionType = AddPostType | UpdateNewPostTextType | updateNewMessageBodyType | sendMessageType
export type AddPostType = ReturnType<typeof addPostAC>
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostTextAC>
export type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>
export type sendMessageType = ReturnType<typeof sendMessageAC>

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: AllActionType) => void
}


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {message: "Hi", likesCount: "3", id: "1"},
                {message: "Fuck", likesCount: "24", id: "2"}
            ],
            newPostText: "Den"
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar= sidebarReducer(this._state, action)
        this._callSubscriber(this._state)

    }
}
