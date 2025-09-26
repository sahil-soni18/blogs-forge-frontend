"use client";

import { Formik, Form, FormikValues } from "formik";

interface Props<T extends FormikValues> {
  initialValues: T;
  validationSchema: any;
  onSubmit: (values: T) => Promise<void> | void;
  children: React.ReactNode;
}

export default function FormWrapper<T extends FormikValues>({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: Props<T>) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <Form>{children}</Form>}
    </Formik>
  );
}
