import { createStore } from "redux";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id : parseInt(id)
//   };
// };

//리덕스 툴킷을 이용하면 이걸로 대체가능
const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");




// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       console.log(action.payload)
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
//얘도리덕스 툴킷으로 바꾸면
const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) => {
    state.filter(toDo => toDo.id !== action.payload)
  },
});

const store = configureStore({reducer});

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
