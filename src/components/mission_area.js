import React, { Component } from 'react';
import '../App.css';
import * as actions from "../actions/actions";
import { connect } from 'react-redux';

const MissionArea = (props) => {
  if (props.missionInProgress  === true) {
    return (
      <div className="mission-area">
        <div className="mission-area-image-container">
          <img id="mission-area-image" src={require('../img/objectives.jpg')}/>
        </div>
        <div id="mission-area-contents">
          <p id="mission-title">Objectives</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mission-area">
        <p id="mission-title">Mission Pending...</p>
        <img src={require('../img/XCOM_Shield_Logo.gif')}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    missionInProgress: state.missionInProgress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionArea);
