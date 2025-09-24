'use client'

import BlogCard from "@/features/Blogs/components/BlogCard";
import { Stack, Typography, Box } from "@mui/material";

const FeaturedBlogs: React.FC<{}> = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography 
        variant="h4" 
        component="h2" 
        sx={{ 
          mb: 4, 
          fontWeight: 'bold',
          textAlign: { xs: 'center', md: 'left' },
          color: 'text.primary'
        }}
      >
        Featured Blogs
      </Typography>
      <Stack 
        spacing={4}
        sx={{
          maxWidth: '1200px',
          mx: 'auto'
        }}
      >
        <BlogCard
          imageUrl="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          title="The Future of Web Development in 2023"
          slug="the-future-of-web-development-in-2023"
          description="Explore the latest trends and technologies that are shaping the future of web development. From AI-powered interfaces to serverless architectures, discover what's next in the world of coding."
          date_of_publish="June 15, 2023"
          author="Sarah Johnson"
          content="Some Content"
          author_avatar="https://randomuser.me/api/portraits/women/43.jpg"
          technologies={["Technology"]}
          read_time={7}
        />
      </Stack>
    </Box>
  );
};

export default FeaturedBlogs;