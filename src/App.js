import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import Reset from './components/reset';
import StartOrContinue from './components/startContinue';
import MissionMenus from './components/missionMenus';
import GameArea from './components/gameArea';
import MissionArea from './components/missionArea';
import UserName from './components/userName';
import Deployment from './components/deployment';
import Hostile from './components/hostile';

const App = props => {
  let sideMenus = null;
  let alienUI = null;
  if (props.missionInProgress === false) {
    sideMenus = (
      <div>
        <StartOrContinue />
        <Reset missionNumber={props.missionNumber} />
      </div>
    );
  } else {
    sideMenus = <MissionMenus />;
    alienUI = (
      <div className="hostiles">
        {props.aliensVisible.map(function(alien, i) {
          return <Hostile obj={alien} key={i} />;
        })}
      </div>
    );
  }
  return (
    <div className="App">
      <div className="App-header" />
      {/* <h1 className="title">Browser Game</h1> */}
      <div className="main-area">
        <UserName />
        <div className="col-sm-3 side-menu">{sideMenus}</div>
        <div className="col-sm-6 side-logo">
          <GameArea />
        </div>
        <div className="col-sm-3 side-menu side-menu-right">
          <Deployment />
        </div>
      </div>
      {alienUI}
      <MissionArea />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    missionNumber: state.missionNumber,
    missionInProgress: state.missionInProgress,
    aliensVisible: state.aliensVisible,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
