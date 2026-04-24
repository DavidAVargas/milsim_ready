"use client";

import { ThemeProvider, useTheme } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

// Site is dark-only — forcedTheme locks next-themes so no toggle is needed.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" forcedTheme="dark">
      {children}
      <ToasterProvider />
    </ThemeProvider>
  );
}

function ToasterProvider() {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      position="top-right"
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
