# [Build the Game of Life](https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-the-game-of-life)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this:
https://codepen.io/freeCodeCamp/full/BpwMZv/

## Solution

- Built using [React](https://reactjs.org/),
  [Redux](https://github.com/reactjs/redux) and
  [create-react-app](https://github.com/facebook/create-react-app).
- Board size for Conway's Game of Life is determined by the size of the
  viewport. It is stored as a 2 dimensional array.
- Each cell is given a value of 0, 1, 2, denoting whether the cell is dead,
  alive or has been reproduced.
- The HTML5 canvas API is used to draw the board.
- The `requestAnimationFrame` API is used to animate the board. FPS is capped at
  30, although this is configurable as a parameter on the main App component.
