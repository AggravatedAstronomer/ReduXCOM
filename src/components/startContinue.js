import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import RosterToggle from './rosterToggle';

const StartOrContinue = props => {
  if (props.missionNumber > 0) {
    let nextMission = <p />;
    if (props.soldiersOnMission > 0) {
      nextMission = (
        <div onClick={e => props.launchMission()} className="side-option">
          <p>Launch Mission ></p>
        </div>
      );
    } else {
      nextMission = (
        <div className="side-option side-option-disabled">
          <p>Launch Mission ></p>
        </div>
      );
    }
    return (
      <div>
        {nextMission}
        <RosterToggle />
      </div>
    );
  } else if (props.user) {
    return (
      <div onClick={e => props.startCampaign()} className="side-option">
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
};

const mapStateToProps = state => {
  return {
    missionNumber: state.missionNumber,
    user: state.user,
    soldiersOnMission: state.soldiersOnMission.length,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    launchMission: () => dispatch(actions.launchMission()),
    startCampaign: () => dispatch(actions.startCampaign()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartOrContinue);
