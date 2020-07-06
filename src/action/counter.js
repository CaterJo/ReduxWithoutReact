// 액션 타입 정의
export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


// **** 액션 생성함수 정의
export const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
export const increment = diff => ({ type: INCREMENT, diff });
export const decrement = () => ({ type: DECREMENT });
