import { BrowserRouter } from "react-router-dom";
import Hotjar from '@hotjar/browser';
import { Router } from "./Router";
import { GlobalStyle } from './styles/global';
import { PostsProvider } from './contexts/PostsContext';
import { SubjectsProvider } from "./contexts/SubjectsContext";
import { FileProvider } from "./contexts/files";
import { ThemeProvider } from "./contexts/ThemeContext";

try {
  const siteId = Number(import.meta.env.VITE_HOTJAR_ID);
  const hotjarVersion = Number(import.meta.env.VITE_HOTJAR_VERSION);

  Hotjar.init(siteId, hotjarVersion);
} catch (e) {
  console.log('Cannot initialize Hotjar:', e);
}

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <GlobalStyle />

        <SubjectsProvider>
        <FileProvider>
        <PostsProvider>

          <Router />
        </PostsProvider>
        </FileProvider>
        </SubjectsProvider>

      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
