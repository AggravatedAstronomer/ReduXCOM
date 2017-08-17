import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'startCampaign':
        return state = {...state, missionNumber: state.missionNumber + 1, editingUser: false};
    case 'setUser':
      return state = {...state, user: action.payload.user, editingUser: false};
    case 'editUser':
      return state = {...state, editingUser: true};
    case 'viewRoster':
      return state = {...state, viewingRoster: !state.viewingRoster};
    case 'launchMission':
      return state = {...state, missionInProgress: true};
    case 'nextTurn':
      return state = {...state, missionTurnCounter: state.missionTurnCounter + 1};
    case 'promptAbort':
      return state = {...state, abortConfirm: true};
    case 'cancelAbort':
      return state = {...state, abortConfirm: false};
    case 'abortMission':
      return state = {
        ...state,
        abortConfirm: false,
        missionInProgress: false,
        missionTurnCounter: 0,
        missionNumber: state.missionNumber + 1,
      };
    case 'promptReset':
      return state = {...state, resetConfirm: true};
    case 'cancelReset':
      return state = {...state, resetConfirm: false};
    case 'resetGame':
      return state = {
        ...state,
        user: '',
        editingUser: true,
        viewingRoster: false,
        resetConfirm: false,
        abortConfirm: false,
        missionInProgress: false,
        missionTurnCounter: 0,
        missionNumber: 0,
        soldiers: [
          {
            name: "Patient Zer0",
            rank: 1,
            class: "Rookie",
            status: "Healthy",
            kills: 0,
          },
          {
            name: "Tegularius",
            rank: 1,
            class: "Rookie",
            status: "Healthy",
            kills: 0,
          },
          {
            name: "Azimuth",
            rank: 1,
            class: "Rookie",
            status: "Healthy",
            kills: 0,
          },
          {
            name: "Jc2k",
            rank: 1,
            class: "Rookie",
            status: "Healthy",
            kills: 0,
          },
        ],
      };
    case 'promotions':
      let newSoldierStates = [...state.soldiers];
      action.payload.forEach(function(promotion) {
        state.soldiers.filter(function(soldier) {
          if (soldier.name == promotion) {
            newSoldierStates.push(soldier.rank += 1);
          }
        });
        return state = {...state, soldiers: newSoldierStates};
      });
    }
  return state;
}

const store = createStore(
  reducer,
  {
    user: '',
    editingUser: true,
    viewingRoster: false,
    resetConfirm: false,
    abortConfirm: false,
    missionInProgress: false,
    missionTurnCounter: 0,
    missionNumber: 0,
    credits: 500,
    alienAlloys: 0,
    soldiers: [
      {
        name: "Patient Zer0",
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      },
      {
        name: "Tegularius",
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      },
      {
        name: "Azimuth",
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      },
      {
        name: "Jc2k",
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      },
    ]
  },
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
