import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import MissionSoldier from './missionSoldier';
import { Grid, Row, Col } from 'react-bootstrap';

const MissionArea = props => {
  let operationUI = null;
  if (props.missionNumber > 0) {
    let nextMissionDifficultyColor = 'difficulty easy-mission';
    if (props.nextMission.difficulty === 'Moderate') {
      nextMissionDifficultyColor = '=difficulty moderate-mission';
    } else if (props.nextMission.difficulty === 'Difficult') {
      nextMissionDifficultyColor = 'difficulty difficult-mission';
    } else if (props.nextMission.difficulty === 'Very difficult') {
      nextMissionDifficultyColor = 'difficulty very-difficult-mission';
    }
    operationUI = (
      <div>
        <div id="next-operation">
          <p className="title text-center" id="operation-name">
            OPERATION {props.nextMission.name.toUpperCase()}
          </p>
          <p className={nextMissionDifficultyColor + ' text-center'}>Difficulty: {props.nextMission.difficulty}</p>
        </div>
      </div>
    );
  }
  if (props.missionInProgress === true) {
    return (
      <div className="mission-area">
        <div className="mission-area-image-container">
          <img id="mission-area-image" src={require('../img/objectives.jpg')} alt="" />
        </div>
        <div id="mission-area-contents">
          <p className="title" id="mission-title">
            M E N A C E 1 - 5
          </p>
          <table id="menace-1-5">
            <tbody>
              {props.soldiersOnMission.map((soldier, i) => (
                <MissionSoldier obj={soldier} key={i} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (props.missionNumber > 0) {
    return (
      <div className="mission-area">
        {operationUI}
        <img id="pending-spinner" src={require('../img/logo.gif')} alt="" />
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  missionNumber: state.missionNumber,
  missionInProgress: state.missionInProgress,
  soldiersOnMission: state.soldiersOnMission,
  nextMission: state.nextMission,
});

export default connect(
  mapStateToProps,
  null
)(MissionArea);
