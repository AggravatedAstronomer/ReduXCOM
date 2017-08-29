import React from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const Reset = (props) => {
  if (props.missionNumber > 0 && props.resetConfirm === false) {
    return (
    <div onClick={(e) => props.promptReset() } className="side-option">
      <p id="reset"> Reset ></p>
    </div>
    );
  } else if (props.missionNumber > 0 && props.resetConfirm === true) {
    return (
      <div className="side-option">
        <p id="reset">
          <span id="reset-cancel" onClick={(e) => props.cancelReset() } className="glyphicon glyphicon-remove pull-left icon-button"></span>
          <span id="reset-text">&lt; Confirm &gt;</span>
          <span id="reset-confirm" onClick={(e) => props.reset() } className="glyphicon glyphicon-ok pull-right icon-button"></span>
        </p>
      </div>
    )
  } else {
    return (
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    resetConfirm: state.resetConfirm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    promptReset: () => dispatch(actions.promptReset()),
    cancelReset: () => dispatch(actions.cancelReset()),
    reset: () => dispatch(actions.resetGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reset);
