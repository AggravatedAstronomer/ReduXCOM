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
    case 'recruitSoldier':
      let untakenNames = action.payload.soldierPool
      state.soldiers.forEach(function(soldier) {
        untakenNames.filter(function(name) {
          if (soldier.name === name) {
            untakenNames.splice(untakenNames.indexOf(name), 1)
          }
        });
      });
      let randomName = untakenNames[Math.floor(Math.random() * untakenNames.length)];

      let recruit = {
        name: randomName,
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      }
      return state = {...state, soldiers: state.soldiers.concat(recruit), credits: state.credits - 50};
    case 'deploySoldier':
      if (state.soldiersOnMission.indexOf(action.payload) == -1 && ((state.soldiersOnMission.length < state.maxDeployedSoldiers))) {
        let newSoldiers = [...state.soldiers];
        newSoldiers.splice(newSoldiers.indexOf(action.payload), 1);
        return state = {...state, soldiersOnMission: state.soldiersOnMission.concat([action.payload]), soldiers: newSoldiers};
      } else if (state.soldiersOnMission.indexOf(action.payload) != -1) {
        let newDeployment = [...state.soldiersOnMission];
        newDeployment.splice(newDeployment.indexOf(action.payload), 1);
        return state = {...state, soldiersOnMission: newDeployment, soldiers: state.soldiers.concat([action.payload])};
      } else {
        return state;
      }
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
        credits: 500,
        soldiersOnMission: [],
        maxDeployedSoldiers: 4,
        soldiers: [
          {
            name: "Patientzer0",
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
    soldiersOnMission: [],
    maxDeployedSoldiers: 4,
    soldiers: [
      {
        name: "Patientzer0",
        rank: 1,
        class: "Rookie",
        status: "Healthy",
        kills: 0,
      },
      {
        name: "Tegularius",
        rank: 1,
        class: "Rookie",
        status: "Wounded",
        kills: 0,
      },
      {
        name: "Azimuth",
        rank: 1,
        class: "Rookie",
        status: "Gravely Wounded",
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
    aliensVisible: [],
    nextMission: {
      name: 'Bold Promise',
      difficulty: 'Easy'
    },
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
