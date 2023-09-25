import styled from 'styled-components';

export const DisciplinePreviewContainer = styled.article`
  width: 100%;

  a {
    text-decoration: none;
    color: ${props => props.theme['on-surface']};
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    border: 2px solid transparent;
    border-radius: 8px;
    transition: background-color 0.2s, border 0.2s;
    
    background: ${props => props.theme['inverse-on-surface']};
    
    
    &:hover {
      background: ${props => props.theme['surface-container-highest']};
      border: 2px solid ${props => props.theme['primary']};
      cursor: pointer;
    }
  }
`

export const DisciplinePreviewContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3rem;
  padding-right: 3rem;

  .disciplineImg {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18.56rem;
    min-width: 18.56rem;
    height: 8rem;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
    }
  }

  .disciplineInfo {
    width: fit-content;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`

export const DisciplineLastQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 21rem;
  min-width: 21rem;
  height: 8rem;

  tbody {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  tr {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  td p {
    font-family: 'Segoe_UI_Bold';
  }

  td span {
    font-size: 0.875rem;

  }

  tr td:nth-child(1) {
    width: 11.5rem;

    p {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }

  tr td:nth-child(2) {
    text-align: right;
  }

`;