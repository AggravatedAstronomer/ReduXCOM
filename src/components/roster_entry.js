import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const RosterEntry = props => {
  let rosterClass = '';
  if (props.soldiersOnMission.length === props.maxDeployedSoldiers) {
    rosterClass = ' max-deployed';
  }
  return (
    <tr onClick={() => props.deploySoldier(props.soldier)} className={'soldier-line' + rosterClass}>
      <td>
        <p className="roster-entry">{props.soldier.name}</p>
      </td>
      <td>
        <p className="roster-entry">{props.soldier.class}</p>
      </td>
      <td>
        <p className="roster-entry">{props.soldier.rank}</p>
      </td>
      <td>
        <p className="roster-entry">{props.soldier.kills}</p>
      </td>
      <td>
        <p className="roster-entry">{props.soldier.status}</p>
      </td>
    </tr>
  );
};

const mapStateToProps = state => {
  return {
    soldiersOnMission: state.soldiersOnMission,
    maxDeployedSoldiers: state.maxDeployedSoldiers,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deploySoldier: soldier => dispatch(actions.deploySoldier(soldier)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterEntry);
