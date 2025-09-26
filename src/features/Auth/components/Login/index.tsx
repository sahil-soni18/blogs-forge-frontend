"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "../AuthLayout";
import { useLogin } from "../../hooks/useLogin";
import * as Yup from "yup";
import FormWrapper from "@/components/Formik/FormWrapper";

export default function LoginPage() {
  const LoginMutation = useLogin();

  const initialValues = {
    email: "",
    password: "",
  };

  const LoginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("login Data: ", values);
    try {
      await LoginMutation.mutateAsync(values);
    } catch (error) {
      console.log(`Error: ${error}, ${JSON.stringify(error)}`);
    }
  };
  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
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
          <Button variant="contained" size="large" type="submit">
            Login
          </Button>
        </Stack>
      </AuthLayout>
    </FormWrapper>
  );
}
