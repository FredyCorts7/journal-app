/* 
{
    notes: [],
    active: null,
    active: {
        id: "io213oi2321o3p",
        title: "",
        body: "",
        imageUrl: "",
        date: 213213213
    }
}
*/

import { types } from '../types/types';

const initialState = {
  notes: [],
  active: null,
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.NOTESACTIVE:
      return {
        ...state,
        active: {
          ...action.payload,
        },
      };
    case types.NOTESADD:
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case types.NOTESLOAD:
      return {
        ...state,
        notes: [...action.payload],
      };
    case types.NOTESUPDATED:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id ? action.payload.note : note
        ),
      };
    case types.NOTESDELETE:
      return {
        ...state,
        active: null,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    case types.NOTESLOGOUTCLEAN:
      return initialState;
    default:
      return state;
  }
};
