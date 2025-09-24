"use client";

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
  useMediaQuery,
  Grid,
} from "@mui/material";
import { CalendarToday, Person, Share } from "@mui/icons-material";
import { useState } from "react";
import { IBlog } from "../../types";
import { useRouter } from "next/navigation";

const BlogCard: React.FC<IBlog> = ({
  imageUrl,
  title,
  description,
  date_of_publish,
  slug,
  author,
  author_avatar,
  technologies,
  read_time = 5,
}) => {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const truncateDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        borderRadius: 2,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        },
        position: "relative",
      }}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      onClick={() => router.push(`/blogs/${slug}`)}
    >
      {/* Blog Image */}
      <CardMedia
        component="img"
        height="240"
        image={imageUrl}
        alt={title}
        sx={{ objectFit: "cover" }}
      />

      {/* Hover Share Button */}
      {isHovered && (
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "text.secondary",
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
          }}
        >
          <Share />
        </IconButton>
      )}

      {/* technologies Chip */}
      {technologies && (
        <Box sx={{ position: "relative", mt: -2, ml: 2 }}>
          <Chip
            label={technologies}
            size="small"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "white",
              fontWeight: 600,
              fontSize: "0.75rem",
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
            mb: 2,
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
            overflow: "hidden",
          }}
        >
          {truncateDescription(description, 150)}
        </Typography>

        {/* Divider */}
        <Box
          sx={{ borderBottom: "1px solid", borderColor: "divider", mb: 2 }}
        />
      </CardContent>

      <CardActions sx={{ p: 3, pt: 0 }}>
        <Grid container alignItems="center">

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, width: "100%" }}>
              <CalendarToday
                sx={{ fontSize: "1rem", color: "text.secondary" }}
              />
              <Typography variant="body2" color="text.secondary">
                {date_of_publish}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • {read_time} min read
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-start", sm: "flex-end" },
                gap: 1,
              }}
            >
              {author_avatar ? (
                <Avatar src={author_avatar} sx={{ width: 24, height: 24 }} />
              ) : (
                <Person sx={{ fontSize: "1rem", color: "text.secondary" }} />
              )}
              <Typography variant="body2" color="text.secondary">
                {author.name}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default BlogCard;
