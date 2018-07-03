import { combineReducers } from 'redux';

import { START, STOP, RESET, CLEAR, TICK, TOGGLE } from '../actions/game.js';

const ROWS = 30;
const COLS = 30;

const blank = () => 0;
const rand = (min, max) => () =>
  Math.floor(Math.random() * (max - min + 1) + min);

const create = (rows, cols, value, creator) =>
  Array.from(Array(rows), row => Array.from(Array(cols), col => creator()));

const neighbours = (board, x, y) => {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1]
  ]
    .map(([x, y]) => {
      const cx = x < 0 ? ROWS - Math.abs(x) : x === ROWS ? x - ROWS : x;
      const cy = y < 0 ? COLS - Math.abs(y) : y === COLS ? y - COLS : y;
      return [cx, cy];
    })
    .reduce((subtotal, [x, y]) => {
      return subtotal + board[x][y];
    }, 0);
};

const lives = (alive, neighbours) => {
  return alive ? neighbours === 2 || neighbours === 3 : neighbours === 3;
};

const next = board => {
  return board.map((cols, x) => {
    return cols.map((alive, y) => {
      return lives(alive, neighbours(board, x, y)) ? 1 : 0;
    });
  });
};

const toggle = (board, x, y) => [
  ...board.slice(0, x),
  [...board[x].slice(0, y), !board[x][y] ? 1 : 0, ...board[x].slice(y + 1)],
  ...board.slice(x + 1)
];

const game = (
  state = {
    started: false,
    board: create(ROWS, COLS, 0, blank),
    generation: 0
  },
  action
) => {
  switch (action.type) {
    case START:
      return Object.assign({}, state, {
        started: true
      });
    case STOP:
      return Object.assign({}, state, {
        started: false
      });
    case CLEAR:
      return Object.assign({}, state, {
        board: create(ROWS, COLS, 0, blank),
        started: false,
        generation: 0
      });
    case RESET:
      return Object.assign({}, state, {
        board: create(ROWS, COLS, 0, rand(0, 1)),
        started: false,
        generation: 0
      });
    case TICK:
      return Object.assign({}, state, {
        board: next(state.board),
        generation: state.generation + 1
      });
    case TOGGLE:
      return Object.assign({}, state, {
        board: toggle(state.board, action.x, action.y)
      });
    default:
      return state;
  }
};

const getStarted = state => state.game.started;
const getBoard = state => state.game.board;
const getGeneration = state => state.game.generation;

const reducers = combineReducers({
  game
});

export default reducers;

export { getStarted, getBoard, getGeneration };
