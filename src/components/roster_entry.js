import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const RosterEntry = (props) => {
    return (
      <tr onClick={(e) => props.deploySoldier(props.obj) } className="soldier-line">
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

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deploySoldier: (soldier) => dispatch(actions.deploySoldier(soldier)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RosterEntry);
