"use client";

import { TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
  name: string;
  label: string;
  type?: string;
}

export default function FormikTextField({
  label,
  type = "text",
  ...props
}: Props) {
  const [field, meta] = useField(props);

  return (
    <TextField
      {...field}
      label={label}
      type={type}
      fullWidth
      margin="normal"
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
}
