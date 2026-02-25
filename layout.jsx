@tailwind base;
@tailwind components;
@tailwind utilities;

:root{
  --bg: #0b0b0c;
  --fg: #f5f5f5;
}

html, body { height: 100%; }
body{
  background: var(--bg);
  color: var(--fg);
  font-family: theme(fontFamily.body);
}

a { color: inherit; }

::selection{
  background: rgba(212,162,60,.35);
}
