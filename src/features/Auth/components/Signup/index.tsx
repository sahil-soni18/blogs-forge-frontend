"use client";

import { Button, Stack, TextField, Typography } from "@mui/material";
import AuthLayout from "../AuthLayout";
import * as Yup from "yup";
import FormWrapper from "@/components/Formik/FormWrapper";
import { useSignup } from "../../hooks/useSignup";
import FormikTextField from "@/components/Formik/components/FormikTextField";

export default function SignupPage() {
  const SignupMutate = useSignup();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const SignupSchema = Yup.object({
    name: Yup.string().required("Name is Required..."),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    console.log("Signup Data: ", values);
    try {
      await SignupMutate.mutateAsync(values);
    } catch (error) {
      console.log(`Error: ${error}, ${JSON.stringify(error)}`);
    }
  };

  return (
    <FormWrapper
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      <AuthLayout
        title="Join the Tech Community 🚀"
        subtitle="Sign up and start sharing your knowledge with the world."
      >
        <Stack spacing={3}>
          <Typography variant="h5" fontWeight={600}>
            Sign Up
          </Typography>
          <FormikTextField name="name" label="Name" />
          <FormikTextField name="email" label="Email" type="email" />
          <FormikTextField name="password" label="Password" type="password" />
          <Button variant="contained" size="large" type="submit">
            Sign Up
          </Button>
        </Stack>
      </AuthLayout>
    </FormWrapper>
  );
}
