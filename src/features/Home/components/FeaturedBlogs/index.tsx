'use client'

import BlogCard from "@/features/Blogs/components/BlogCard";
import { Stack } from "@mui/material";

const FeaturedBlogs: React.FC<{}> = ({}) => {
  return (
    <Stack>
      <BlogCard
        image="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="The Future of Web Development in 2023"
        description="Explore the latest trends and technologies that are shaping the future of web development. From AI-powered interfaces to serverless architectures, discover what's next in the world of coding."
        date="June 15, 2023"
        author="Sarah Johnson"
        authorAvatar="https://randomuser.me/api/portraits/women/43.jpg"
        category="Technology"
        minRead={7}
      />
    </Stack>
  );
};

export default FeaturedBlogs;
