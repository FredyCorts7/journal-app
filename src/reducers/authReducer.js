/*
    {
        uid: kasdk23kh432lk4,
        name: "FredyC"
    }
*/

import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};
