import { connect } from 'react-redux';

import { Canvas } from '../components/Canvas';

import { getDimensions, getBoard } from '../reducers';
import { toggle } from '../actions/game';

const mapStateToProps = state => ({
  dimensions: getDimensions(state),
  board: getBoard(state)
});

const mapDispatchToProps = dispatch => ({
  toggle: (x, y) => dispatch(toggle(x, y))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
