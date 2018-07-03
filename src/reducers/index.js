import { combineReducers } from 'redux';

import { START, STOP, RESET, CLEAR, TICK, TOGGLE } from '../actions/game';

import { CELL_STATE } from '../utils/cellState';
import { rand } from '../utils/rand';
import { createBoard } from '../utils/createBoard';
import { getNeighbours } from '../utils/getNeighbours';

export const countNeighbours = (board, rows, cols, x, y) =>
  getNeighbours(x, y)
    .map(([x, y]) => {
      let cx = x < 0 ? rows - Math.abs(x) : x === rows ? x - rows : x;
      let cy = y < 0 ? cols - Math.abs(y) : y === cols ? y - cols : y;
      return [cx, cy];
    })
    .reduce(
      (neighbours, [x, y]) =>
        neighbours + (board[x][y] !== CELL_STATE.DEAD ? 1 : 0),
      0
    );

const nextCellState = (lives, neighbours) =>
  lives
    ? neighbours === 2 || neighbours === 3
      ? CELL_STATE.ALIVE
      : CELL_STATE.DEAD
    : neighbours === 3
      ? CELL_STATE.REPRODUCED
      : CELL_STATE.DEAD;

const nextBoardState = (board, rows, cols) =>
  board.map((cells, x) =>
    cells.map((cellState, y) =>
      nextCellState(
        cellState !== CELL_STATE.DEAD,
        countNeighbours(board, rows, cols, x, y)
      )
    )
  );

const toggleCell = (board, x, y) => [
  ...board.slice(0, x),
  [
    ...board[x].slice(0, y),
    !board[x][y] ? CELL_STATE.REPRODUCED : CELL_STATE.DEAD,
    ...board[x].slice(y + 1)
  ],
  ...board.slice(x + 1)
];

const game = (
  state = {
    dimensions: {
      width: 0,
      height: 0
    },
    rows: 0,
    cols: 0,
    started: false,
    board: [],
    generation: 0
  },
  action
) => {
  switch (action.type) {
    case RESET:
      return Object.assign({}, state, {
        dimensions: {
          width: action.width,
          height: action.height
        },
        rows: action.rows,
        cols: action.cols,
        board: createBoard(
          action.rows,
          action.cols,
          () => (rand(0, 1) ? CELL_STATE.REPRODUCED : CELL_STATE.DEAD)
        ),
        started: false,
        generation: 0
      });

    case CLEAR:
      return Object.assign({}, state, {
        board: createBoard(state.rows, state.cols, CELL_STATE.DEAD),
        started: false,
        generation: 0
      });
    case START:
      return Object.assign({}, state, {
        started: true
      });
    case STOP:
      return Object.assign({}, state, {
        started: false
      });
    case TICK:
      return Object.assign({}, state, {
        board: nextBoardState(state.board, state.rows, state.cols),
        generation: state.generation + 1
      });
    case TOGGLE:
      return Object.assign({}, state, {
        board: toggleCell(state.board, action.x, action.y)
      });
    default:
      return state;
  }
};

export const getStarted = state => state.game.started;
export const getBoard = state => state.game.board;
export const getGeneration = state => state.game.generation;
export const getDimensions = state => state.game.dimensions;

export default combineReducers({
  game
});
