import {getCommentsData, postComment} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS';
const SET_ADDITIONAL_COMMENTS = 'SET_ADDITIONAL_COMMENTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
const SET_NAME = 'SET_NAME';
const SET_TEXT = 'SET_TEXT';
const SET_LAST_PAGE = 'SET_LAST_PAGE';
const OPEN_MODAL_WINDOW = 'OPEN_MODAL_WINDOW';
const CLOSE_MODAL_WINDOW = 'CLOSE_MODAL_WINDOW';

export const commentsInitialState = {
    name: '',
    text: '',
    commentsData: [],
    currentPage: 1,
    lastPage: 455,
    total: 0,
    currentTime: 0,
    modalWindowIsActive: true
};

export const commentsPageReducer = (state, action) => {
    switch (action.type) {
        case SET_COMMENTS:
            return {...state, commentsData: action.commentsData}
        case SET_ADDITIONAL_COMMENTS:
            return {...state, commentsData: [...state.commentsData, ...action.commentsData]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_PAGES:
            return {...state, total: action.total}
        case SET_NAME:
            return {...state, name: action.name}
        case SET_TEXT:
            return {...state, text: action.text}
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.currentTime}
        case SET_LAST_PAGE:
            return {...state, lastPage: action.lastPage}
        case OPEN_MODAL_WINDOW:
            return {...state, modalWindowIsActive: true}
        case CLOSE_MODAL_WINDOW:
            return {...state, modalWindowIsActive: false}
        default:
            return state
    }
};

export const setCommentsAC = (commentsData) => ({type: SET_COMMENTS, commentsData});
export const setAdditionalCommentsAC = (commentsData) => ({type: SET_ADDITIONAL_COMMENTS, commentsData});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalPagesAC = (total) => ({type: SET_TOTAL_PAGES, total});
export const setCurrentTimeAC = (currentTime) => ({type: SET_CURRENT_TIME, currentTime});
export const setLastPageAC = (lastPage) => ({type: SET_LAST_PAGE, lastPage});
export const openModalWindow = () => ({type: OPEN_MODAL_WINDOW});
export const closeModalWindow = () => ({type: CLOSE_MODAL_WINDOW});
export const setNameAC = (name) => ({type: SET_NAME, name});
export const setTextAC = (text) => ({type: SET_TEXT, text});

export const setCommentsThunk = (dispatch, currentPage) => {
    getCommentsData(currentPage)
        .then(data => {
            const currentTime = Date.now();
            dispatch(setCommentsAC(data.data));
            dispatch(setCurrentPageAC(data.current_page));
            dispatch(setTotalPagesAC(data.total));
            dispatch(setCurrentTimeAC(currentTime));
            dispatch(setLastPageAC(data.last_page));
        });
};

export const setAdditionalCommentsThunk = (dispatch, currentPage) => {
    getCommentsData(currentPage + 1)
        .then(data => {
            const currentTime = Date.now();
            dispatch(setAdditionalCommentsAC(data.data));
            dispatch(setCurrentPageAC(data.current_page));
            dispatch(setTotalPagesAC(data.total));
            dispatch(setCurrentTimeAC(currentTime));
            dispatch(setLastPageAC(data.last_page));
        });
};

export const setCommentThunk = (dispatch, name, text, lastPage) => {
    postComment(name, text)
        .then(() => {
            setCommentsThunk(dispatch, lastPage);
        });
};