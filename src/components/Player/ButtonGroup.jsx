import styled from 'styled-components';

export const ButtonGroup = styled.div`
  display: flex;
  position: fixed;
  top: 2rem;
  right: 3rem;
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(255, 255, 255);
  padding: 1rem;

  & > button:not(:last-child) {
    border-right: 0;
  }
`;
