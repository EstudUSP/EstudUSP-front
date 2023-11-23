import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
  /* border-bottom: 1px solid ${props => props.theme['outline']}; */

  img {
    height: 100%;
  }
`

export const HeaderWrapper = styled.div`
  max-width: 73.13rem;
  width: 100%;
  height: 100%;
  padding-inline: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid ${props => props.theme['outline']}; */

  img {
    height: 100%;
  }
`