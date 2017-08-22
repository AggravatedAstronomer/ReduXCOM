import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import MissionSoldier from './mission_soldier';

const MissionArea = (props) => {
  if (props.missionInProgress  === true) {
    return (
      <div className="mission-area">
        <div className="mission-area-image-container">
          <img id="mission-area-image" src={require('../img/objectives.jpg')}/>
        </div>
        <div id="mission-area-contents">
          <p id="mission-title">Menace 1-5</p>
            <table id="menace-1-5">
              <tbody>
                {props.soldiersOnMission.map(function(soldier, i){
                  return <MissionSoldier obj={soldier} key={i} />
                })}
              </tbody>
            </table>
        </div>
      </div>
    );
  } else if (props.missionNumber > 0) {
    return (
      <div className="mission-area">
        <p id="mission-title">Mission Pending...</p>
        <img src={require('../img/XCOM_Shield_Logo.gif')}/>
      </div>
    );
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    missionInProgress: state.missionInProgress,
    soldiersOnMission: state.soldiersOnMission,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionArea);
