"use client";

import { Box, Container, Paper, Stack, Typography, useTheme, alpha } from "@mui/material";
import { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)}, ${alpha(
          theme.palette.secondary.main,
          0.1
        )})`,
        px: 2,
        mt: 2
      }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={6} alignItems="center">
          {/* Left: Form */}
          <Paper
            elevation={6}
            sx={{
              p: 4,
              borderRadius: 3,
              width: { xs: "100%", md: "50%" },
              backdropFilter: "blur(10px)",
              backgroundColor: alpha(theme.palette.background.paper, 0.8),
            }}
          >
            {children}
          </Paper>

          {/* Right: Thoughtful Text */}
          <Stack
            spacing={2}
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {subtitle}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default AuthLayout;
