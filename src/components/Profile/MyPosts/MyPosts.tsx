import React from "react";
import s from "./MyPosts.module.css"
import {Posts} from "./Posts/Posts";

let posts = [
    {message: "Hi",likesCount: "3",id: "1" },
    {message: "Fuck",likesCount: "24",id: "2" }
]
let postsElements = posts.map( p => <Posts message={p.message} likesCount={p.likesCount}/>)

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea ></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}