import React from "react";
import style from "./CreateCommentArea.module.css";
import {UserAvatar} from "../../../common/UserAvatar/UserAvatar";
import {Button} from "../../../common/Button/Button";

export const CreateCommentArea = (props) => {
    return (
        <div className={style.createCommentWrapper}>
            <UserAvatar/>
            <div>
                <input className={style.commentInput}/>
                <div className={style.buttonsBlock}>
                    <Button buttonText='Send' />
                    <Button buttonText='Cancel' />
                </div>
            </div>
        </div>
    );
};