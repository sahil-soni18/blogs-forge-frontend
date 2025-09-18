export interface themeContextType {
  mode: "dark" | "light";
  toggleTheme: () => void;
}

export interface CustomTheme {
  palette: {
    primary: {
      main: string;
      dark: string;
      light: string;
    };
    secondary: {
      main: string;
      light: string;
      dark: string;
    };
    background: {
      default: string;
      paper: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
  };

  typography: {
    fontFamily: string;

    h1: { fontSize: string; fontWeight: number };
    h2: { fontSize: string; fontWeight: number };
    body1: { fontSize: string; lineHeight: number };
  };

  spaccing: (factor: number) => string;
}
