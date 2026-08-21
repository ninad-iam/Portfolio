import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ninad-deshmukh.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ninad Deshmukh | Robotics & UAV Systems Engineer",
    template: "%s | Ninad Deshmukh",
  },
  description:
    "Portfolio of Ninad Deshmukh, Robotics MS candidate and UAV systems engineer specializing in UAV autonomy, robot perception, embedded systems, computer vision, field validation, and DJI enterprise drone workflows.",
  keywords: [
    "Ninad Deshmukh",
    "Robotics",
    "UAV Systems Engineer",
    "Autonomous Drones",
    "AI ML",
    "Embedded Systems",
    "University of Maryland",
    "FlytBase",
  ],
  authors: [{ name: "Ninad Deshmukh", url: siteUrl }],
  creator: "Ninad Deshmukh",
  openGraph: {
    title: "Ninad Deshmukh | Robotics & UAV Systems Engineer",
    description:
      "Robotics, UAV autonomy, robot perception, embedded systems, computer vision, and field-tested product validation.",
    url: siteUrl,
    siteName: "Ninad Deshmukh Portfolio",
    images: [
      {
        url: "/profile-drone.jpg",
        width: 1200,
        height: 1600,
        alt: "Ninad Deshmukh with autonomous drones",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ninad Deshmukh | Robotics & UAV Systems Engineer",
    description:
      "Autonomous UAV systems, embedded robotics, AI/ML, computer vision, and field-tested engineering.",
    images: ["/profile-drone.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
