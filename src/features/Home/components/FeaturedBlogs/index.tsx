'use client'

import BlogCard from "@/features/Blogs/components/BlogCard";
import { IBlog } from "@/features/Blogs/types";
import { Stack, Typography, Box, Grid } from "@mui/material";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface FeaturedBlogsProps {
  featuredBlogs: IBlog[]
}

const FeaturedBlogs: React.FC<FeaturedBlogsProps> = ({ featuredBlogs }) => {
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
      <Grid 
        container
        spacing={3}
        // sx={{
        //   maxWidth: '1200px',
        //   mx: 'auto'
        // }}
      >
        {featuredBlogs.map((blog: IBlog, index: number ) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id || index }>
            <BlogCard
              id={blog.id}
              imageUrl={blog.imageUrl || ""}
              slug={blog.slug}
              title={blog.title}
              content={blog.content}
              category={blog.category}
              description={blog.description}
              created_at={blog.created_at}
              author={blog.author}
              author_avatar={blog.author_avatar}
              technologies={blog.technologies}
              read_time={blog.read_time}
            />
          </Grid>
        ))}
       
      </Grid>
    </Box>
  );
};

export default FeaturedBlogs;