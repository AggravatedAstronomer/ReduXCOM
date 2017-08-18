import React, { Component } from 'react';
import './App.css';
import * as actions from './actions/actions';
import { connect } from 'react-redux';
import Reset from './components/reset';
import StartOrContinue from './components/start_continue';
import MissionMenus from './components/mission_menus';
import GameArea from './components/game_area';
import MissionArea from './components/mission_area';
import UserName from './components/user_name';
import Deployment from './components/deployment';

const App = (props) => {
  let sideMenus = null;
  if (props.missionInProgress === false) {
    sideMenus = (<div><StartOrContinue/><Reset missionNumber={props.missionNumber}/></div>);
  } else {
    sideMenus = (<MissionMenus/>);
  }
  return (
    <div className="App">
      <div className="App-header"></div>
      <h1 className="title">Browser Game</h1>
      <div className="main-area">
        <UserName/>
        <div className="col-sm-3 side-menu">
          {sideMenus}
        </div>
        <div className="col-sm-6 side-logo">
          <GameArea/>
        </div>
        <div className="col-sm-3 side-menu side-menu-right">
          <Deployment/>
        </div>
      </div>
      <MissionArea/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    missionNumber: state.missionNumber,
    soldiers: state.soldiers,
    missionInProgress: state.missionInProgress,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
