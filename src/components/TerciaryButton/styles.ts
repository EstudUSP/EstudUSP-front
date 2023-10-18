import styled from "styled-components";


export const TerciaryButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  max-height: 40px;
  border-radius: 8px;
  width: fit-content;
  color: ${props => props.theme['primary']};
  background: transparent;
  border: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props => props.theme['surface-container-highest']};
    opacity: 0.92;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    max-height: fit-content;
  }
`;