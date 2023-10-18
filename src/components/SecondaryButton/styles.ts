import styled from "styled-components";


interface SecondaryButtonProps {
  variant: true | false;
}

export const SecondaryButton = styled.button<SecondaryButtonProps>`
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  max-height: 40px;
  border-radius: 8px;
  width: fit-content;
  color: ${props => props.theme['primary']};
  background: transparent;
  border: 1px solid ${props => props.theme['primary']};

  ${props => props.variant && `
    background-color: ${props.theme['on-primary']};
    opacity: 0.92;
  `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    cursor: pointer;
    ${props => !props.variant && `
      background: ${props.theme['surface-container-highest']};
      opacity: 0.92;
    `}
  }

  @media (max-width: 1024px) {
    max-height: fit-content;
  }
`;