import React, { Component } from 'react';

import { CELL_STATE } from '../utils/cellState';

export class Canvas extends Component {
  canvasRef = React.createRef();

  draw = () => {
    let ctx = this.canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, this.props.width, this.props.height);

    this.props.board.forEach((cells, x) => {
      cells.forEach((cellState, y) => {
        ctx.fillStyle =
          cellState === CELL_STATE.REPRODUCED
            ? 'rgb(150, 190, 210)'
            : cellState === CELL_STATE.ALIVE
              ? 'rgb(170, 210, 230)'
              : 'white';

        ctx.fillRect(
          x * this.props.cellWidth,
          y * this.props.cellHeight,
          this.props.cellWidth,
          this.props.cellHeight
        );
      });
    });
  };

  getClickPosition = (x, y) => {
    let rect = this.canvasRef.current.getBoundingClientRect();
    return { x: x - rect.left, y: y - rect.top };
  };

  getClickCell = (x, y) => {
    let position = this.getClickPosition(x, y);
    return {
      x: Math.floor(position.x / this.props.cellWidth),
      y: Math.floor(position.y / this.props.cellHeight)
    };
  };

  handleClick = event => {
    let cell = this.getClickCell(event.clientX, event.clientY);
    this.props.toggle(cell.x, cell.y);
  };

  componentDidMount() {
    this.draw();
  }

  componentDidUpdate() {
    this.draw();
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <canvas
          ref={this.canvasRef}
          width={this.props.dimensions.width}
          height={this.props.dimensions.height}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
