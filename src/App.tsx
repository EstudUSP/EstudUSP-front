// import {BaseStyles, ThemeProvider, theme} from '@primer/react'

// import deepmerge from 'deepmerge'
import { BrowserRouter } from "react-router-dom";
import Hotjar from '@hotjar/browser';
// import './global.css'
import { Router } from "./Router";
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { PostsProvider } from './contexts/PostsContext';
import { ThemeProvider } from "styled-components";
import { SubjectsProvider } from "./contexts/SubjectsContext";
import { FileProvider } from "./contexts/files";

// const customTheme = deepmerge(theme, {
//   fonts: {
//     normal: 'Segoe_UI, sans-serif',
//     mono: 'MonoLisa, monospace',
//   },
// })

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
      <ThemeProvider theme={defaultTheme} /*nightScheme='dark_dimmed'*/>
        <GlobalStyle />
        {/* <BaseStyles> */}

        <SubjectsProvider>
        <FileProvider>
        <PostsProvider>

          <Router />
        </PostsProvider>
        </FileProvider>
        </SubjectsProvider>

        {/* </BaseStyles> */}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
