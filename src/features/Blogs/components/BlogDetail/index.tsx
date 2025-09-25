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
  useTheme,
} from "@mui/material";
import { CalendarToday, Person, Schedule } from "@mui/icons-material";
import { IBlog } from "../../types";
import MDPreview from "@/components/MDPreview/MDPreview";

interface BlogDetailProps {
  blog: IBlog | null;
  slug: string;
}

const BlogDetail = ({ blog, slug }: BlogDetailProps) => {

  const theme = useTheme();

  if (!blog || blog == null) {
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
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)' 
            : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
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
                background: theme.palette.mode === 'dark' 
                  ? 'linear-gradient(45deg, #90caf9, #81d4fa)' 
                  : 'linear-gradient(45deg, #1976d2, #00bcd4)',
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
                  {blog.author.name}
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={1} alignItems="center">
                <CalendarToday color="primary" sx={{ fontSize: 20 }} />
                <Typography variant="body2" color="text.secondary">
                  {new Date(blog.created_at).toLocaleDateString('en-US', {
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
            alt={blog.author.name}
            sx={{ width: 60, height: 60 }}
          />
          <Box>
            <Typography variant="h6" gutterBottom>
              Written by {blog.author.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Published on {new Date(blog.created_at).toLocaleDateString()}
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
};

export default BlogDetail;