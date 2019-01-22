import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import RosterEntry from './rosterEntry';
import { isEmpty } from 'ramda';

const GameArea = props => {
  if (props.missionInProgress === true) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/sectoid_thm.jpg')} alt="" />
        </div>
        <div id="game-area-contents">
          <div className="col-sm-4" />
          <div className="col-sm-8">mission flow here</div>
        </div>
      </div>
    );
  } else if (props.missionNumber > 0 && props.viewingRoster === false && props.postMissionScreen === false) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/hologlobe.jpg')} alt="" />
        </div>
        <div id="game-area-contents">
          <div className="col-sm-8" />
          <div className="col-sm-4">
            <p>CREDITS: §{props.credits}</p>
            <p>ALLOYS: {props.alienAlloys}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.viewingRoster === true) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/avenger.jpg')} alt="" />
        </div>
        <div id="game-area-contents">
          <div id="roster-container">
            <p id="roster-title">ROSTER</p>
            <p className="pull-right">CREDITS: §{props.credits}</p>
            <table id="roster-table">
              <tbody>
                <tr>
                  <th className="roster-header">NAME</th>
                  <th className="roster-header">CLASS</th>
                  <th className="roster-header">RANK</th>
                  <th className="roster-header">KILLS</th>
                  <th className="roster-header">STATUS</th>
                </tr>
                {!isEmpty(props.soldiers) &&
                  props.soldiers.map(soldier => {
                    return <RosterEntry assignable={true} soldier={soldier} key={soldier.name} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else if (props.postMissionScreen) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/firebrand.png')} alt="" />
        </div>
        <div id="game-area-contents">
          <div id="roster-container">
            <p id="roster-title">DEBRIEFING</p>
            <p id="debriefing-operation">OPERATION {props.prevMission.name.toUpperCase()}</p>
            <p>CREDITS: §{props.credits}</p>
            <p>ALLOYS: {props.alienAlloys}</p>
            <table id="roster-table">
              <tbody>
                <tr>
                  <th className="roster-header">NAME</th>
                  <th className="roster-header">CLASS</th>
                  <th className="roster-header">RANK</th>
                  <th className="roster-header">KILLS</th>
                  <th className="roster-header">STATUS</th>
                </tr>
                {!isEmpty(props.prevMission.participation) && props.prevMission.participation.map((soldier, i) => <RosterEntry assignable={false} soldier={soldier} key={i} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return <img id="xcom-alpha-logo" src={require('../img/xcom_alpha.png')} alt="" />;
  }
};

const mapStateToProps = state => {
  return {
    missionNumber: state.missionNumber,
    credits: state.credits,
    alienAlloys: state.alienAlloys,
    viewingRoster: state.viewingRoster,
    postMissionScreen: state.postMissionScreen,
    soldiers: state.soldiers,
    missionInProgress: state.missionInProgress,
    prevMission: state.prevMission,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameArea);
