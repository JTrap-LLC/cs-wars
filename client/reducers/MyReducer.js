// import actions and action types
// declare initial state
// then make the giant switch/case function called MyReducer

/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';
import { Children } from 'react';

const initialState = {};

const myReducer = (state = initialState, action) => {
  let marketList;

  switch (action.type) {
    case types.ADD_MARKET:

    default:
      return state;
  }
};

export default myReducer;
