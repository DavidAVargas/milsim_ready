import type { Metadata } from "next";
import { inter } from "@/utils/fonts";
import Providers from "@/components/DarkLightMode/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import PdfFab from "@/components/pdf/pdf-fab";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Milsim Ready",
  description: "Gear up, learn the lingo, and survive your first milsim event.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-tactical focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-bold focus:tracking-widest focus:uppercase focus:text-tactical-foreground"
        >
          Skip to main content
        </a>
        <Providers>
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Header />
            <main id="main-content" tabIndex={-1} className="flex flex-col outline-none">
              {children}
            </main>
            <Footer />
            <PdfFab />
          </div>
        </Providers>
      </body>
    </html>
  );
}
