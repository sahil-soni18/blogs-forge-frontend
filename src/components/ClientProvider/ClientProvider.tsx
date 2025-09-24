"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeRegistry from "../theme/ThemeRegistry";
import Layout from "../layout/Layout";

export default function ClientProviders({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <ThemeProvider>
      <ThemeRegistry>
        <QueryClientProvider client={queryClient}>
          <Layout>{children}</Layout>
        </QueryClientProvider>
      </ThemeRegistry>
    </ThemeProvider>
  );
}
