import {AddPostType, AllActionType, MyPostType, StateType, UpdateNewPostTextType} from "./store";

export const profileReducer = (state: StateType , action: AllActionType ): StateType => {

    switch (action.type) {
        case "ADD-POST" : {
            const newPost: MyPostType = {message: action.newPostText, likesCount: "0", id: "3"}
                state.profilePage.posts.push(newPost)
            return  state
        }
        case "UPDATE-NEW-POST-TEXT" : {
            state.profilePage.newPostText = action.text
            return state
        }
        default: return state
    }

}
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    }as const
}
export const updateNewPostTextAC = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        text: text
    } as const
}
