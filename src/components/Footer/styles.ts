import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 2rem;
  bottom: 0; /* Ajuste para fixar o rodapé na parte inferior da tela */
  z-index: 999;
  /* margin-top: auto; */
  /* border-bottom: 1px solid ${props => props.theme['outline']}; */
  
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    *:not(:last-child):not(:first-child) {
      margin-left: 0.5rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-top: 0.1rem;
      color: ${props => props.theme['primary']};
    }

    span {
      color: ${props => props.theme['primary']};
      font-weight: bold;
      transition: 0.2s;

      &:hover {
        cursor: pointer;
        filter: brightness(115%);
        text-decoration: underline;
      }
    }
  }
`