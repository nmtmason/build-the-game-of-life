import React from 'react';
import { Window } from './components/Window';

import CanvasContainer from './containers/CanvasContainer';
import PlayerContainer from './containers/PlayerContainer';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Window>
          {(width, height) => (
            <PlayerContainer
              width={width}
              height={height}
              cellWidth={this.props.cellWidth}
              cellHeight={this.props.cellHeight}
              fps={this.props.fps}
            />
          )}
        </Window>
        <CanvasContainer
          cellWidth={this.props.cellWidth}
          cellHeight={this.props.cellHeight}
        />
      </React.Fragment>
    );
  }
}

export default App;
