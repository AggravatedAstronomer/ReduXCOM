import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import DeploymentEntry from './deployment_entry';

const Deployment = (props) => {
  let deploymentColor = '';
  if (props.soldiersOnMission.length == 0) {
    deploymentColor = 'red-deploy';
  } else if (props.soldiersOnMission.length > 0 && props.soldiersOnMission.length < props.maxDeployedSoldiers) {
    deploymentColor = 'yellow-deploy';
  } else {
    deploymentColor = 'green-deploy';
  }
  let nextMissionDifficultyColor = 'easy-mission';
  if (props.nextMission.difficulty == 'Moderate') {
    nextMissionDifficultyColor = 'moderate-mission';
  } else if (props.nextMission.difficulty == 'Difficult') {
    nextMissionDifficultyColor = 'difficult-mission';
  } else if (props.nextMission.difficulty == 'Very difficult') {
    nextMissionDifficultyColor = 'very-difficult-mission';
  }
  if (props.missionNumber > 0 && !props.missionInProgress) {
    return (
      <div id="deployment-selection">
        <p id="deployment-title">
          Deployment <text className={deploymentColor}>[{props.soldiersOnMission.length} / {props.maxDeployedSoldiers}]</text>
        </p>
        <table id="deployment-table">
          <tbody>
            <tr>
              <th className="roster-header">Name</th>
              <th className="roster-header">Class</th>
            </tr>
            {props.soldiersOnMission.map(function(soldier, i){
              return <DeploymentEntry obj={soldier} key={i} />
            })}
          </tbody>
        </table>
        <div>
          <p id="operation-title">Operation</p>
            <p id="operation-name">
              {props.nextMission.name}<br></br>
              <text className={nextMissionDifficultyColor}>Difficulty: {props.nextMission.difficulty}</text>
            </p>
        </div>
      </div>
    );
  } else {
    return (
      null
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionNumber: state.missionNumber,
    soldiersOnMission: state.soldiersOnMission,
    maxDeployedSoldiers: state.maxDeployedSoldiers,
    missionInProgress: state.missionInProgress,
    nextMission: state.nextMission,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
