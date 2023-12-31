import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: fit-content;
  height: fit-content;

  .avatar {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 8px;
    padding: 0.5rem;
  }
  
  .avatarWithBorder {
    width: calc(3rem + 6px);
    height: calc(3rem + 6px);
    border-radius: 100%;
    /* border: 4px solid ${props => props.theme['gray-800']}; */
    outline: 2px solid ${props => props.theme['yellow-usp']};
    outline: none;
    padding: 0.75rem;
  }
  
  @media (max-width: 1024px) {
    margin-top: 0.25rem;
    
    .avatarWithBorder {
      width: calc(1.5rem + 12px);
      height: calc(1.5rem + 12px);
      padding: 0.5rem;
    }
  }
`