/** @flow */

const ActionType = require('./ActionType');

module.exports = (state = [], action) => {
  switch (action.type) {
    case ActionType.Label.LOAD_ALL_SUCCESS:
      return action.labels;
  }
  return state;
};
