import styled from 'styled-components';


export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;

    .postAttachmentsWrapper {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-start;
      padding-block: 0.5rem 0;

    }

    a {
      font-weight: bold;
      color: ${props => props.theme['tertiary']};
      text-decoration: none;
      transition: all 0.2s;
      
      :hover {
        filter: brightness(1.15);
      }

      :active {
        filter: brightness(1.3);
      }
    }

    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      margin-top: 1.5rem;
      gap: 1rem;
    }
  }

  .commentList {
    width: 100%;
    margin-block: 1.5rem 2rem;
  }

  .commentList > h6 {
    line-height: 1.6;
    color: ${props => props.theme['on-surface']};
  }

  @media (max-width: 1024px) {
    .content .buttons {
      flex-direction: column-reverse;
      align-items: flex-start;

      button {
        width: 100%;
      }
    }

    .commentList {
      margin-block: 0 2.5rem;
    }
  }
`

export const CommentForm = styled.form`

  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-top: 1.5rem;
  
  > strong {
    font: 700 1rem/1.25rem "Segoe_UI_Bold";
    color: ${props => props.theme['on-surface']};
  }

  input[type="text"] {
    width: 100%;
    background: ${props => props.theme['surface-container-lowest']};
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    color: ${props => props.theme['on-surface']};
  }

  textarea {
    width: 100%;
    background: ${props => props.theme['surface-container-lowest']};
    border: 0;
    resize: none;
    height: 6rem;
    padding: 1rem;
    border-radius: 8px;
    color: ${props => props.theme['on-surface']};
    line-height: 1.4;
  }

  span {
    text-decoration: underline;
    margin-top: -1rem;
    color: red;
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.5rem;
  }

  :focus-within footer {
    visibility: visible;
    max-height: none;
  }
`

export const ShareButtonContainer = styled.div`
  position: relative;
  width: fit-content !important;

  /* Tooltip text */
  .tooltiptext {
    width: 7.5rem;
    visibility: visible;
    background-color: ${props => props.theme['surface-variant']};
    color: ${props => props.theme['on-surface']};
    font: 400 0.875rem/1rem 'Segoe_UI';
    text-align: center;
    padding: 7px 15px;
    border-radius: 4px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 8%;
    left: 120%;

    /* Fade in tooltip */
    opacity: 1;
    transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  .tooltiptext::after {
    content: "";
    position: absolute;
    bottom: 30%;
    right: 100%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent ${props => props.theme['surface-variant']} transparent transparent;
  }
`

export const ShareButton = styled.button`
  width: fit-content !important;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 100%;
  border: 0;
  background: transparent;
  transition: all 0.2s;
  cursor: pointer;

  svg {
    color: ${props => props.theme['primary']};
  }

  :hover {
    background-color: ${props => props.theme['surface-variant']};
    filter: brightness(1.15);
  }

  :active {
    filter: brightness(1.3);
  }
`