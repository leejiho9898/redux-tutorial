import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS"; //안전을 위해서

const countModifier = (count = 0, action) => {
  // 액션 타입을 받아서 state를 수정해주는 함수
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
}; //return을 하면 그게 바로 application의 state가됨

const countStore = createStore(countModifier);
const onchange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onchange); //subscribe는 변화하는걸 감지해서 감지되면 ()의 함수를 실행해줌

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};
const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
