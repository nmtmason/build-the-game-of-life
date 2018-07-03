export const RESET = 'RESET';
export const START = 'START';
export const STOP = 'STOP';
export const CLEAR = 'CLEAR';
export const TICK = 'TICK';
export const TOGGLE = 'TOGGLE';

export const reset = (width, height, rows, cols) => ({
  type: RESET,
  width,
  height,
  rows,
  cols
});

export const start = () => ({
  type: START
});

export const stop = () => ({
  type: STOP
});

export const clear = () => ({
  type: CLEAR
});

export const tick = () => ({
  type: TICK
});

export const toggle = (x, y) => ({
  type: TOGGLE,
  x,
  y
});
