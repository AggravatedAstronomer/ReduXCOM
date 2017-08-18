import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';
import DeploymentEntry from './deployment_entry';

const Deployment = (props) => {
  if (props.missionNumber > 0) {
    return (
      <div id="deployment-selection">
        <p id="deployment-title">
          Deployment
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deployment);
