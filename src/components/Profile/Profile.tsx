import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./PrifileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostContainer";

// type ProfileType = {
//     // posts:  Array<MyPostType>
//     // newPostText: string
//     // dispatch: (action: AllActionType) => void
// }


export const Profile = (props: any) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    )
}