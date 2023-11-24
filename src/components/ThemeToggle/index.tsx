import { useTheme } from "../../contexts/ThemeContext";
import { ToggleWrapper } from "./styles";


export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleWrapper onClick={toggleTheme}>
        <button className={`${theme.mode}-btn`}>
          <span className={`${theme.mode}-slider`}></span>
        </button>
    </ToggleWrapper>
  )
}