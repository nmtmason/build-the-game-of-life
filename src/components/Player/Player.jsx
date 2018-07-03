import React, { Component } from 'react';

import { ButtonGroup } from './ButtonGroup';
import { Button } from './Button';

export class Player extends Component {
  constructor(props) {
    super(props);
    this.offset = null;
  }

  getWidth = () => {
    let exactWidth =
      this.props.width - (this.props.width % this.props.cellWidth);
    return exactWidth - this.props.cellWidth;
  };

  getHeight = () => {
    let exactHeight =
      this.props.height - (this.props.height % this.props.cellHeight);
    return exactHeight - this.props.cellHeight;
  };

  getRows = () => {
    return Math.floor(this.getWidth() / this.props.cellWidth);
  };

  getCols = () => {
    return Math.floor(this.getHeight() / this.props.cellHeight);
  };

  reset = () => {
    this.props.reset(
      this.getWidth(),
      this.getHeight(),
      this.getRows(),
      this.getCols()
    );
  };

  tick = () => {
    if (this.props.started) {
      let now = Date.now();

      if (now - this.offset > 1000 / this.props.fps) {
        this.props.tick();
        this.offset = now;
      }

      window.requestAnimationFrame(this.tick);
    }
  };

  componentDidMount() {
    this.reset();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.width !== this.props.width ||
      prevProps.height !== this.props.height
    ) {
      this.reset();
    }
    if (prevProps.started === false && this.props.started === true) {
      this.tick();
    }
  }

  componentWillUnmount() {
    this.props.stop();
  }

  render() {
    return (
      <ButtonGroup>
        <Button
          onClick={!this.props.started ? this.props.start : this.props.stop}
        >
          {!this.props.started ? 'Start' : 'Stop'}
        </Button>
        <Button onClick={this.props.tick}>Tick</Button>
        <Button onClick={this.reset}>Reset</Button>
        <Button onClick={this.props.clear}>Clear</Button>
      </ButtonGroup>
    );
  }
}
