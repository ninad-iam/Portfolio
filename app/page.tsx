import Portfolio from "@/components/Portfolio";
import { profile } from "@/lib/portfolio-data";
import { siteUrl } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: "Robotics MS Candidate and UAV Systems Engineer",
    email: profile.email,
    telephone: profile.phone,
    url: siteUrl,
    sameAs: [profile.linkedin, profile.github],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "MIT ADT University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "University of Maryland",
      },
    ],
    knowsAbout: [
      "Robotics",
      "UAV autonomy",
      "Embedded systems",
      "AI/ML",
      "Computer vision",
      "Drone validation",
      "ArduPilot",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Portfolio />
    </>
  );
}
