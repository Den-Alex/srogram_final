import React from "react";
import {AllActionType, MyPostType} from "../../../redux/store";
import {addPost, updateNewPostText} from "../../../redux/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/reduxStore";




type MapStateToPropsType = {
    posts: Array<MyPostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPost(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostText(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)