const START = 'START'
const STOP = 'STOP'
const RESET = 'RESET'
const TICK = 'TICK'
const TOGGLE = 'TOGGLE'

const start = () =>({ type: START })
const stop = () => ({ type: STOP })
const reset = () => ({ type: RESET })
const tick = () => ({ type: TICK })
const toggle = (x, y) => ({ type: TOGGLE, x, y })

export {
  START, STOP, RESET, TICK, TOGGLE,
  start, stop, reset, tick, toggle
}
