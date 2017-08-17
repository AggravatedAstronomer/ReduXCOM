import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const RosterEntry = (props) => {
  if (props.viewingRoster === true) {
    return (
      <div onClick={(e) => props.viewRoster() } className="side-option">
        <p>Main View ></p>
      </div>
    );
  } else {
    return (
      <div onClick={(e) => props.viewRoster() } className="side-option">
        <p>Roster View ></p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soldiers: state.soldiers,
    viewingRoster: state.viewingRoster,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    viewRoster: () => dispatch(actions.viewRoster()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RosterEntry);
