import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  img {
    max-width: 80%;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    padding: 0.75rem 1rem;
    border-radius: 6px;
    background-color: ${props => props.theme['surface-container-highest']};

    > div { // div do link + check à direita
      display: flex;

      a svg {
        margin: 0 !important;
        color: ${props => props.theme['primary']} !important;
      }
    }
  }

  @media (max-width: 1024px) {
    li {
      > div a svg {
        width: 20px;
      }
    }
  }
`;

export const FileInfo = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    width: 100%;

    a {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: ${props => props.theme['on-surface-variant']} !important;
      
      strong {
        color: ${props => props.theme['on-surface-variant']};
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {

    > div { 
      max-width: calc(100vw - 12rem);

      strong {
        font-size: 0.875rem;
      }
    }
  }
`;

interface PreviewContainerProps {
  src?: string;
}

export const PreviewContainer = styled.div<PreviewContainerProps>`
  width: 36px;
  min-width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`;
