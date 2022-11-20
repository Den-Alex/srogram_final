import React from "react";
import s from "./Posts.module.css"

export type PostsType = {
    message: string
    likesCount: string
}
export const Posts = (props: PostsType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEFfGQq2AmvqVDBGzAj5C0O1ZsV_bPuhLeA&usqp=CAU"
                alt=""/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}