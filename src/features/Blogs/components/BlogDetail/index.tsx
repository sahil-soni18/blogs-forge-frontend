// features/blogs/components/BlogDetail.tsx
"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Chip,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import { CalendarToday, Person, Schedule } from "@mui/icons-material";
import { IBlog } from "../../types";
import { dummyBlogs } from "../../dummyData";
import MDPreview from "@/components/MDPreview/MDPreview";

interface BlogDetailProps {
  slug: string;
}

const BlogDetail = ({ slug }: BlogDetailProps) => {
  const [blog, setBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch blog by slug
    const fetchBlog = async () => {
      setLoading(true);
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundBlog = dummyBlogs.find(blog => blog.slug === slug);
        setBlog(foundBlog || null);
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug]);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!blog) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Blog not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header Section */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          mb: 4,
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 2
        }}
      >
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
          {/* Left Side - Content */}
          <Box sx={{ flex: 1 }}>
            <Typography 
              variant="h3" 
              component="h1" 
              gutterBottom 
              sx={{ 
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #1976d2, #00bcd4)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {blog.title}
            </Typography>
            
            <Typography 
              variant="h6" 
              color="text.secondary" 
              gutterBottom
              sx={{ mb: 3 }}
            >
              {blog.description}
            </Typography>

            {/* Meta Information */}
            <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Person color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  {blog.author}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <CalendarToday color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  {new Date(blog.date_of_publish).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <Schedule color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  {blog.read_time}
                </Typography>
              </Stack>
            </Stack>

            {/* Technologies */}
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
              {blog.technologies?.map((tech: string, index: number) => (
                <Chip 
                  key={index} 
                  label={tech} 
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>

          {/* Right Side - Cover Image */}
          <Box sx={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}>
            <Box
              component="img"
              src={blog.imageUrl}
              alt={blog.title}
              sx={{
                width: '100%',
                maxWidth: 400,
                height: 250,
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Box>
        </Stack>
      </Paper>

      <Divider sx={{ mb: 4 }} />

      {/* Blog Content Section */}
      <Paper elevation={0} sx={{ p: 0 }}>
        <MDPreview content={blog.content || ''} />
      </Paper>

      {/* Author Section at the bottom */}
      <Paper elevation={1} sx={{ p: 3, mt: 4, borderRadius: 2 }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar 
            src={blog.author_avatar} 
            alt={blog.author}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              Written by {blog.author}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Published on {new Date(blog.date_of_publish).toLocaleDateString()}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default BlogDetail;