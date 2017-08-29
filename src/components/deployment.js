import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import DeploymentEntry from './deployment_entry';

const Deployment = (props) => {
  let deploymentColor = '';
  if (props.soldiersOnMission.length === 0) {
    deploymentColor = 'red-deploy';
  } else if (props.soldiersOnMission.length > 0 && props.soldiersOnMission.length < props.maxDeployedSoldiers) {
    deploymentColor = 'yellow-deploy';
  } else {
    deploymentColor = 'green-deploy';
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
