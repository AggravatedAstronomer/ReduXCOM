import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import RosterEntry from './roster_entry';


const GameArea = (props) => {
  if (props.missionInProgress === true) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/sectoid_thm.jpg')} alt=""></img>
        </div>
        <div id="game-area-contents">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-8">
            mission flow here
          </div>
        </div>
      </div>
    );
  } else if (props.missionNumber > 0 && props.viewingRoster === false && props.postMissionScreen === false ) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/hologlobe.jpg')} alt=""></img>
        </div>
        <div id="game-area-contents">
          <div className="col-sm-9">
          </div>
          <div className="col-sm-3">
            <p>Credits: §{props.credits}</p>
            <p>Alloys: {props.alienAlloys}</p>
          </div>
        </div>
      </div>
    );
  } else if (props.viewingRoster === true) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/avenger.jpg')} alt=""></img>
        </div>
        <div id="game-area-contents">
      <div id="roster-container">
        <p id="roster-title">Roster</p>
        <p className="pull-right">Credits: §{props.credits}</p>
        <table id="roster-table">
          <tbody>
            <tr>
              <th className="roster-header">Name</th>
              <th className="roster-header">Class</th>
              <th className="roster-header">Rank</th>
              <th className="roster-header">Kills</th>
              <th className="roster-header">Status</th>
            </tr>
            {props.soldiers.map(function(soldier, i){
              return <RosterEntry obj={soldier} key={i} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    )
  } else if (props.postMissionScreen) {
    return (
      <div className="game-area">
        <div className="game-area-image-container">
          <img id="game-area-image" src={require('../img/firebrand.png')} alt=""></img>
        </div>
        <div id="game-area-contents">
      <div id="roster-container">
        <p id="roster-title">Debreifing</p>
        <p id="debriefing-operation">Operation {props.prevMission.name}</p>
        <p>Credits: §{props.credits}</p>
        <p>Alloys: {props.alienAlloys}</p>
        <table id="roster-table">
          <tbody>
            <tr>
              <th className="roster-header">Name</th>
              <th className="roster-header">Class</th>
              <th className="roster-header">Rank</th>
              <th className="roster-header">Kills</th>
              <th className="roster-header">Status</th>
            </tr>
            {props.soldiers.map(function(soldier, i){
              return <RosterEntry obj={soldier} key={i} />
            })}
          </tbody>
        </table>
      </div>
    </div>
  </div>
    )
  } else {
    return (
      <img id="xcom-alpha-logo" src={require('../img/xcom_alpha.png')} alt=""></img>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    credits: state.credits,
    alienAlloys: state.alienAlloys,
    viewingRoster: state.viewingRoster,
    postMissionScreen: state.postMissionScreen,
    soldiers: state.soldiers,
    missionInProgress: state.missionInProgress,
    prevMission: state.prevMission,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);
