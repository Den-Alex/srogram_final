import React, {ChangeEvent} from "react";
import s from "./MyPosts.module.css"
import {Posts} from "./Posts/Posts";
import {UserPropsType} from "./MyPostContainer";


// export type MyPostsType = {
//     posts: Array<MyPostType>
//     newPostText: string
//     addPost: (newPostText: string) => void
//     updateNewPostText: (text: string) => void
// }


export const MyPosts = (props: UserPropsType) => {
    let postsElements = props.posts.map(p => <Posts key={p.id} message={p.message} likesCount={p.likesCount}/>)

    const addPostHandler = () => {
       props.addPost(props.newPostText)
    }

    const onchangeHandler = ( e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
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