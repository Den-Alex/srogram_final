import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./PrifileInfo/ProfileInfo";
import {AllActionType, MyPostType, ProfilePageType} from "../../redux/store";

type ProfileType = {
    posts:  Array<MyPostType>
    newPostText: string
    dispatch: (action: AllActionType) => void
}
export const Profile = (props:ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     dispatch={props.dispatch}/>

        </div>
    )
}