import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import DeploymentEntry from './deploymentEntry';

const Deployment = props => {
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
          DEPLOYMENT
          <p className={deploymentColor}>
            [{props.soldiersOnMission.length} / {props.maxDeployedSoldiers}]
          </p>
        </p>
        <table id="deployment-table">
          <tbody>
            <tr>
              <th className="roster-header">NAME</th>
              <th className="roster-header">CLASS</th>
            </tr>
            {props.soldiersOnMission.map(soldier => {
              return <DeploymentEntry soldier={soldier} key={soldier.name} />;
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => {
  return {
    missionNumber: state.missionNumber,
    soldiersOnMission: state.soldiersOnMission,
    maxDeployedSoldiers: state.maxDeployedSoldiers,
    missionInProgress: state.missionInProgress,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deployment);
