import React from "react";
import style from "./Content.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {CreateCommentArea} from "./CreateCommentArea/CreateCommentArea";
import {Paginator} from "../../common/Paginator/Paginator";
import {CommentElement} from "../../common/CommentElement/CommentElement";
import {Button} from "../../common/Button/Button";

export const Content = (props) => {
    return (
        <>
            <CreateCommentArea/>
            <Preloader/>
            <Paginator totalPages={456} currentPage={6} />
            <CommentElement/>
            <Button buttonText={'More'}/>
        </>
    )
}