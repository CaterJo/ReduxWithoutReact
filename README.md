# Redux without React

## intro

리덕스를 이해하는 과정으로 순수 리덕스가 어떻게 돌아가는지 react없는 환경에서 다뤄본다.  
react에서는 redux를 쉽게 다루기 위해 `react-redux` 라이브러리를 사용하는데 처음부터 이 라이브러리리와 함께 사용했을때 redux의 구조파악이 안될 수 있다.  
내부에 어떤 함수로 어떻게 이뤄지는지 파악해보기 위해 다뤄보는 예제다.

## 상태관리 라이브러리를 쓰는 이유

### 1. 미들웨어를 통한 기능확장에 용이하다.

### 2. 상태 업데이트 로직을 분리할 수 있다.

상태 업데이트 로직들을 컴포넌트에서 분리할 수 있고 이 로직들을 모듈화하여 여러 파일들로 저장해서 관리하면 유지보수가 좋다.

### 3. 더 쉬운 상태관리

직접 전달하는것 보다 글로벌 상태관리의 이점으로 컴포넌트간 결합도를 분리할 수 있다.

## 개념

### 리듀서(Reducer)

```js
function reducer(state, action) {
  // 상태 업데이트 로직
  return alteredState;
}
```

action객체와 현재의 상태를 인자로 받아서 액션 타입에 따라 어떤 변화를 일으킬지 정의한다.  
이때 새로운 상태를 반환할 때 불변성을 지켜줘야한다.

### 스토어

스토어 안에는 현재의 앱 상태와 리듀서가 들어가 있다.

### 디스패치(dispatch)

스토어의 내장함수로 액션을 발생 시키는 것이라 이해하면 된다.  
dispatch를 호출하면 스토어는 리듀서 함수를 실행시켜서 해당 액션을 처리하는 로직을 수행하고 새로운 상태를 반환한다.

### 구독(subscribe)

스토어의 내장함수로 이 subscribe에 함수르 전달하면 액션이 dispatch될 때마다 전달해준 함수가 호출된다.

## REF

- [0.상태관리 라이브러리의 미학](https://velog.io/@velopert/redux-or-mobx)
- [1.Redux소개및 개념정리](https://velog.io/@velopert/Redux-1-%EC%86%8C%EA%B0%9C-%EB%B0%8F-%EA%B0%9C%EB%85%90%EC%A0%95%EB%A6%AC-zxjlta8ywt#12.-%EA%B0%9C%EB%85%90-%EB%AF%B8%EB%A6%AC-%EC%A0%95%EB%A6%AC%ED%95%98%EA%B8%B0)
- [2.리액트 없이 쓰는 리덕스](https://velog.io/@velopert/Redux-2-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%97%86%EC%9D%B4-%EC%93%B0%EB%8A%94-%EB%A6%AC%EB%8D%95%EC%8A%A4-cijltabbd7)
