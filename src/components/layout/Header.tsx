'use client';

import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from '../theme/ThemeToggle';

export default function Header() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BlogStack
        </Typography>
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}