import type { Metadata } from "next";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";
import Navbar from "@/components/Navbar";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Five Safes TES Documentation",
  description: "Five Safes TES Documentation",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="antialiased"
      dir="ltr" // Required to be set
      suppressHydrationWarning // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
    >
      <Head></Head>
      <body>
        <Layout
          navbar={<Navbar />}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/SwanseaUniversityMedical/5S-TES-Docs/tree/main"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
