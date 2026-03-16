import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #020617;
    --bg-card: #020617;
    --bg-hover: #0b1120;
    --fg: #f9fafb;          /* texto principal muy claro */
    --dim: #9ca3af;         /* texto secundario */
    --border: rgba(148, 163, 184, 0.5);
    --accent: #6366f1;      /* indigo principal */
    --danger: #f97373;
    --success: #22c55e;
    --font-display: 'Outfit', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }

  html { scroll-behavior: smooth; }

  body {
    background-color: var(--bg);
    background-image:
      radial-gradient(circle at top, rgba(56, 189, 248, 0.18), transparent 60%),
      radial-gradient(circle at bottom, rgba(129, 140, 248, 0.25), transparent 55%);
    color: var(--fg);
    font-family: var(--font-body);
    font-size: 15px;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 24px 0 32px;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    min-height: 100vh;
  }

  a { color: inherit; text-decoration: none; }
  ul { list-style: none; }
  button { cursor: pointer; font-family: var(--font-body); }
  input, textarea { font-family: var(--font-body); }

  ::selection { background: var(--accent); color: var(--bg); }

  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb {
    background: rgba(148, 163, 184, 0.5);
    border-radius: 999px;
  }
  `;
