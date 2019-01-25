import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const UserNameArea = props => {
  const { user, editingUser, missionNumber, setUser, editUser } = props;
  const bradford = (
    <div id="comms-box">
      <img id="bradford" className="pull-right" src={require('../img/bradford_crop2.png')} />
    </div>
  );
  if (!editingUser && missionNumber === 0) {
    return (
      <div className="welcome">
        {bradford}
        {user}
        <span onClick={() => editUser()} className="glyphicon glyphicon-pencil icon-button" />
      </div>
    );
  } else if (!editingUser && missionNumber > 0) {
    return bradford;
  } else {
    return (
      <div className="welcome">
        <form action="submit" onSubmit={() => setUser()}>
          <input id="identify" placeholder="P l e a s e   I d e n t i f y . . ." defaultValue={props.user} type="text" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  user: state.user,
  editingUser: state.editingUser,
  missionNumber: state.missionNumber,
});

const mapDispatchToProps = dispatch => ({
  setUser: () => dispatch(actions.setUser(document.getElementById('identify').value)),
  editUser: () => dispatch(actions.editUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNameArea);
