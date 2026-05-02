import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import Providers from "@/components/DarkLightMode/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MilsimReady",
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
            <main className="flex flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
