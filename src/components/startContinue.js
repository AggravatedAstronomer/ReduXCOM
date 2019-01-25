import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';
import RosterToggle from './rosterToggle';
import SideButton from './sideButton';
import { isEmpty } from 'ramda';

const StartOrContinue = props => {
  const { user, missionNumber } = props;
  const missionReady = !isEmpty(props.soldiersOnMission);
  console.log(missionReady);
  if (user && missionNumber > 0) {
    return (
      <div>
        <SideButton text="Launch Mission >" action={() => props.launchMission()} disabled={!missionReady} />
        <RosterToggle />
      </div>
    );
  } else {
    return <SideButton text="Start Campaign >" action={() => props.startCampaign()} disabled={!props.user} />;
  }
};

const mapStateToProps = state => ({
  missionNumber: state.missionNumber,
  user: state.user,
  soldiersOnMission: state.soldiersOnMission,
});

const mapDispatchToProps = dispatch => ({
  launchMission: () => dispatch(actions.launchMission()),
  startCampaign: () => dispatch(actions.startCampaign()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartOrContinue);
