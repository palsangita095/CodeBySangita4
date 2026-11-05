import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Sangita Pal | MERN Stack Trainee & Aspiring Full Stack Developer",
  description:
    "Portfolio of Sangita Pal - MERN Stack Trainee and Aspiring Full Stack Developer. Skilled in TypeScript, React and Next.js.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
