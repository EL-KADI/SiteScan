import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteScan",
  description:
    "SiteScan is a comprehensive website analysis tool built with Next.js, TypeScript, and Tailwind CSS. It provides real-time website performance analysis using Google PageSpeed Insights API, evaluating four key areas: Performance, SEO, Accessibility, and Best Practices. The platform features a modern responsive design with interactive circular progress indicators, detailed metrics breakdown, expandable analysis cards, and actionable recommendations. Users can export results as JSON or copy to clipboard, with toast notifications for better UX. Includes dedicated About, Contact, and Privacy Policy pages for a complete professional experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
