import { createStore } from 'redux';
import {
    decrement, 
    increment,
    toggleSwitch
} from './action/counter'
import {reducer} from './reducer'

const lightDiv = document.getElementsByClassName('light')[0];
const switchButton = document.getElementById('switch-btn');

const counterHeadings = document.getElementsByTagName('h1')[0];
const plusButton = document.getElementById('plus-btn');
const minusButton = document.getElementById('minus-btn');




  // **** 스토어 만들기
const store = createStore(reducer);



// **** render 함수 만들기
const render = () => {
    const state = store.getState(); // 현재 상태를 가져옵니다.
    const { light, counter } = state; // 편의상 비구조화 할당
    if (light) {
      lightDiv.style.background = 'green';
      switchButton.innerText = '끄기';
    } else {
      lightDiv.style.background = 'gray';
      switchButton.innerText = '켜기';
    }
    counterHeadings.innerText = counter;
  };
  
  render();


//  구독
store.subscribe(render);

// **** 이벤트 달아주기, 액션 발생 시키기
switchButton.onclick = () => {
  store.dispatch(toggleSwitch());
}

plusButton.onclick = () => {
  store.dispatch(increment(5));
}

minusButton.onclick = () => {
  store.dispatch(decrement());
}