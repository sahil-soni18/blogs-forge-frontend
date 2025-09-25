"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, useTheme, Typography } from "@mui/material";

interface MDPreviewType {
  content: string;
}

const MDPreview = ({ content }: MDPreviewType) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1,
        boxShadow: 1,
        bgcolor: "background.paper",
        "& h1": {
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "2rem 0 1rem 0",
          color: theme.palette.text.primary,
        },
        "& h2": {
          fontSize: "1.5rem",
          fontWeight: "bold",
          margin: "1.5rem 0 1rem 0",
          color: theme.palette.text.primary,
        },
        "& h3": {
          fontSize: "1.25rem",
          fontWeight: "bold",
          margin: "1.25rem 0 0.75rem 0",
          color: theme.palette.text.primary,
        },
        "& p": {
          margin: "1rem 0",
          lineHeight: 1.6,
          color: theme.palette.text.secondary,
        },
        "& img": {
          maxWidth: "100%",
          height: "auto",
          borderRadius: 1,
          margin: "1rem 0",
        },
        "& pre": {
          bgcolor: theme.palette.mode === "dark" ? "grey.900" : "grey.100",
          color: theme.palette.text.primary,
          p: 2,
          borderRadius: 1,
          overflow: "auto",
          margin: "1rem 0",
        },
        "& code": {
          bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.100",
          color: theme.palette.text.primary,
          px: 0.5,
          borderRadius: 0.5,
          fontFamily: "monospace",
        },
        "& blockquote": {
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          pl: 2,
          ml: 0,
          fontStyle: "italic",
          color: theme.palette.text.secondary,
        },
        "& table": {
          width: "100%",
          borderCollapse: "collapse",
          margin: "1rem 0",
        },
        "& th, & td": {
          border: `1px solid ${theme.palette.divider}`,
          padding: "0.75rem",
          textAlign: "left",
        },
        "& th": {
          bgcolor: theme.palette.mode === "dark" ? "grey.800" : "grey.50",
          fontWeight: "bold",
        },
        "& ul, & ol": {
          margin: "1rem 0",
          pl: 2,
        },
        "& li": {
          margin: "0.5rem 0",
        },
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // Custom component for images with captions
          img: ({ node, ...props }) => (
            <Box sx={{ textAlign: "center" }}>
              <img {...props} style={{ maxWidth: "100%" }} />
            </Box>
          ),
          // Custom component for tables
          table: ({ node, ...props }) => (
            <Box sx={{ overflowX: "auto" }}>
              <table {...props} style={{ width: "100%" }} />
            </Box>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MDPreview;
