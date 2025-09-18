import { Typography, Box, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Paper sx={{ p: 4, mb: 4 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to My Blog
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Discover amazing content and insights on various topics.
        </Typography>
      </Paper>

      <Box>
        {/* Your blog posts will go here */}
        <Paper sx={{ p: 3, mb: 2 }}>
          <Typography variant="h2" gutterBottom>
            Sample Blog Post
          </Typography>
          <Typography variant="body1">
            This is a sample blog post to demonstrate the theming system.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}