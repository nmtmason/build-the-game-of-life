import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { getStarted, getBoard } from './reducers'
import { start, stop, reset, tick, toggle } from './actions/game.js'

import Cell from './components/Cell.jsx'
import Controls from './components/Controls.jsx'

const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  min-width: 500px;
  max-width: 940px;
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  background-color: #fff;

  & > * + * {
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
`

const Board = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 454px;
  height: 454px;
  border: 1px solid #eee;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.25);
  padding: 1px;
`

class App extends React.Component {
  constructor (props) {
    super(props)
    this.tick = this.tick.bind(this)
    this.state = {
      started: false
    }
  }

  componentWillMount () {
    this.props.reset()
  }

  componentWillUnmount () {
    this.stop()
  }

  componentDidUpdate (prevProps) {
    if (prevProps.started === false && this.props.started === true) {
      this.tick()
    }
  }

  tick () {
    if (this.props.started) {
      window.requestAnimationFrame(this.tick)
      this.props.tick()
    }
  }

  render() {
    const { board, toggle, start, stop, reset } = this.props
    return (
      <Container>
        <Controls start={start} stop={stop} reset={reset} />
        <Board>
          {board.map((row, x) => (
            <div key={x}>
              {row.map((alive, y) => (
                <Cell key={y} alive={alive} onClick={() => toggle(x, y)} />
              ))}
            </div>
          ))}
        </Board>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    board: getBoard(state),
    started: getStarted(state)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    start: () => dispatch(start()),
    stop: () => dispatch(stop()),
    reset: () => dispatch(reset()),
    tick: () => dispatch(tick()),
    toggle: (x, y) => dispatch(toggle(x, y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
