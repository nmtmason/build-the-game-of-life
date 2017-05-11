# [Build the Game of Life](https://www.freecodecamp.com/challenges/build-the-game-of-life)

Part of the [freecodecamp](https://www.freecodecamp.com) curriculum.

## Objective

Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/reGdqx/.

1. User Story: I can start and stop the board.
2. User Story: I can set up the board.
3. User Story: I can clear the board.
4. User Story: When I press start, the game will play out.
5. User Story: Each time the board changes, I can see how many generations have gone by.

## Solution

* Built using [React](https://github.com/facebook/react), [Redux](https://github.com/reactjs/redux) and [Styled Components](https://github.com/styled-components/styled-components).
* The initial project is scaffolded with [create-react-app](https://github.com/facebookincubator/create-react-app).
* A 30 x 30 board is generated.
* Each cell is given a value of 0 or 1, denoting whether or not the cell is alive.
* Using 0 or 1 makes it trivial to count the number of living neighbours.
* A single Redux reducer is implemented which maintains the board state and current number of generations.
* Framerate is dictated by the requestAnimationFrame function.
