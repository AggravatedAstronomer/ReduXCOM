import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const DeploymentEntry = props => {
  console.log(props);
  return (
    <tr onClick={() => props.deploySoldier(props.soldier)} className="soldier-line">
      <td>
        <p className="roster-entry">{props.soldier.name}</p>
      </td>
      <td>
        <p className="roster-entry">{props.soldier.class}</p>
      </td>
    </tr>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deploySoldier: soldier => dispatch(actions.deploySoldier(soldier)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeploymentEntry);
