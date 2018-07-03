import React from 'react';
import styled from 'styled-components';

const Inline = styled('div')`
  display: flex;
  justify-content: center;
  align-content: center;

  & > * + * {
    margin-left: 1rem;
  }
`;

const Button = styled('button')`
  width: 100%;
  border: 1px solid #fff;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  background-color: #444;
  color: #eee;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
`;

const Controls = ({ generations, start, stop, reset, clear, tick }) => (
  <Inline>
    <Button onClick={start}>Start</Button>
    <Button onClick={stop}>Stop</Button>
    <Button onClick={reset}>Reset</Button>
    <Button onClick={clear}>Clear</Button>
    <Button onClick={tick}>Tick</Button>
  </Inline>
);

export default Controls;
