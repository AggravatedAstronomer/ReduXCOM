import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import operationNames from './utils/operationNames';
import recruitmentPool from './utils/recruitmentPool';

const initialState = {
  user: '',
  editingUser: true,
  viewingRoster: false,
  resetConfirm: false,
  abortConfirm: false,
  missionInProgress: false,
  aliensVisible: [
    {
      name: 'Sectoid',
    },
    {
      name: 'Sectoid',
    },
    {
      name: 'Sectoid',
    },
  ],
  missionTurnCounter: 0,
  missionNumber: 0,
  credits: 500,
  soldiersOnMission: [],
  maxDeployedSoldiers: 4,
  recruitmentPool,
  soldiers: [
    {
      name: 'Patientzer0',
      rank: 1,
      class: 'Rookie',
      status: 'Healthy',
      kills: 0,
    },
    {
      name: 'Tegularius',
      rank: 1,
      class: 'Rookie',
      status: 'Healthy',
      kills: 0,
    },
    {
      name: 'Azimuth',
      rank: 1,
      class: 'Rookie',
      status: 'Healthy',
      kills: 0,
    },
    {
      name: 'Jc2k',
      rank: 1,
      class: 'Rookie',
      status: 'Healthy',
      kills: 0,
    },
  ],
  prevMission: null,
  nextMission: {
    name:
      operationNames.adjectives[Math.floor(Math.random() * operationNames.adjectives.length)] +
      ' ' +
      operationNames.nouns[Math.floor(Math.random() * operationNames.nouns.length)],
    difficulty: 'Easy',
  },
  postMissionScreen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'startCampaign':
      return (state = { ...state, missionNumber: state.missionNumber + 1, editingUser: false });
    case 'setUser':
      return (state = { ...state, user: action.name, editingUser: false });
    case 'editUser':
      return (state = { ...state, editingUser: true });
    case 'viewRoster':
      return (state = { ...state, viewingRoster: !state.viewingRoster, postMissionScreen: false });
    case 'recruitSoldier':
      const pool = state.recruitmentPool;
      const randomRecruitName = pool[Math.floor(Math.random() * pool.length)];
      const recruit = {
        name: randomRecruitName,
        rank: 1,
        class: 'Rookie',
        status: 'Healthy',
        kills: 0,
      };
      const recruitIndex = state.recruitmentPool.indexOf(randomRecruitName);
      pool.splice(recruitIndex, 1);
      return (state = {
        ...state,
        soldiers: state.soldiers.concat(recruit),
        recruitmentPool: pool,
        credits: state.credits - 50,
      });
    case 'deploySoldier':
      const { soldier } = action;
      if (state.soldiersOnMission.indexOf(soldier) === -1 && state.soldiersOnMission.length < state.maxDeployedSoldiers) {
        let vacatedSoldierPool = [...state.soldiers];
        vacatedSoldierPool.splice(vacatedSoldierPool.indexOf(soldier), 1);
        return (state = { ...state, soldiersOnMission: state.soldiersOnMission.concat([soldier]), soldiers: vacatedSoldierPool });
      } else if (state.soldiersOnMission.indexOf(soldier) !== -1) {
        let vacatedDeployment = [...state.soldiersOnMission];
        vacatedDeployment.splice(vacatedDeployment.indexOf(soldier), 1);
        return (state = { ...state, soldiersOnMission: vacatedDeployment, soldiers: state.soldiers.concat([soldier]) });
      } else {
        return state;
      }
    case 'launchMission':
      return (state = { ...state, missionInProgress: true });
    case 'nextTurn':
      return (state = { ...state, missionTurnCounter: state.missionTurnCounter + 1 });
    case 'promptAbort':
      return (state = { ...state, abortConfirm: true });
    case 'cancelAbort':
      return (state = { ...state, abortConfirm: false });
    case 'abortMission':
      return (state = {
        ...state,
        abortConfirm: false,
        missionInProgress: false,
        missionTurnCounter: 0,
        missionNumber: state.missionNumber + 1,
        prevMission: { ...state.nextMission, participation: state.soldiersOnMission },
        nextMission: {
          name:
            operationNames.adjectives[Math.floor(Math.random() * operationNames.adjectives.length)] +
            ' ' +
            operationNames.nouns[Math.floor(Math.random() * operationNames.nouns.length)],
          difficulty: 'Easy',
        },
        viewingRoster: false,
        postMissionScreen: true,
        soldiers: state.soldiers.concat(state.soldiersOnMission),
        soldiersOnMission: [],
      });
    case 'promptReset':
      return (state = { ...state, resetConfirm: true });
    case 'cancelReset':
      return (state = { ...state, resetConfirm: false });
    case 'resetGame':
      return initialState;
    case 'promotions':
      let newSoldierStates = [...state.soldiers];
      action.payload.forEach(promotion => {
        state.soldiers.filter(soldier => {
          if (soldier.name === promotion) {
            newSoldierStates.push((soldier.rank += 1));
          }
          return newSoldierStates;
        });
        return (state = { ...state, soldiers: newSoldierStates });
      });
      break;
    default:
      return state;
  }
};

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  // console.log('store changed', store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
