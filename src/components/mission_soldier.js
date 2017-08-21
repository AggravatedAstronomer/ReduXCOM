import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const RosterEntry = (props) => {
  let rosterClass = ''
  if (props.soldiersOnMission.length == props.maxDeployedSoldiers) {
    rosterClass = ' max-deployed';
  }
  let status = null;
  if (props.obj.status == 'Healthy') {
    status = (<text className="healthy">Healthy</text>)
  } else if (props.obj.status == 'Wounded') {
    status = (<text className="wounded">Wounded</text>)
  } else if (props.obj.status == 'Gravely Wounded') {
    status = (<text className="gravely-wounded">Gravely Wounded</text>)
  } else if (props.obj.status == 'Dead') {
    status = (<text className="dead">Dead</text>)
  }
    return (
      <div className="mission-soldier-row">
        <tr>
          <td className="mission-soldier">{props.obj.name}</td>
          <td className="fire"><span className="glyphicon glyphicon-screenshot"></span></td>
          <td className="overwatch"><span className="glyphicon glyphicon-eye-open"></span></td>
          <td className="hunker"><span className="glyphicon glyphicon-tower"></span></td>
          <td className="grenade"><span className="glyphicon glyphicon glyphicon-fire"></span></td>
          <td className="move-1"><span className="glyphicon glyphicon-play"></span></td>
          <td className="move-2"><span className="glyphicon glyphicon-forward"></span></td>
        </tr>
        <tr>
          <td className="soldier-info">{props.obj.class} - {status}</td>
          <td className="ability-info">Fire</td>
          <td className="ability-info">Overwatch</td>
          <td className="ability-info">Hunker Down</td>
          <td className="ability-info">Throw Grenade</td>
          <td className="ability-info">Move</td>
          <td className="ability-info">Dash</td>
        </tr>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    soldiersOnMission: state.soldiersOnMission,
    maxDeployedSoldiers: state.maxDeployedSoldiers,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deploySoldier: (soldier) => dispatch(actions.deploySoldier(soldier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RosterEntry);
