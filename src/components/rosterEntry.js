import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const RosterEntry = props => {
  const { name, soldierClass, rank, kills, status } = props.soldier;
  const rosterClass = props.soldiersOnMission.length === props.maxDeployedSoldiers ? ' max-deployed' : '';
  return (
    <tr onClick={props.assignable ? () => props.deploySoldier(props.soldier) : ''} className={'soldier-line' + rosterClass}>
      <td>
        <p className="roster-entry">{name}</p>
      </td>
      <td>
        <p className="roster-entry">{soldierClass}</p>
      </td>
      <td>
        <p className="roster-entry text-center">{rank}</p>
      </td>
      <td>
        <p className="roster-entry text-center">{kills}</p>
      </td>
      <td>
        <p className="roster-entry">{status}</p>
      </td>
    </tr>
  );
};

const mapStateToProps = state => ({
  soldiersOnMission: state.soldiersOnMission,
  maxDeployedSoldiers: state.maxDeployedSoldiers,
});

const mapDispatchToProps = dispatch => ({
  deploySoldier: soldier => dispatch(actions.deploySoldier(soldier)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterEntry);
