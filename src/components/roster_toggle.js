import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const RosterEntry = props => {
  let recruitButton = null;
  if (props.credits >= 50 && props.soldiers.length < 18) {
    recruitButton = (
      <div onClick={e => props.recruitSoldier()} className="side-option">
        <p>
          Hire Recruit <span className="cost-ok">§50</span> >
        </p>
      </div>
    );
  } else if (props.soldiers.length >= 18) {
    recruitButton = (
      <div className="side-option side-option-disabled">
        <p>
          <span className="cost-error">Barracks Full</span> >
        </p>
      </div>
    );
  } else {
    recruitButton = (
      <div className="side-option side-option-disabled">
        <p>
          {' '}
          Hire Recruit <span className="cost-error">§50</span> >
        </p>
      </div>
    );
  }
  if (props.viewingRoster === true) {
    return (
      <div>
        <div onClick={e => props.viewRoster()} className="side-option">
          <p>Main View ></p>
        </div>
        {recruitButton}
      </div>
    );
  } else {
    return (
      <div onClick={e => props.viewRoster()} className="side-option">
        <p>Roster View ></p>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    soldiers: state.soldiers,
    viewingRoster: state.viewingRoster,
    credits: state.credits,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewRoster: () => dispatch(actions.viewRoster()),
    recruitSoldier: () => dispatch(actions.recruitSoldier()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterEntry);
