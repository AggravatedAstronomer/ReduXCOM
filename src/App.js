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
import { Grid, Row, Col } from 'react-bootstrap';

const App = props => {
  const { aliensVisible, missionInProgress, missionNumber } = props;
  const gridSyle = { paddingLeft: 0, paddingRight: 10, marginLeft: 0, marginRight: 10 };
  let sideMenus = null;
  let alienUI = null;
  if (missionInProgress === false) {
    sideMenus = (
      <div>
        <StartOrContinue />
        {missionNumber > 0 && <Reset />}
      </div>
    );
  } else {
    sideMenus = <MissionMenus />;
    alienUI = (
      <div className="hostiles">
        {aliensVisible.map((alien, i) => (
          <Hostile obj={alien} key={i} />
        ))}
      </div>
    );
  }
  return (
    <div className="App">
      <div className="App-header">
        <span id="comms-dialogue">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis posuere mauris vel elementum. Donec vitae augue elit. Nulla facilisi. Nulla
          vel lorem et ex accumsan maximus.
        </span>
      </div>
      <div className="main-area">
        <Grid fluid style={gridSyle}>
          <Row>
            <UserName />
          </Row>
          <Row className="center-row">
            <Col className="side-menu" xs={12} md={3}>
              {sideMenus}
            </Col>
            <Col xs={12} md={6}>
              <GameArea />
            </Col>
            <Col className="side-menu-right" xs={12} md={3}>
              <Deployment />
            </Col>
          </Row>
          <Row>
            {alienUI}
            <MissionArea />
          </Row>
        </Grid>
      </div>
      <div className="footer" />
    </div>
  );
};

const mapStateToProps = state => ({
  missionNumber: state.missionNumber,
  missionInProgress: state.missionInProgress,
  aliensVisible: state.aliensVisible,
});

export default connect(
  mapStateToProps,
  null
)(App);
