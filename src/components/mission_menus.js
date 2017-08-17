import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const MissionMenus = (props) => {
  if (props.abortConfirm === false) {
    return (
      <div>
        <div onClick={(e) => props.nextTurn() } className="side-option"><p>End Turn ></p></div>
        <div id="evac" onClick={(e) => props.promptAbort() } className="side-option"><p>Evac ></p></div>
      </div>
    );
  } else {
    return (
      <div>
        <div onClick={(e) => props.nextTurn() } className="side-option"><p>End Turn ></p></div>
        <div className="side-option">
          <p id="reset">
          <span id="reset-cancel" onClick={(e) => props.cancelAbort() } className="glyphicon glyphicon-remove pull-left icon-button"></span>
          <span id="reset-text">&lt; Confirm &gt;</span>
          <span id="reset-confirm" onClick={(e) => props.abortMission() } className="glyphicon glyphicon-ok pull-right icon-button"></span>
        </p>
      </div>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    user: state.user,
    viewingRoster: state.viewingRoster,
    abortConfirm: state.abortConfirm,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startCampaign: () => dispatch(actions.startCampaign()),
    viewRoster: () => dispatch(actions.viewRoster()),
    promptAbort: () => dispatch(actions.promptAbort()),
    cancelAbort: () => dispatch(actions.cancelAbort()),
    abortMission: () => dispatch(actions.abortMission()),
    nextTurn: () => dispatch(actions.nextTurn()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionMenus);
