import { HeaderContainer, HeaderWrapper } from "./styles";

import logo from '../../assets/estudusp_logo.svg';
import { ThemeToggle } from "../ThemeToggle";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} alt="" />
        <ThemeToggle />
      </HeaderWrapper>
    </HeaderContainer>
  )
}