import React, {useContext, useEffect, useState} from "react";
import style from "./Content.module.css";
import {Preloader} from "../../common/Preloader/Preloader";
import {CreateCommentArea} from "./CreateCommentArea/CreateCommentArea";
import {Paginator} from "../../common/Paginator/Paginator";
import {Button} from "../../common/Button/Button";
import {CommentsContext} from "../../../context/context";
import {setAdditionalCommentsThunk, setCommentsThunk} from "../../../reducers/commentsPageReducer";
import {ParsedComments} from "./ParsedComments/ParsedComments";

export const Content = (props) => {
    const {state, dispatch} = useContext(CommentsContext);

    const [isFetch, toggleFetch] = useState(true);

    useEffect(() => {
        setCommentsThunk(dispatch, state.currentPage);
        toggleFetch(false);
    }, []);

    const moreButtonHandler = () => {
        setAdditionalCommentsThunk(dispatch, state.currentPage);
    };

    const moreButtonIsHidden = state.currentPage === state.lastPage ||
        <span><Button buttonText={'More'} buttonClickFunction={moreButtonHandler}/></span>;

    const paginatorHandler = (element) => {
        setCommentsThunk(dispatch, element);
    };

    if (isFetch) return <Preloader/>;

    return (
        <>
            <CreateCommentArea dispatch={dispatch} text={state.text} name={state.name} lastPage={state.lastPage}/>
            <Paginator lastPage={state.lastPage} currentPage={state.currentPage}
                       pageButtonClickHandler={paginatorHandler}/>
            <ParsedComments commentsData={state.commentsData} currentTime={state.currentTime}/>
            {moreButtonIsHidden}
            <div className={style.footer}>Footer</div>
        </>
    );
};