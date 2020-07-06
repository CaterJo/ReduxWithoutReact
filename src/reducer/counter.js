import {
    DECREMENT, 
    INCREMENT,
    TOGGLE_SWITCH,
} from '../action/counter'


// **** 초깃값 설정
const initialState = {
    light: false,
    counter: 0
  };

  
// **** 리듀서 함수 정의
function reducer(state = initialState, action) {
    switch (action.type) {
      case TOGGLE_SWITCH:
        return {
          ...state, // 기존의 값은 그대로 두면서
          light: !state.light // light 값 반전시키기
        };
      case INCREMENT:
        return {
          ...state,
          counter: state.counter + action.diff
        };
      case DECREMENT:
        return {
          ...state,
          counter: state.counter - 1
        };
      default:
        // 지원하지 않는 액션의 경우 상태 유지
        return state;
    }
  }

  export default reducer;