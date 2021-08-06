import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "./../store";

function ToDo({ text,onBtnClick }) {
  return (
    <li>
      {text} <button onClick={onBtnClick}>DEL</button>
    </li>
  );
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
}
// function mapStateToProps(state) {
//     return { toDos: state };
//   }
export default connect(null, mapDispatchToProps)(ToDo);
