'use client';

import React from "react";
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const { theme } = useTheme();

    return (
        <MUIThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MUIThemeProvider>
    )
}