import React, {useReducer} from "react";
import style from "./MainComponents.module.css";
import {Header} from "./Header/Header";
import {ModalWindow} from "../common/ModalWindow/ModalWindow";
import {Content} from "./Content/Content";
import {commentsInitialState, commentsPageReducer} from "../../reducers/commentsPageReducer";
import {CommentsContext} from "../../context/context";
import {ModalWindowChildren} from "./ModalWindowChildren/ModalWindowChildren";

export const MainComponents = (props) => {
    const [state, dispatch] = useReducer(commentsPageReducer, commentsInitialState);
    const commentContextValue = {state, dispatch};

    return (
        <div className={style.mainComponentWrapper}>
            <CommentsContext.Provider value={commentContextValue}>
                <Header name={state.name} total={state.total}/>
                <Content/>
                <ModalWindow modalWindowIsActive={state.modalWindowIsActive}>
                    <ModalWindowChildren dispatch={dispatch}/>
                </ModalWindow>
            </CommentsContext.Provider>
        </div>
    );
};