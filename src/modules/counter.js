const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});

export const increaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(increase())
  },1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => {
    dispatch(decrease())
  },1000)
}


const initialState = {
  number : 0
}

const counterReducer = (state = initialState, action) => {
   switch(action.type) {
     case INCREASE : 
      return {
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