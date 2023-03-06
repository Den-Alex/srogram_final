type PostsType = {
    id: string
    message: string
    likesCount: string
}
type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: null
}
const initialState: InitialStateType = {
    posts: [
        // {message: "Hi", likesCount: "3", id: "1"},
        // {message: "Fuck", likesCount: "24", id: "2"}
    ],
    newPostText: "Den",
    profile: null
}
export const profileReducer = (state: InitialStateType = initialState, action: AllActionType): InitialStateType => {

    switch (action.type) {
        case "ADD-POST" : {
            const newPost = {message: action.newPostText, likesCount: "0", id: "3"};
            const newState = {...state, newPostText: "", posts: [...state.posts, newPost]}
            return newState
        }
        case "UPDATE-NEW-POST-TEXT" : {
            const newState = {...state, newPostText: state.newPostText = action.text}
            return newState
        }
        case "SET-USER-PROFILE": {
            const newState = {...state, profile: action.profile}
            return newState
        }
        default:
            return state
    }

}
export type AllActionType = AddPostType | UpdateNewPostTextType | SetUserProfileType
type AddPostType = ReturnType<typeof addPost>
type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
type SetUserProfileType = ReturnType<typeof setUserProfile>
export const addPost = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const updateNewPostText = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        text: text
    } as const
}
export const setUserProfile = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}