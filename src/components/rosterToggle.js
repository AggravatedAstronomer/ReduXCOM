import React from 'react';
import '../App.css';
import * as actions from '../actions/actions';
import { connect } from 'react-redux';

const RosterEntry = props => {
  let recruitButton = null;
  if (props.credits >= 50 && props.soldiers.length < 18) {
    recruitButton = (
      <div onClick={e => props.recruitSoldier()} className="side-option">
        <span>
          Hire Recruit <span className="cost-ok">§50</span> >
        </span>
      </div>
    );
  } else if (props.soldiers.length >= 18) {
    recruitButton = (
      <div className="side-option side-option-disabled">
        <span>
          <span className="cost-error">Barracks Full</span> >
        </span>
      </div>
    );
  } else {
    recruitButton = (
      <div className="side-option side-option-disabled">
        <span>
          {' '}
          Hire Recruit <span className="cost-error">§50</span> >
        </span>
      </div>
    );
  }
  if (props.viewingRoster === true) {
    return (
      <div>
        <div onClick={e => props.viewRoster()} className="side-option">
          <span>Main View ></span>
        </div>
        {recruitButton}
      </div>
    );
  } else {
    return (
      <div onClick={e => props.viewRoster()} className="side-option">
        <span>Roster View ></span>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  soldiers: state.soldiers,
  viewingRoster: state.viewingRoster,
  credits: state.credits,
});

const mapDispatchToProps = dispatch => ({
  viewRoster: () => dispatch(actions.viewRoster()),
  recruitSoldier: () => dispatch(actions.recruitSoldier()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RosterEntry);
