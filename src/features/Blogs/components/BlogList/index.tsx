"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  CircularProgress,
  Alert,
  Button,
} from "@mui/material";
import { IBlog } from "../../types";
import BlogCard from "../BlogCard";

type BlogListProps = {
  data: IBlog[],
  isLoading: boolean,
}

const BlogList = ( { data, isLoading }: BlogListProps) => {

  if (isLoading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
        >
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box textAlign="center" py={8}>
          <Typography variant="h5" color="textSecondary">
            No blogs found
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
            Check back later for new articles.
          </Typography>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 4 }}
      >
        Latest Blogs
      </Typography>

      <Grid container spacing={3}>
        {data?.map((blog: IBlog, index: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id || index}> 
            <BlogCard
              id={blog.id}
              imageUrl={blog.imageUrl || ""}
              slug={blog.slug}
              title={blog.title}
              content={blog.content}
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
    </Container>
  );
};

export default BlogList;