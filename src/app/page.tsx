import LoginPage from '@/features/Auth/components/Login';
import SignupPage from '@/features/Auth/components/Signup';
import FeaturedBlogs from '@/features/Home/components/FeaturedBlogs';
import Hero from '@/features/Home/components/HeroSection';
import { Typography, Box, Paper } from '@mui/material';

export default function Home() {
  return (
    <Box>
      <Hero />
      <FeaturedBlogs />
      {/* <SignupPage /> */}
    </Box>
  );
}