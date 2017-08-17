import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import RosterToggle from './roster_toggle'

const StartOrContinue = (props) => {
  if (props.missionNumber > 0) {
    let nextMission = <p></p>
    if (props.viewingRoster === false) {
      nextMission = <div onClick={(e) => props.launchMission() } className="side-option"><p>Next Mission ></p></div>
    } else {
      nextMission = <div className="side-option side-option-disabled"><p>Next Mission ></p></div>
    }
    return (
    <div>
      {nextMission}
      <RosterToggle/>
    </div>
    );
  } else if (props.user) {
    return (
    <div onClick={(e) => props.startCampaign() } className="side-option">
      <p>Start Game ></p>
    </div>
    );
  } else {
    return (
    <div className="side-option-disabled">
      <p>Start Game ></p>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    user: state.user,
    viewingRoster: state.viewingRoster,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    launchMission: () => dispatch(actions.launchMission()),
    startCampaign: () => dispatch(actions.startCampaign()),
    viewRoster: () => dispatch(actions.viewRoster()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartOrContinue);
