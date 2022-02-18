import React from "react";
import style from "./Paginator.module.css"

export const Paginator = ({currentPage, totalPages, pageButtonClickHandler}) => {

    let buttonsArray;

    if (currentPage>3 && currentPage<totalPages-2) {
       buttonsArray = [1, "..." , currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2, "..." , totalPages]
    } else if (currentPage<4) {
        buttonsArray = [1, 2, 3, 4, "..." , totalPages]
    } else if (currentPage>totalPages-3) {
        buttonsArray = [1, "..." , totalPages-3 ,totalPages-2 ,totalPages-1 ,totalPages]
    }

    const paginatorElements = buttonsArray.map((element, index) => {
        const isCurrent = currentPage === element ? ' ' + style.currentElement : ' ' + style.paginatorNumberElement
        if (element === "...") {
            return (<div className={style.paginatorElement} key={element + index}>...</div>)
        } else {
            return (<div className={style.paginatorElement + isCurrent} key={element} onClick={() => pageButtonClickHandler(element)}>{element}</div>)
        }
    })

    return (
        <div className={style.paginatorWrapper}>
            {paginatorElements}
        </div>
    )
}