import * as api from "../lib/api";

const GET_POST = 'samples/GET_POST';
const GET_POST_GOOD = 'samples/GET_POST_GOOD';
const GET_POST_BAD = 'samples/GET_POST_BAD';

const GET_USER = 'samples/GET_USER';
const GET_USER_GOOD = 'samples/GET_USER_GOOD';
const GET_USER_BAD = 'samples/GET_USER_BAD';

export const getPost = id => async dispatch => {
    dispatch({type : GET_POST});
    try {
        const response = await api.getPost(id)
        dispatch({
            type : GET_POST_GOOD,
            payload : response.data
        })
    } catch(e) {
        dispatch({
            type : GET_POST_BAD,
            payload : e,
            error : true
        })
        throw e
    }
}

export const getUser = () => async dispatch => {
    dispatch({type: GET_USER});
    try {
        const response = await api.getUsers()
        dispatch({
            type : GET_USER_GOOD,
            payload : response.data
        })
    } catch(e) {
        dispatch({
            type : GET_USER_BAD,
            payload : e,
            error : true
        })
        throw e
    }
}

const initialState = {
    loading : {
        GET_POST : false,
        GET_USER : false
    },
    post : null,
    user : null
}

const samplesReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_POST :
            return {
                ...state,
                loading : {
                    ...state.loading,
                    GET_POST : true
                }
            }
        case GET_POST_GOOD :
            return {
                ...state,
                loading : {
                    ...state.loading,
                    GET_POST : false,
                },
                post : action.payload
            }
        case GET_POST_BAD :
            return {
                ...state,
                loading : {
                    ...state.loading,
                    GET_POST : false
                }
            }

        case GET_USER :
            return {
                ...state,
                loading : {
                    ...state.loading,
                    GET_USER : true
                }
            }
        case GET_USER_GOOD :
            return {
                ...state,
                loading :{
                    ...state.loading,
                    GET_USER : false
                },
                user : action.payload
            }
        case GET_USER_BAD :
            return {
                ...state,
                loading : {
                    ...state.loading,
                    GET_USER : false
                }
            }
        default :
            return state
    }
}

export default samplesReducer