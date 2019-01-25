import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

const Hostiles = props => {
  if (props.missionInProgress) {
    return (
      <div className="visible-alien-container">
        <img className="visible-alien" src={require('../img/icons/alien.png')} alt="" />
        <br />
        <span className="alien-info">Sectoid</span>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = state => ({
  aliensVisible: state.aliensVisible,
  missionInProgress: state.missionInProgress,
});

export default connect(
  mapStateToProps,
  null
)(Hostiles);
