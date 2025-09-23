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
import { dummyBlogs } from "../../dummyData";

const BlogList = () => {
  const [data, setData] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data fetch function - using dummy data
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Use your dummy blogs data
      setData(dummyBlogs);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  if (loading) {
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

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert
          severity="error"
          action={
            <Button color="inherit" size="small" onClick={fetchBlogs}>
              Retry
            </Button>
          }
        >
          {error}
        </Alert>
      </Container>
    );
  }

  if (data.length === 0) {
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
        {data.map((blog: IBlog, index: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={blog.id || index}> {/* Fixed: changed 'size' to 'item' */}
            <BlogCard
              id={blog.id}
              image={blog.image || ""}
              slug={blog.slug}
              title={blog.title}
              content={blog.content}
              description={blog.description}
              date_of_publish={blog.date_of_publish}
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