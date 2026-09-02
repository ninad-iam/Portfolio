import type { Metadata } from "next";
import profileDrone from "@/assets/profile-drone.jpg";
import { siteOrigin, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
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
        url: profileDrone.src,
        width: profileDrone.width,
        height: profileDrone.height,
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
    images: [profileDrone.src],
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
