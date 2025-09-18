"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "../AuthLayout";

export default function SignupPage() {
  return (
    <AuthLayout
      title="Join the Tech Community 🚀"
      subtitle="Sign up and start sharing your knowledge with the world."
    >
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={600}>
          Sign Up
        </Typography>
        <TextField fullWidth label="Name" />
        <TextField fullWidth label="Email" type="email" />
        <TextField fullWidth label="Password" type="password" />
        <Button variant="contained" size="large">
          Sign Up
        </Button>
      </Stack>
    </AuthLayout>
  );
}
