import {AddPostType, AllActionType, MyPostType, ProfilePageType, StateType, UpdateNewPostTextType} from "./store";



const initialState: ProfilePageType   = {
    posts: [
        {message: "Hi", likesCount: "3", id: "1"},
        {message: "Fuck", likesCount: "24", id: "2"}
    ],
    newPostText: "Den"
}
export const profileReducer = (state:ProfilePageType = initialState , action: AllActionType ): ProfilePageType => {

    switch (action.type) {
        case "ADD-POST" : {
            const newPost = {message: action.newPostText, likesCount: "0", id: "3"};
            const newState = {...state,newPostText: "", posts: [...state.posts, newPost]}
            return newState
        }
        case "UPDATE-NEW-POST-TEXT" : {
            const newState = {...state, newPostText: state.newPostText = action.text}
            return newState
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
