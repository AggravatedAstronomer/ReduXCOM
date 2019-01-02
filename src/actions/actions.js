export const setUser = name => {
  return {
    type: 'setUser',
    payload: { user: name.slice(0, 30) },
  };
};

export const editUser = name => {
  return {
    type: 'editUser',
    payload: {},
  };
};

export const viewRoster = () => {
  return {
    type: 'viewRoster',
    payload: {},
  };
};

export const startCampaign = () => {
  return {
    type: 'startCampaign',
    payload: {},
  };
};

export const recruitSoldier = () => {
  return {
    type: 'recruitSoldier',
    payload: {
      soldierPool: [
        'Patientzer0',
        'Shtev',
        'Lydia',
        'Fig',
        'Ricey',
        'Bne',
        'Davidb',
        'Rob1',
        'Offmessage',
        'Sharon',
        'Winjer',
        'Alex2',
        'Gwildar',
        'Plumdog',
        'Toomuchinformation',
        'Joethedough',
        'Jc2k',
        'Scunnydelight',
        'Azimuth',
        'Twom',
        'TomDS',
      ],
    },
  };
};

export const deploySoldier = soldier => {
  return {
    type: 'deploySoldier',
    soldier,
  };
};

export const launchMission = () => {
  return {
    type: 'launchMission',
  };
};

export const nextTurn = () => {
  return {
    type: 'nextTurn',
  };
};

export const promptAbort = () => {
  return {
    type: 'promptAbort',
  };
};

export const cancelAbort = () => {
  return {
    type: 'cancelAbort',
  };
};

export const abortMission = () => {
  return {
    type: 'abortMission',
  };
};

export const promptReset = () => {
  return {
    type: 'promptReset',
  };
};

export const cancelReset = () => {
  return {
    type: 'cancelReset',
  };
};

export const resetGame = () => {
  return {
    type: 'resetGame',
  };
};
