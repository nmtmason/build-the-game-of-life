import styled from 'styled-components';

const Cell = styled('div')`
  width: 15px;
  height: 15px;
  background-color: ${props => (props.alive ? '#ddd' : '#eee')};
`;

export default Cell;
