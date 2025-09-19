'use client';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Box,
  Chip,
  IconButton,
  Avatar,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  CalendarToday,
  Person,
  BookmarkBorder,
  Bookmark,
  Share
} from "@mui/icons-material";
import { useState } from "react";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  author: string;
  authorAvatar?: string;
  category?: string;
  minRead?: number;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  description,
  date,
  author,
  authorAvatar,
  category,
  minRead = 5
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  // Function to truncate description to a certain number of characters
  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  return (
    <Card
      sx={{
        maxWidth: 800,
        width: "100%",
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)"
        }
      }}
    >
      {/* Blog Image */}
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      {/* Category Chip */}
      {category && (
        <Box sx={{ position: "relative", mt: -2, ml: 2 }}>
          <Chip
            label={category}
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              fontWeight: 600,
              fontSize: "0.75rem"
            }}
          />
        </Box>
      )}

      <CardContent sx={{ p: 3 }}>
        {/* Blog Title */}
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 700,
            lineHeight: 1.3,
            color: theme.palette.text.primary,
            mb: 2
          }}
        >
          {title}
        </Typography>

        {/* Blog Description Excerpt */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mb: 3,
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }}
        >
          {truncateDescription(description, 150)}
        </Typography>

        {/* Divider */}
        <Box sx={{ borderBottom: "1px solid", borderColor: "divider", mb: 2 }} />
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0, justifyContent: "space-between" }}>
        {/* Left side: Date and Read Time */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CalendarToday
            sx={{ fontSize: "1rem", mr: 0.5, color: "text.secondary" }}
          />
          <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
            {date}
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            • {minRead} min read
          </Typography>
        </Box>

        {/* Right side: Author and Action Buttons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Author Info */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            {authorAvatar ? (
              <Avatar
                src={authorAvatar}
                sx={{ width: 24, height: 24, mr: 1 }}
              />
            ) : (
              <Person sx={{ fontSize: "1rem", mr: 0.5, color: "text.secondary" }} />
            )}
            <Typography variant="body2" color="text.secondary">
              {author}
            </Typography>
          </Box>

          {/* Action Buttons */}
          <Box>
            <IconButton
              size="small"
              onClick={toggleBookmark}
              sx={{ color: isBookmarked ? theme.palette.primary.main : "text.secondary" }}
            >
              {isBookmarked ? <Bookmark /> : <BookmarkBorder />}
            </IconButton>
            <IconButton size="small" sx={{ color: "text.secondary" }}>
              <Share />
            </IconButton>
          </Box>
        </Box>
      </CardActions>
    </Card>
  );
};

export default BlogCard;

// Example usage:
/*
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
*/