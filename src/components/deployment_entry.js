import React from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const DeploymentEntry = (props) => {
    return (
      <tr onClick={(e) => props.deploySoldier(props.obj) } className="soldier-line">
        <td><p className="roster-entry">{props.obj.name}</p></td>
        <td><p className="roster-entry">{props.obj.class}</p></td>
      </tr>

    );
  }

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deploySoldier: (soldier) => dispatch(actions.deploySoldier(soldier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeploymentEntry);
