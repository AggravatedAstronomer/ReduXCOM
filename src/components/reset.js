import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import SideButton from './sideButton';

const Reset = props => {
  const { resetConfirm } = props;
  return (
    <div>
      {resetConfirm ? (
        <div className="side-option">
          <span id="reset">
            <span id="reset-cancel" onClick={e => props.cancelReset()} className="glyphicon glyphicon-remove pull-left icon-button" />
            <span id="reset-text">&lt; Confirm &gt;</span>
            <span id="reset-confirm" onClick={e => props.reset()} className="glyphicon glyphicon-ok pull-right icon-button" />
          </span>
        </div>
      ) : (
        <div onClick={e => props.promptReset()} className="side-option">
          <span id="reset"> Reset ></span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  resetConfirm: state.resetConfirm,
});

const mapDispatchToProps = dispatch => ({
  promptReset: () => dispatch(actions.promptReset()),
  cancelReset: () => dispatch(actions.cancelReset()),
  reset: () => dispatch(actions.resetGame()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reset);
