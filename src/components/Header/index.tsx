import { HeaderContainer, HeaderWrapper } from "./styles";

import logoDark from '../../assets/estudusp_logo-dark.svg';
import logoLight from '../../assets/estudusp_logo-light.svg';
import { ThemeToggle } from "../ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";

export function Header() {
  const { theme } = useTheme();

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={theme.mode == "dark" ? logoDark : logoLight} alt="" />
        <ThemeToggle />
      </HeaderWrapper>
    </HeaderContainer>
  )
}