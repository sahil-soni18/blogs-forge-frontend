import { useThemeContext } from "@/contexts/ThemeContext"
import { darkTheme, lightTheme } from "@/theme";

export const useTheme = () => {
    const { mode } = useThemeContext();
    const theme = mode === 'light'? lightTheme: darkTheme;

    return { theme, mode };
}