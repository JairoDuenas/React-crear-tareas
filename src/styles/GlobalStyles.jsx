import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #e8ecf0;
    --bg-card: #dde2e8;
    --bg-hover: #d2d8e0;
    --fg: #727985;
    --dim: #565a60;
    --border: #c2cad4;
    --accent: #2e4a6e;
    --danger: #b03a2e;
    --success: #1e6e45;
    --font-display: 'Outfit', sans-serif;
    --font-body: 'Outfit', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  button { cursor: pointer; font-family: var(--font-body); }
  input, textarea { font-family: var(--font-body); }

  ::selection { background: var(--accent); color: var(--bg); }

  ::-webkit-scrollbar { width: 2px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: var(--border); 
  }
  `;
