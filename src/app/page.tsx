import LoginPage from "@/features/Auth/components/Login";
import SignupPage from "@/features/Auth/components/Signup";
import FeaturedBlogs from "@/features/Home/components/FeaturedBlogs";
import Hero from "@/features/Home/components/HeroSection";
import { Typography, Box, Paper } from "@mui/material";

async function getFeaturedBlogs() {
  console.log(`${process.env.NEXT_PUBLIC_API_BASE_URL}blog/featured`);
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}blog/featured`,
      {
        cache: "force-cache",
        next: {
          revalidate: 3600,
          tags: ["blogs", "featured"],
        },
      }
    );

    console.log(`response: ${JSON.stringify(response)}`)

    if (!response.ok) {
      throw new Error(`Failed to fetch featured blogs: ${response.status}`);
    }

    const featuredBlogs = await response.json();
    return featuredBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}
export default async function Home() {

  const featuredBlogs = await getFeaturedBlogs();
  return (
    <Box>
      <Hero />
      <FeaturedBlogs featuredBlogs={featuredBlogs} />
      {/* <SignupPage /> */}
    </Box>
  );
}
