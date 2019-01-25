import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import SideButton from './sideButton';

const MissionMenus = props => {
  const { abortConfirm, nextTurn } = props;
  return (
    <div>
      <SideButton text="End Turn >" action={() => nextTurn()} />
      {abortConfirm ? (
        <div className="side-option">
          <p id="reset">
            <span id="reset-cancel" onClick={e => props.cancelAbort()} className="glyphicon glyphicon-remove pull-left icon-button" />
            <span id="reset-text">&lt; Confirm &gt;</span>
            <span id="reset-confirm" onClick={e => props.abortMission()} className="glyphicon glyphicon-ok pull-right icon-button" />
          </p>
        </div>
      ) : (
        <div id="evac" onClick={e => props.promptAbort()} className="side-option">
          <span>Evac ></span>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  missionNumber: state.missionNumber,
  user: state.user,
  viewingRoster: state.viewingRoster,
  abortConfirm: state.abortConfirm,
});

const mapDispatchToProps = dispatch => ({
  startCampaign: () => dispatch(actions.startCampaign()),
  viewRoster: () => dispatch(actions.viewRoster()),
  promptAbort: () => dispatch(actions.promptAbort()),
  cancelAbort: () => dispatch(actions.cancelAbort()),
  abortMission: () => dispatch(actions.abortMission()),
  nextTurn: () => dispatch(actions.nextTurn()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MissionMenus);
