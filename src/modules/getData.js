import * as api from "../lib/api"


// 액션 타입을 선언 합니다.
const GET_POST = "getData/GET_POST";
const GET_POST_SUCCESS =  "getData/GET_POST_SUCCESS";
const GET_POST_FAIL = 'getDate/GET_POST_FAIL';


const GET_USER = 'getDate/GET_USER';
const GET_USER_SUCCESS = 'getData/GET_USER_SUCCESS';
const GET_USER_FAIL = "getDate/GET_USER_FAIL";

// 액션 생성 함수 thunk 함수

export const getPost = id => async dispatch =>  {
  dispatch({type : GET_POST}); // 요청을 시작한 것을 알림
  try { // 예외처리
    const response = await api.getPost(id);
    dispatch({
      type: GET_POST_SUCCESS,
      payload : response.data
    }); // 요청이 성공 했을 때
  } catch(e) {
    dispatch({
      type : GET_POST_FAIL,
      payload : e,
      error: true
    }); // 에러 발생 했을 때
    throw e  // 나중에 컴포넌트단에서 에러를 조회할 수 있게 해 줌
  }
};

export const getUser = id => async dispatch => {
    dispatch({type : GET_USER});
    try {
      const response = await api.getUser(id)
      dispatch({
        type : GET_USER_SUCCESS,
        payload : response.data
      });
    } catch(e) {
      dispatch({
        type : GET_USER_FAIL,
        payload : e,
        error : true
      });
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

const getDataReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_POST : 
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST: true
        }
      }
    case GET_POST_SUCCESS : 
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST : false
        },
        post : action.payload
      }
    case GET_POST_FAIL :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST : false,
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
    case GET_USER_SUCCESS :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_USER : false
        },
        user : action.payload
      }
    case GET_USER_FAIL :
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

export default getDataReducer