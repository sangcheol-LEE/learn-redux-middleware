
// 액션 타입 정의
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
// 액션 생성 함수
export const increase = () => ({ type: INCREASE})
export const decrease = () => ({ type: DECREASE})


// thunk 함수 정의

export const increaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  },1500)
}

export const decreaseThunk = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease())
  },1500)
}

// 초기 상태
const initialState = {
  number : 0
}

// 리듀서 생성
const counterReducer = (state=initialState, action) => {
  switch(action.type) {
    case INCREASE :
      return {
        ...state,
        number : state.number + 1
      }
    case DECREASE :
      return {
        number : state.number - 1
      }
    default :
      return state
  }
}

export default counterReducer
