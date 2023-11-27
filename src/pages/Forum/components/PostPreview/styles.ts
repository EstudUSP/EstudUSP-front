import styled from 'styled-components';

export interface PostPreviewContainerProps {
  variant: 'like' | '';
  isSelected: boolean;
}

export const PostPreviewContainer = styled.article<PostPreviewContainerProps>`
  background: ${props => props.theme['inverse-on-surface']};
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  border: ${props => props.isSelected ? '1px solid' + props.theme['primary'] : ''};
  
  .header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.5rem;
    
    time {
      font-size: 0.875rem;
      color: ${props => props.theme['neutral-40']};
      white-space: nowrap;
      align-self: flex-end;
    }

    .timeNlikes {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
      gap: 1rem;

      .likeButton {
        background: transparent;
        color: ${props => props.theme['on-surface']};
        font-family: 'Segoe_UI_Bold';
        display: flex;
        align-items: center;
        gap: 0.5rem;
        border-radius: 2px;
        border: 0;

        svg {
          color: ${props => props.variant && props.variant === 'like' && props.theme['primary']};
          transition: all 0.2s;
        }
        
        &:hover svg {
          opacity: 0.8;
        }
      }
      
      button {
        cursor: pointer;
      }
    }
  }

  .downarrow, .uparrow {
    position: absolute;
    bottom: .5rem;

    p {
      color: ${props => props.theme['primary']};
    }

    > div {
      height: 12px;
      width: 12px;
      transform: rotateY(0deg) rotate(45deg);
    }
  }

  .downarrow {
    visibility: hidden;
    left: 40%;

    > div {
      margin-top: -.3rem;
      border-bottom: 2px solid ${props => props.theme['primary']};
      border-right: 2px solid ${props => props.theme['primary']};
    }
  }

  .uparrow {
    left: 43%;
    
    > div {
      margin-bottom: -.5em;
      border-top: 2px solid ${props => props.theme['primary']};
      border-left: 2px solid ${props => props.theme['primary']};
    }
  }

  &:hover .downarrow {
    visibility: visible;
  }

  @media (max-width: 1024px) {
    padding: 1rem;

    .header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      .timeNlikes {
        width: 100%;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 1rem;
      }

      .downarrow {
        bottom: 0.5rem;
        right: 0;
        left: auto;
        visibility: visible;
      }
    }

    .uparrow {
      bottom: 0.5rem;
      left: 38%;
      visibility: visible;
    }
  }
`

export const PostPreviewContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  .authorInfo {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    align-self: center;
  }
`

export const TeacherTag = styled.div`
  width: fit-content;
  background: ${props => props.theme['surface-variant']};
  display: flex;
  padding: 0.25rem 0.75rem;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme['on-surface-variant']};
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  svg {
    color: ${props => props.theme['primary']};
    cursor: pointer;
  }
`;
