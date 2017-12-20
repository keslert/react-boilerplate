export function getUI(state) {
  return state.ui;
}

export function getMode(state) {
  return getUI(state).mode;
}