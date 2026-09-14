import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aditya Bhosale — Software Engineer",
  description: "Portfolio of Aditya Bhosale, a software engineering student building AI systems, developer tooling, and data products.",
  keywords: ["Aditya Bhosale", "software engineer", "Ohio State", "AI systems", "full-stack engineer"],
  openGraph: { title: "Aditya Bhosale — Software Engineer", description: "Building AI systems, developer tools, and thoughtful software.", type: "website" },
  twitter: { card: "summary_large_image", title: "Aditya Bhosale — Software Engineer" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
