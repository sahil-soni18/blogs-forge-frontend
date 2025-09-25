"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeRegistry from "../theme/ThemeRegistry";
import Layout from "../layout/Layout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Disable automatic refetching during SSR
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

export default function ClientProviders({ children }: { children: ReactNode }) {
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
