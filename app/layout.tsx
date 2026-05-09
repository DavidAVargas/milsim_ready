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
        <Providers>
          <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Header />
            <main className="flex flex-col">{children}</main>
            <Footer />
            <PdfFab />
          </div>
        </Providers>
      </body>
    </html>
  );
}
