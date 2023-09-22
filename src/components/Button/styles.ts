import styled from 'styled-components';

export const Button = styled.button`
  padding: .75rem 1.5rem;
  margin-top: 1rem;
  border-radius: 8px;
  border: 0;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;

  &:not(:disabled):hover {
    background: ${props => props.theme['green-300']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

`;