'use client';

import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import ThemeToggle from '../theme/ThemeToggle';
import { useRouter } from 'next/navigation';

export default function Header() {

  const router = useRouter();
  return (
    <AppBar 
      position="fixed" 
      elevation={0}
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => router.push('/')}>
          BlogStack
        </Typography>
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}