import React from 'react';
import '../App.css';
import { connect } from 'react-redux';

const Hostiles = (props) => {
  if (props.missionInProgress) {
    return (
      <div className="visible-alien-container">
        <img  className="visible-alien" src={require('../img/icons/alien.png')} alt=""></img><br></br>
        <text className="alien-info">Sectoid</text>
      </div>
    );
  } else {
    return (null)
  }
}

const mapStateToProps = (state) => {
  return {
    aliensVisible: state.aliensVisible,
    missionInProgress: state.missionInProgress,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hostiles);
