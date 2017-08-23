import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import MissionSoldier from './mission_soldier';

const MissionArea = (props) => {
  let operationUI = null;
  if (props.missionNumber > 0) {
    let nextMissionDifficultyColor = 'difficulty easy-mission';
    if (props.nextMission.difficulty == 'Moderate') {
      nextMissionDifficultyColor = 'difficulty moderate-mission';
    } else if (props.nextMission.difficulty == 'Difficult') {
      nextMissionDifficultyColor = 'difficulty difficult-mission';
    } else if (props.nextMission.difficulty == 'Very difficult') {
      nextMissionDifficultyColor = 'difficulty very-difficult-mission';
    }
    operationUI = (
      <div>
        <div className="col-sm-3"></div>
        <div className="col-sm-6" id="next-operation">
          <p id="operation-name">Operation {props.nextMission.name}</p>
          <text className={nextMissionDifficultyColor}>Difficulty: {props.nextMission.difficulty}</text>
        </div>
        <div className="col-sm-3"></div>
      </div>
    )
  }
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
        {operationUI}
        <img id="pending-spinner" src={require('../img/XCOM_Shield_Logo.gif')}/>
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
    nextMission: state.nextMission,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionArea);
