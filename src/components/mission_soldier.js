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
          <td className="mission-soldier">{props.obj.name}<br></br>
            <text className="soldier-info">{props.obj.class} - {status}</text><br></br>
            <text className="soldier-actions">>></text>
          </td>
          <td className="ability fire"><span className="glyphicon glyphicon-screenshot"></span><br></br>
            <text className="ability-info">Fire</text>
          </td>
          <td className="ability overwatch"><span className="glyphicon glyphicon-eye-open"></span><br></br>
            <text className="ability-info">Overwatch</text>
          </td>
          <td className="ability hunker"><span className="glyphicon glyphicon-tower"></span><br></br>
            <text className="ability-info">Hunker Down</text>
          </td>
          <td className="ability grenade"><span className="glyphicon glyphicon glyphicon-fire"></span><br></br>
            <text className="ability-info">Throw Grenade</text>
          </td>
          <td className="ability move-1"><span className="glyphicon glyphicon-play"></span><br></br>
            <text className="ability-info">Move</text>
          </td>
          <td className="ability move-2"><span className="glyphicon glyphicon-forward"></span><br></br>
            <text className="ability-info">Dash</text>
          </td>
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
