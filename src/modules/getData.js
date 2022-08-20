import * as api from '../lib/api'

// 액션 타입
const GET_PHOTO = 'data/GET_PHOTO';
const GET_PHOTO_OK = 'data/GET_PHOTO_OK';
const GET_PHOTO_FAIL = 'data/GET_PHOTO_FAIL';

const GET_COMMENT = 'data.GET_COMMENT';
const GET_COMMENT_OK = 'data.GET_COMMENT_OK';
const GET_COMMENT_FAIL = 'data.GET_COMMENT_FAIL';

// 액션 생성 함수 - Thunk 생성 함수
export const getPhoto = () => async dispatch => {
  dispatch({type : GET_PHOTO});
  try {
    const response = await api.getPhoto();

    dispatch({
      type : GET_PHOTO_OK,
      payload : response.data
    });
  } catch(e) {
    dispatch({
      type : GET_PHOTO_FAIL,
      payload : e,
      error: true
    });
    throw e
  };
};

export const getComment = id => async dispatch => {
  dispatch({type : GET_COMMENT })
  try {
    const response = await api.getComment(id)
    dispatch({
      type : GET_COMMENT_OK,
      payload : response.data
    });
  }catch(e) {
    dispatch({
      type : GET_COMMENT_FAIL,
      payload : e,
      error : true
    });
    throw e
  };
};

// 초기상태
const initialState = {
  loading : {
    GET_PHOTO : false,
    GET_COMMENT : false,
  },
  photo : null,
  comment : null
}

// 리듀서
const getDataReducer = (state=initialState, action) => {
  switch(action.type) {
    case GET_PHOTO :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_PHOTO : true
        }
      };
    case GET_PHOTO_OK :
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PHOTO : false
        },
        photo : action.payload
      };
    case GET_PHOTO_FAIL :
      return {
        ...state,
        loading: {
          ...state.loading,
          GET_PHOTO : false
        }
      };
    case GET_COMMENT :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_COMMENT : true
        }
      };
    case GET_COMMENT_OK :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_COMMENT : false
        },
        comment : action.payload
      };
    case GET_COMMENT_FAIL :
      return {
        ...state,
        loading : {
          ...state.loading,
          GET_COMMENT : false
        }
      };
    default :
      return state
  }
}

export default getDataReducer