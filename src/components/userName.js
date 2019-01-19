import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const UserNameArea = props => {
  if (!props.editingUser && props.missionNumber === 0) {
    return (
      <div className="welcome">
        WELCOME COMMANDER {props.user.toUpperCase()}
        <span onClick={e => props.editUser()} className="glyphicon glyphicon-pencil icon-button" />
      </div>
    );
  } else if (!props.editingUser && props.missionNumber > 0) {
    return <div className="welcome">WELCOME COMMANDER {props.user.toUpperCase()}</div>;
  } else {
    return (
      <div className="welcome">
        <form action="submit" onSubmit={e => props.setUser()}>
          <input id="identify" placeholder="P l e a s e   I d e n t i f y. . ." defaultValue={props.user} type="text" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    user: state.user,
    editingUser: state.editingUser,
    missionNumber: state.missionNumber,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUser: () => dispatch(actions.setUser(document.getElementById('identify').value)),
    editUser: () => dispatch(actions.editUser()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNameArea);