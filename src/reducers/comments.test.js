import reducer from './comments';
import * as types from '../constants/actionTypes';

// duplicate initial state as defined in reducer because it includes mock data
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

describe('comments reducer', () => {
  it('should return the initial state', () => {
    const prevState = undefined;
    const action = {};

    expect(reducer(prevState, action)).toEqual(initialState);
  });

  it('should handle EDIT_TECH_COMMENT', () => {
    const prevState = initialState;
    const action = {
      args: { body: '' },
      itemId: 1,
      type: types.UPDATE_SCHEDULED_ITEM,
    };
    const nextState = {
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

    expect(reducer(prevState, action)).toEqual(nextState);
  });

  it('should handle FLAG_COMMENT', () => {
    const prevState = initialState;
    const action = {
      args: { flag: true },
      itemId: 1,
      type: types.FLAG_COMMENT,
    };
    const nextState = {
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

    expect(reducer(prevState, action)).toEqual(nextState);
  });



});
