import React from "react";
import style from "./CreateCommentArea.module.css";
import {UserAvatar} from "../../../common/UserAvatar/UserAvatar";
import {Button} from "../../../common/Button/Button";
import {setCommentThunk, setTextAC} from "../../../../reducers/commentsPageReducer";

export const CreateCommentArea = ({dispatch, name, text, lastPage}) => {

    const commentInputHandler = (event) => {
        dispatch(setTextAC(event.target.value));
    };

    const sendButtonHandler = () => {
        const trimmedText = text.trim();
        if (trimmedText) {
            setCommentThunk(dispatch, name, trimmedText, lastPage);
            dispatch(setTextAC(''));
        } else {
            alert('Comment is not valid');
        }
    };

    const cancelButtonHandler = () => {
        dispatch(setTextAC(''));
    };


    return (
        <div className={style.createCommentWrapper}>
            <UserAvatar/>
            <div>
                <input onChange={commentInputHandler} value={text} className={style.commentInput}
                       placeholder={'Enter your comment...'}/>
                <div className={style.buttonsBlock}>
                    <Button buttonClickFunction={sendButtonHandler} buttonText='Send'/>
                    <Button buttonClickFunction={cancelButtonHandler} buttonText='Cancel'/>
                </div>
            </div>
        </div>
    );
};