import React from "react";
import style from "./UserAvatar.module.css";
import defaultUserAvatar from "../../../images/defaultUserAvatar.png"


export const UserAvatar = (props) => {
    return (
        <>
            <img className={style.userAvatar} src={defaultUserAvatar} alt={'User avatar'}/>
        </>
    )
}