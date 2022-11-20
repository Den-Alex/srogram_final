import React from "react";
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.atorus.ru/sites/default/files/upload/image/TOP10/3845/20.jpg" alt=""/>
            </div>
            <div>
                Ava
            </div>
        </div>
    )
}