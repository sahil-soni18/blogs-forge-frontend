// components/MDPreview.tsx
'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Box, useTheme } from '@mui/material';

interface MDPreviewType {
  content: string;
}

const MDPreview = ({ content }: MDPreviewType) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        '& img': { maxWidth: '100%', height: 'auto' },
        '& pre': {
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
          color: theme.palette.text.primary,
          p: 2,
          borderRadius: 1,
          overflow: 'auto',
        },
        '& code': {
          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100',
          color: theme.palette.text.primary,
          px: 0.5,
          borderRadius: 0.5,
        },
      }}
    >
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </Box>
  );
};

export default MDPreview;
