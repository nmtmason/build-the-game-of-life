import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  border: 1px solid rgb(220, 220, 220);
  padding: 8px 16px;
  font-size: 1rem;
  text-decoration: none;
  text-align: center;
  color: rgb(255, 255, 255);
  background-color: rgb(55, 125, 245);
  outline: none;

  &:hover {
    background-color: rgb(25, 105, 245);
  }
`;
