import omit from 'lodash/omit';
import * as actionType from '../constants/actionTypes';



const initialState = {
  1: {
    author: "Travis N",
    body: "I finished all the work in your yard. It was a pleasure serving your!",
    id: 1,
    type: "tech",
    flagged: true
  },
  2: {
    author: "Barry",
    body: "I thought you we're going to trim the trees. I am displeased.",
    id: 2,
    type: "customer",
    flagged: false
  },
  3: {
    author: "Travis N",
    body: "Wat!?",
    id: 3,
    type: "tech",
    flagged: true
  }
};


const mergedArgs = (state, itemId, args) => {
  const prev = state[itemId] || {};

  return { ...prev, ...args };
};

const comments = (state = initialState, action) => {
  switch (action.type) {
  case actionType.EDIT_TECH_COMMENT:
    return {
        ...omit(state, action.itemId),
      [action.itemId]: mergedArgs(state, action.itemId, action.args),
    };
  case actionType.FLAG_COMMENT:
      return {
          ...omit(state, action.itemId),
        [action.itemId]: mergedArgs(state, action.itemId, action.args),
      };
  default:
    return state;
  }
};

export default comments;
