export const setUser = name => {
  return {
    type: 'setUser',
    name,
  };
};

export const editUser = () => {
  return {
    type: 'editUser',
  };
};

export const viewRoster = () => {
  return {
    type: 'viewRoster',
  };
};

export const startCampaign = () => {
  return {
    type: 'startCampaign',
  };
};

export const recruitSoldier = () => {
  return {
    type: 'recruitSoldier',
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
