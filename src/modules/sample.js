import * as api from "../lib/api" 


//액션 타입 선언 
// 한 요청 당 세 개를 만들어야 함

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수 생성
// thunk 함수 내부에서는 시작할 때, 성공할 때, 실패했을 때 다른 액션을 디스패치 한다.

export const getPost = id => async dispatch => {
  dispatch({type : GET_POST});
  try {
    const response = await api.getPost(id)
    dispatch({
      type : GET_POST_SUCCESS,
      payload : response.data
    }); // 요청 성공
  } catch (e) {
    dispatch({
      type : GET_POST_FAILURE,
      payload : e,
      error: true
    }) // 에러 발생
    throw e; // 나중에 컴포넌트에서 에러를 조회할 수 있게 해줌
  }
}

export const getUsers = () => async dispatch => {
  dispatch({ type : GET_USERS }) // 요청을 시작한 것을 알림
  try {
    const response = await api.getUsers();
    dispatch({
      type : GET_USERS_SUCCESS,
      payload : response.data
    }) // 요청 성공
  } catch(e) {
    dispatch({
      type : GET_USERS_FAILURE,
      payload : e,
      error: true
    }) // 에러 발생
     throw e
  }
}

// 초기 상태 
const initialState = {
  loading : {
    GET_POST : false,
    GET_USERS : false
  },
  post : null,
  users : null
}

// 리듀서 

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_POST :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST : true // 요청 시작
        }
      }
    
    case GET_POST_SUCCESS :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST : false  // 요청 완료
        },
        post : action.payload
      }

    case GET_POST_FAILURE :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_POST : false
        }
      }
    case GET_USERS :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_USERS : true
        }
      }

    case GET_USERS_SUCCESS :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_USERS : false
        },
        users : action.payload
      }

    case GET_USERS_FAILURE :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_USERS : false
        }
      }
    default :
      return state
  }
}

export default sampleReducer