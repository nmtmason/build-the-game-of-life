const START = 'START';
const STOP = 'STOP';
const RESET = 'RESET';
const CLEAR = 'CLEAR';
const TICK = 'TICK';
const TOGGLE = 'TOGGLE';

const start = () => ({ type: START });
const stop = () => ({ type: STOP });
const reset = () => ({ type: RESET });
const clear = () => ({ type: CLEAR });
const tick = () => ({ type: TICK });
const toggle = (x, y) => ({ type: TOGGLE, x, y });

export {
  START,
  STOP,
  RESET,
  CLEAR,
  TICK,
  TOGGLE,
  start,
  stop,
  reset,
  clear,
  tick,
  toggle
};
