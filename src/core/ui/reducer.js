import * as types from './action-types';

export const uiState = () => ({
  mode: 'page',
});

export function uiReducer(state = uiState(), {payload, type}) {
  switch (type) {
    
    case types.SET_MODE:
      return Object.assign({}, state, { mode: payload });

    default: 
      return state;

  }
}