import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const RosterEntry = (props) => {
  let rosterClass = ''
  if (props.soldiersOnMission.length == props.maxDeployedSoldiers) {
    rosterClass = ' max-deployed';
  }
    return (
      <tr onClick={(e) => props.deploySoldier(props.obj) } className={"soldier-line" + rosterClass}>
        <td><p className="roster-entry">{props.obj.name}</p></td>
        <td><p className="roster-entry">{props.obj.class}</p></td>
        <td><p className="roster-entry">{props.obj.rank}</p></td>
        <td><p className="roster-entry">{props.obj.kills}</p></td>
        <td><p className="roster-entry">{props.obj.status}</p></td>
      </tr>
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
