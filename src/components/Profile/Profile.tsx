import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./PrifileInfo/ProfileInfo";
import {AllActionType, MyPostType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

type ProfileType = {
    // posts:  Array<MyPostType>
    // newPostText: string
    // dispatch: (action: AllActionType) => void
}
export const Profile = (props:ProfileType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPostsContainer/>

        </div>
    )
}