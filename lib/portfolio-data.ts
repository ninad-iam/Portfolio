import {
  Bot,
  BrainCircuit,
  Cloud,
  Cpu,
  Database,
  FileText,
  Github,
  Layout,
  Linkedin,
  Mail,
  MapPin,
  Plane,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type TimelineItem = {
  title: string;
  organization: string;
  location?: string;
  period: string;
  subtitle?: string;
  details: string[];
  technologies?: string[];
};

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

export type Project = {
  title: string;
  period: string;
  icon: LucideIcon;
  stack: string[];
  githubUrl: string;
  impact: string;
  challenge: string;
  details: string[];
};

export const profile = {
  name: "Ninad Deshmukh",
  title: "Robotics MS Candidate | UAV Systems Engineer | AI/ML Builder",
  location: "College Park, Maryland",
  email: "ninad@umd.edu",
  phone: "+1 227 205 7171",
  linkedin: "https://www.linkedin.com/in/ninad26",
  github: "https://github.com/ninad-iam",
  resume: "/Ninad-Deshmukh-Resume.pdf",
  summary:
    "Robotics graduate student and UAV systems engineer focused on UAV autonomy, robot perception, embedded systems, computer vision, system validation, and field-tested product reliability. I build hardware-software systems that can leave the lab, survive field testing, and improve real-world autonomous operations.",
  value:
    "I connect robotics, embedded systems, AI, and product validation to turn autonomous UAV platforms into reliable field-ready systems.",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "2+", label: "Years UAV product validation" },
  { value: "15%", label: "System downtime reduction" },
  { value: "250g", label: "Autonomous drone design target" },
  { value: "MS", label: "Robotics at UMD" },
];

export const education: TimelineItem[] = [
  {
    title: "Master of Science in Robotics",
    organization: "University of Maryland",
    location: "College Park, MD",
    period: "Jan 2026 - Dec 2027 expected",
    subtitle: "Robot modeling, control of robotic systems, and human-robot interaction",
    details: [
      "Coursework includes robot modeling, control of robotic systems, and human-robot interaction.",
      "Focused on autonomous systems, robot perception, navigation, and reliable robotic behavior.",
    ],
    technologies: ["Robot Modeling", "Control Systems", "HRI", "Autonomy"],
  },
  {
    title: "B.E. Electronics and Computer Engineering",
    organization: "MIT ADT University",
    location: "Pune, India",
    period: "Aug 2019 - Jul 2023",
    subtitle: "Embedded electronics, IoT, machine learning, and computer networks",
    details: [
      "Built a multidisciplinary foundation spanning electronics circuit analysis, embedded systems, IoT, machine learning, and computer networks.",
      "Applied hardware, software, and systems thinking through UAV and intelligent embedded systems projects.",
    ],
    technologies: ["Embedded Systems", "IoT", "Machine Learning", "Computer Networks"],
  },
];

export const certifications: TimelineItem[] = [
  {
    title: "Robotics Operating System-2 (ROS2)",
    organization: "Professional Certification",
    period: "Latest resume",
    details: [
      "Strengthened robotics middleware fundamentals for distributed robotic systems, autonomy stacks, and sensor-driven workflows.",
    ],
    technologies: ["ROS2", "Robotics Middleware", "Autonomous Systems"],
  },
  {
    title: "Android Development",
    organization: "Professional Certification",
    period: "Latest resume",
    details: [
      "Expanded mobile software capability for connected robotics, field operations, and operator-facing workflows.",
    ],
    technologies: ["Android", "Mobile Interfaces", "Operator Workflows"],
  },
];

export const experience: TimelineItem[] = [
  {
    title: "UAV Systems Engineer",
    organization: "FlytBase",
    location: "Pune, India",
    period: "Aug 2023 - Jan 2025",
    subtitle: "UAV systems engineering, flight testing, hardware integration, and product validation",
    details: [
      "Planned and executed flight tests for software releases and hardware integrations across DJI Dock 1/2, Matrice 30, and M350 platforms.",
      "Validated autonomous navigation, obstacle avoidance, real-time telemetry, precision landing, failsafe recovery, payload control, and geofence compliance.",
      "Reduced system downtime by 15% by leading troubleshooting efforts for malfunctioning UAV systems and investigating reported in-field incidents.",
      "Performed mechanical and electrical integration of parachute recovery systems, payloads, and sensor modules through bench testing and field trials.",
      "Defined and validated customer workflows for fleet management, payload control, BVLOS operations, and third-party docking integrations including Hextronics, Heisha, and IDI-Ployer.",
      "Improved ground control software UI/UX through field testing and real-world troubleshooting; authored SOPs for remote mission execution.",
      "Collaborated with Product Management, Customer Success, and Engineering to convert customer feedback into shipped bug fixes and third-party payload integrations.",
    ],
    technologies: ["DJI Dock 1/2", "Matrice 30", "M350", "BVLOS", "Telemetry", "Payload Control"],
  },
  {
    title: "UAV Systems Engineer Intern",
    organization: "FlytBase",
    location: "Pune, India",
    period: "Feb 2023 - Jul 2023",
    subtitle: "UAV validation, testing, and product engineering",
    details: [
      "Assisted in flight planning, hazard analysis, and software validation testing for autonomous UAV operations.",
      "Collaborated with Product Management, Customer Success, and Web teams to incorporate customer feedback into product development.",
      "Researched industry trends and competitor products to recommend feature and workflow improvements.",
    ],
    technologies: ["Flight Testing", "Hazard Analysis", "Product Validation", "Debugging"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    icon: Terminal,
    skills: ["Python", "C", "C++", "MATLAB"],
  },
  {
    title: "AI / ML",
    icon: BrainCircuit,
    skills: ["OpenCV", "TensorFlow", "Image Processing", "Object Detection", "Deep Learning", "Neural Networks", "Vision-Based Navigation"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Ground Control Software UI/UX", "Web Team Collaboration", "Operator Workflows", "Android Development"],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["REST APIs", "FastAPI", "Technical Documentation", "Remote Mission Workflows"],
  },
  {
    title: "Databases",
    icon: Workflow,
    skills: ["Data Visualization", "Telemetry Data", "Benchmarking Data", "System Validation Records"],
  },
  {
    title: "Cloud / DevOps",
    icon: Cloud,
    skills: ["Linux", "Git", "Docker", "BVLOS Workflows", "Dock Integration"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["EasyEDA", "Autodesk Fusion", "Mission Planner", "Pixhawk (ArduPilot)", "DJI Enterprise Ecosystem"],
  },
  {
    title: "Robotics",
    icon: Bot,
    skills: ["UAV Autonomy", "Robot Perception", "Motion Planning", "Sensor Fusion", "Navigation", "Obstacle Avoidance", "Localization", "Mission Planning", "System Integration"],
  },
  {
    title: "Embedded",
    icon: Cpu,
    skills: ["Arduino", "ESP32", "Raspberry Pi", "I2C", "UART", "CAN", "PCB Design", "Circuit Design", "Hardware Debugging"],
  },
  {
    title: "Drone Platforms",
    icon: RadioTower,
    skills: ["Flight Testing", "Telemetry", "Precision Landing", "Geofencing", "BVLOS", "Payload Integration", "Dock Integration"],
  },
  {
    title: "Validation",
    icon: ShieldCheck,
    skills: ["System Validation", "Benchmarking", "Root Cause Analysis", "Flight Tests", "Field Experiments", "SOPs"],
  },
];

export const projects: Project[] = [
  {
    title: "Sub-250g Autonomous Drone",
    period: "Dec 2023 - Present",
    icon: Plane,
    stack: ["ArduPilot", "Pixhawk", "JeVois Camera", "Python", "Embedded Systems"],
    githubUrl: "#sub-250g-autonomous-drone-github",
    impact:
      "A lightweight autonomous UAV platform designed for onboard vision, mission execution, and collaborative reconnaissance while staying under the 250g constraint.",
    challenge:
      "Balancing payload, processing, autonomy, flight stability, and regulatory weight constraints in one compact system.",
    details: [
      "Integrated Pixhawk, JeVois camera, IR communication modules, and custom electronics while performing system validation.",
      "Optimized ArduPilot parameters for autonomous flight control and mission reliability.",
      "Designed a real-time communication architecture for collaborative reconnaissance missions.",
    ],
  },
  {
    title: "Autonomous Unmanned Aerial Vehicle",
    period: "Jun 2022 - May 2023",
    icon: RadioTower,
    stack: ["Pixhawk", "Embedded Systems", "Wireless Communication", "Telemetry"],
    githubUrl: "#autonomous-uav-github",
    impact:
      "A multi-purpose autonomous UAV supporting interchangeable payloads for mapping, inspection, wildlife monitoring, and environmental data collection.",
    challenge:
      "Creating an adaptable airframe and electronics stack that could support different payload profiles without compromising reliability.",
    details: [
      "Performed hardware integration, assembly, Pixhawk configuration, and flight-controller tuning for reliable operation.",
      "Implemented telemetry and payload data transmission for remote monitoring under varying environmental conditions.",
      "Validated payload support for mapping, inspection, wildlife monitoring, and environmental data collection.",
    ],
  },
  {
    title: "AI-Powered Smart Mirror",
    period: "Jan 2022 - May 2022",
    icon: Sparkles,
    stack: ["Python", "IoT", "Embedded Electronics", "AI", "Voice Recognition"],
    githubUrl: "#ai-powered-smart-mirror-github",
    impact:
      "An interactive intelligent mirror combining voice recognition, IoT connectivity, cloud services, and embedded electronics for personalized information display.",
    challenge:
      "Merging software, sensing, cloud integration, and continuous electronics operation into a single reliable consumer-style prototype.",
    details: [
      "Developed an AI-enabled smart mirror integrating voice recognition, IoT connectivity, weather, reminders, and news services.",
      "Designed hardware architecture including circuit design, power management, and embedded system integration.",
      "Combined sensing, connectivity, and AI-driven functionality into a unified consumer-focused intelligent system.",
    ],
  },
];

export const contactLinks = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
  { label: "Resume", href: profile.resume, icon: FileText },
  { label: "College Park, MD", href: "#contact", icon: MapPin },
];
