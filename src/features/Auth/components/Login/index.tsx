"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "../AuthLayout";

export default function LoginPage() {
  return (
    <AuthLayout
      title="Welcome Back, Coder 👨‍💻"
      subtitle="Log in to continue your journey through tech insights."
    >
      <Stack spacing={3}>
        <Typography variant="h5" fontWeight={600}>
          Login
        </Typography>
        <TextField fullWidth label="Email" type="email" />
        <TextField fullWidth label="Password" type="password" />
        <Button variant="contained" size="large">
          Login
        </Button>
      </Stack>
    </AuthLayout>
  );
}
