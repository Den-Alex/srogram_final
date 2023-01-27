import React from "react";
import {AllActionType, MyPostType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";


export type MyPostsContainerType = {
    posts: Array<MyPostType>
    newPostText: string
    dispatch: (action: AllActionType) => void
}


// export const MyPostsContainer = (props: MyPostsContainerType) => {
//
//
//     const addPost = () => {
//         props.dispatch(addPostAC(props.newPostText))
//     }
//
//     const updateNewPostText = (text: string) => {
//         props.dispatch(updateNewPostTextAC(text))
//     }
//     return (
//
//             <MyPosts posts={props.posts}
//                      newPostText={props.newPostText}
//                      addPost={addPost}
//                      updateNewPostText={updateNewPostText} />
//
//     )
type MapStateToPropsType = {
    posts: Array<MyPostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}
export type UserPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts)