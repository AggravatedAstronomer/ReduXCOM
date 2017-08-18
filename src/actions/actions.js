export function setUser(name) {
  return {
    type: "setUser",
    payload: {user: name.slice(0,30)}
  }
}

export function editUser(name) {
  return {
    type: "editUser",
    payload: {}
  }
}

export function viewRoster() {
  return {
    type: "viewRoster",
    payload: {}
  }
}

export function startCampaign() {
  return {
    type: "startCampaign",
    payload: {}
  }
}

export function recruitSoldier() {
  return {
    type: "recruitSoldier",
    payload: {
      soldierPool: [
      'Patientzer0',
      'Shtev',
      'Lydia',
      'Fig',
      'Ricey',
      'Bne',
      'Davidb',
      'Birty',
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
    ]}
  }
}

export function deploySoldier(soldier) {
  return {
    type: "deploySoldier",
    payload: soldier,
  }
}

export function launchMission() {
  return {
    type: "launchMission",
    payload: {}
  }
}

export function nextTurn() {
  return {
    type: "nextTurn",
    payload: {}
  }
}

export function promptAbort() {
  return {
    type: "promptAbort",
    payload: {}
  }
}

export function cancelAbort() {
  return {
    type: "cancelAbort",
    payload: {}
  }
}

export function abortMission() {
  return {
    type: "abortMission",
    payload: {}
  }
}

export function promptReset() {
  return {
    type: "promptReset",
    payload: {}
  }
}

export function cancelReset() {
  return {
    type: "cancelReset",
    payload: {}
  }
}

export function resetGame() {
  return {
    type: "resetGame",
    payload: {}
  }
}
