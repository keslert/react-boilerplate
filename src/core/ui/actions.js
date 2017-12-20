import * as types from './action-types';
import { getReadingMode } from './selectors'

export function setMode(mode) {
  return {
    type: types.SET_MODE,
    payload: mode,
  }
}