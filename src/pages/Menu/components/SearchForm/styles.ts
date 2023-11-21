import styled from "styled-components";

export const SearchFormContainer = styled.form`
  width: 100%;
  display: flex;
  gap: 1rem;
  background-color: ${props => props.theme['surface-container-highest']};
  border-radius: 8px;
  border: 2px solid transparent;
  padding: calc(1rem - 2px) calc(0.75rem - 2px) calc(1rem - 2px) calc(1rem - 2px);

  input {
    flex: 1;
    border: 0;
    background-color: ${props => props.theme['surface-container-highest']};
    color: ${props => props.theme['on-surface-variant']};

    ::placeholder {
      color: ${props => props.theme['on-surface']};
    }
  
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus, 
    &:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-box-shadow: 0 0 0 30px ${props => props.theme['surface-container-highest']} inset !important;
      -webkit-text-fill-color: ${props => props.theme['on-surface-variant']} !important;
    }
  }

  button {
    display: flex;
    align-items: center;

    border: 0;
    background: transparent;
    color: ${props => props.theme['on-surface-variant']};
    cursor: pointer;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      color: ${props => props.theme.white};
      transition: color 0.2s;
    }
  }

  &:has(input[type=text]:focus) {
    border-color: ${props => props.theme['primary']};
  }
`;