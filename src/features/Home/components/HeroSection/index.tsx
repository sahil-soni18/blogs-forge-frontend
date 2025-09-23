"use client";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
  alpha,
} from "@mui/material";
import React, { FC } from "react";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/navigation";

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Hero: FC<{}> = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Box
      sx={{
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        background: `linear-gradient(135deg, ${alpha(
          theme.palette.primary.main,
          0.05
        )} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
        position: "relative",
        overflow: "hidden",
        py: 6,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: alpha(theme.palette.primary.light, 0.15),
          animation: `${float} 8s ease-in-out infinite`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: alpha(theme.palette.secondary.light, 0.15),
          animation: `${float} 10s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      <Container maxWidth="md">
        <Stack
          spacing={3}
          alignItems="center"
          textAlign="center"
          position="relative"
          zIndex={1}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              backgroundClip: "text",
              textFillColor: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            Code. Learn. Share.
          </Typography>

          <Typography
            variant="h6"
            color="text.secondary"
            maxWidth="600px"
          >
            Tech blogs that spark ideas, deepen knowledge, and connect developers worldwide.
          </Typography>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", justifyContent: "center" }}>
            <Button
              variant="contained"
              size="large"
              onClick={() => router.push(`/blogs`)}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundSize: "200% 200%",
                animation: `${gradientShift} 6s ease infinite`,
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                },
                transition: "all 0.3s ease",
              }}
            >
              Start Reading 🚀
            </Button>
            {/* <Button
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 3,
                fontWeight: 600,
                "&:hover": {
                  transform: "translateY(-2px)",
                },
                transition: "all 0.3s ease",
              }}
            >
              Write a Blog ✍️
            </Button> */}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
