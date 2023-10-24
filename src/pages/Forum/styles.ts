import styled from "styled-components";


export const ForumContainer = styled.div`

  width: 100%;
  max-width: 73.13rem;
  margin: 2rem auto;
  padding: 0 1rem;
  
  display: grid;
  grid-template-columns: 278px 1fr;
  gap: 2rem;
  align-items: flex-start;
  
  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    .buttons {
      display: flex;
      justify-content: space-between;
    }

  }

  @media (max-width: 412px) {
    main .buttons {
      flex-direction: column-reverse;
      gap: 1rem;
      > div {
        width: 100%;
        > div {
          width: 100%;
        }
      }
      button {
        width: 100%;
      }
    }
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    main > button {
      width: 100%;
    }
  }
`