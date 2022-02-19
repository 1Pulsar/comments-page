import React from "react";
import style from "./Paginator.module.css"

export const Paginator = ({currentPage, lastPage, pageButtonClickHandler}) => {

    let buttonsArray;

    if (currentPage > 3 && currentPage < lastPage - 2) {
        buttonsArray = [1, "...", currentPage - 2, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, "...", lastPage];
    } else if (currentPage < 4) {
        buttonsArray = [1, 2, 3, 4, "...", lastPage];
    } else if (currentPage > lastPage - 3) {
        buttonsArray = [1, "...", lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
    }

    const paginatorElements = buttonsArray.map((element, index) => {
        const isCurrent = currentPage === element ? ' ' + style.currentElement : ' ' + style.paginatorNumberElement;
        if (element === "...") {
            return (<div className={style.paginatorElement} key={element + index}>...</div>);
        } else {
            return (<div className={style.paginatorElement + isCurrent} key={element}
                         onClick={() => pageButtonClickHandler(element)}>{element}</div>);
        }
    });

    return (
        <div className={style.paginatorWrapper}>
            {paginatorElements}
        </div>
    );
};