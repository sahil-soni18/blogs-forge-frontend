'use client';

import { IconButton, Tooltip } from '@mui/material';
import { useThemeContext } from '@/contexts/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material'

export default function ThemeToggle() {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Tooltip title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
      </IconButton>
    </Tooltip>
  );
}