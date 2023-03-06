import React from "react";
import s from "./ProfileInfo.module.css"
import {Preloader} from "../../Preloader/Preloader";

export const ProfileInfo = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.atorus.ru/sites/default/files/upload/image/TOP10/3845/20.jpg" alt=""/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                Ava
            </div>
        </div>
    )
}