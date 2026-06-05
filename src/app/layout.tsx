import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sravan Shankar P | Software Developer",
  description: "Portfolio of Sravan Shankar P, a Software Developer specializing in Python, Django, System Design, and Cyber Security. Located in Kasargod, Kerala, India.",
  keywords: "Software Developer, Python Developer, Django Developer, Sravan Shankar P, Kerala Developer, Cyber Security, Cloud Computing, Full Stack Developer",
  authors: [{ name: "Sravan Shankar P" }],
  openGraph: {
    title: "Sravan Shankar P | Software Developer Portfolio",
    description: "Software Developer specializing in Python, Django, System Design, and Cyber Security.",
    url: "https://sravanshankar.github.io",
    siteName: "Sravan Shankar P Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Sravan Shankar P Profile Image",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jakarta.variable} ${syne.variable} ${jetbrains.variable} font-sans bg-cyber-bg text-cyber-text antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
