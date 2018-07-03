import { connect } from 'react-redux';

import { Player } from '../components/Player';

import { getStarted, getDimensions, getBoard } from '../reducers';
import { start, stop, tick, clear, reset } from '../actions/game';

const mapStateToProps = state => {
  return {
    dimensions: getDimensions(state),
    board: getBoard(state),
    started: getStarted(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: (width, height, rows, cols) =>
      dispatch(reset(width, height, rows, cols)),
    clear: () => dispatch(clear()),
    start: () => dispatch(start()),
    stop: () => dispatch(stop()),
    tick: () => dispatch(tick())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
