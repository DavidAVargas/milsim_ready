import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import Providers from "@/components/DarkLightMode/providers";
import Header from "@/components/layout/header";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Milsim",
  description: "Gear up, learn the lingo, and survive your first milsim event.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <Providers>
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Header />
            <main>{children}</main>
            <footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
