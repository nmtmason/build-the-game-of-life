import { Component } from 'react';

export class Window extends Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  handleResize = event => {
    this.setState(state => ({
      width: window.innerWidth,
      height: window.innerHeight
    }));
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return this.props.children(this.state.width, this.state.height);
  }
}
