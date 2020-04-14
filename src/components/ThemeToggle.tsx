import React from 'react';
import { LightTheme, DarkTheme, ThemeProvider } from 'baseui';
import { Button}  from 'baseui/button';

const THEME = {
  light: 'light',
  dark: 'dark',
};

function ThemeToggle() {
  const [theme, setTheme] = React.useState(THEME.light);
  return (
    <ThemeProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
      <Button
        onClick={() =>
          setTheme(theme === THEME.light ? THEME.dark : THEME.light)
        }
      >
        Toggle light/dark theme!
      </Button>
    </ThemeProvider>
  );
}

export default ThemeToggle;
