import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Posts} from "./Posts/Posts";
import {AllActionType, MyPostType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";


export type MyPostsType = {
    posts: Array<MyPostType>
    newPostText: string
    dispatch: (action: AllActionType) => void
}


export const MyPosts = (props: MyPostsType) => {
    // let newPostsElements = React.createRef<HTMLTextAreaElement>()
    let postsElements = props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
        props.dispatch(addPostAC(props.newPostText))
    }

    const onchangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }
    return (
        <div>
            My posts
            <div>
                <textarea onChange={onchangeHandler}  value={props.newPostText}/>
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}