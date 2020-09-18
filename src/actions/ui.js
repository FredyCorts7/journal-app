import { types } from '../types/types';

export const setError = (err) => ({
  type: types.UISETERROR,
  payload: err,
});

export const removeError = () => ({
  type: types.UIREMOVEERROR,
});
