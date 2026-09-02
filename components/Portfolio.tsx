"use client";

import Image from "next/image";
import profileDrone from "@/assets/profile-drone.jpg";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarDays,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useState } from "react";
import {
  certifications,
  contactLinks,
  education,
  experience,
  metrics,
  navigation,
  profile,
  projects,
  skillGroups,
  type Project,
  type SkillGroup,
  type TimelineItem,
} from "@/lib/portfolio-data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const revealProps: MotionProps = {
    initial: reduceMotion ? false : "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: fadeUp,
    transition: { duration: reduceMotion ? 0 : 0.72, ease: "easeOut" },
  };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero reduceMotion={Boolean(reduceMotion)} />
      <About revealProps={revealProps} />
      <TimelineSection
        id="education"
        eyebrow="Education"
        title="Robotics foundation with field-ready engineering range."
        description="A graduate robotics path layered on electronics, embedded systems, IoT, machine learning, and computer networks."
        items={education}
        revealProps={revealProps}
      />
      <TimelineSection
        id="certifications"
        eyebrow="Certifications"
        title="Continuous learning across robotics middleware and operator-facing software."
        description="The same visual timeline language keeps credentials easy to scan between academic and professional experience."
        items={certifications}
        revealProps={revealProps}
      />
      <TimelineSection
        id="experience"
        eyebrow="Experience"
        title="Autonomous UAV validation in real product environments."
        description="Hands-on work across field testing, release validation, hardware integration, customer workflows, and enterprise drone operations."
        items={experience}
        revealProps={revealProps}
      />
      <Skills revealProps={revealProps} />
      <Projects revealProps={revealProps} />
      <Contact revealProps={revealProps} />
      <Footer />
    </main>
  );
}

function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#top" className="focus-ring flex items-center gap-3 rounded-sm" aria-label="Ninad Deshmukh home">
          <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-cyan/35 bg-cyan/10 text-sm font-semibold text-cyan">
            ND
          </span>
          <span className="hidden text-sm font-medium tracking-[0.18em] text-white/90 sm:block">
            NINAD DESHMUKH
          </span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm px-3 py-2 text-sm font-medium text-white/68 transition hover:bg-white/8 hover:text-white xl:px-4"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <IconLink href={profile.github} label="GitHub" icon={Github} />
          <IconLink href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
          <a
            href={profile.resume}
            className="focus-ring inline-flex h-10 items-center gap-2 rounded-sm bg-white px-4 text-sm font-semibold text-ink transition hover:bg-cyan"
          >
            <Download size={16} />
            Resume
          </a>
        </div>
        <button
          type="button"
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/12 bg-white/8 text-white lg:hidden"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-ink/96 px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-md gap-2">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="focus-ring rounded-sm px-4 py-3 text-base font-medium text-white/80 transition hover:bg-white/8 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={profile.resume}
              className="focus-ring mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-white px-4 py-3 text-sm font-semibold text-ink"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function Hero({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <section id="top" className="relative min-h-[calc(100svh+48px)] overflow-hidden">
      <Image
        src={profileDrone}
        alt="Ninad Deshmukh on a rooftop with drones in flight"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_50%] sm:object-[66%_48%] lg:object-[64%_44%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.98)_0%,rgba(5,5,5,0.84)_36%,rgba(5,5,5,0.36)_64%,rgba(5,5,5,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.34)_0%,rgba(5,5,5,0.12)_48%,#050505_100%)]" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[7%] top-[18%] h-52 w-52 rounded-full border border-cyan/20"
        animate={reduceMotion ? undefined : { scale: [1, 1.12, 1], opacity: [0.22, 0.48, 0.22] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[10%] top-[22%] h-32 w-32 rounded-full border border-electric/20"
        animate={reduceMotion ? undefined : { y: [0, -18, 0], opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="section-shell relative z-10 flex min-h-screen items-center pb-20 pt-32">
        <motion.div
          className="max-w-4xl"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-sm border border-cyan/25 bg-cyan/10 px-3 py-2 text-sm font-medium text-cyan">
            <BadgeCheck size={16} />
            Robotics, UAV autonomy, embedded intelligence
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/76 sm:text-2xl sm:leading-9"
          >
            {profile.value}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            <PrimaryLink href={profile.resume} icon={Download} label="Resume" />
            <SecondaryLink href={`mailto:${profile.email}`} icon={Mail} label="Contact" />
            <SecondaryLink href={profile.github} icon={Github} label="GitHub" />
            <SecondaryLink href={profile.linkedin} icon={Linkedin} label="LinkedIn" />
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="border-l border-white/14 pl-4">
                <div className="text-2xl font-semibold text-white">{metric.value}</div>
                <div className="mt-1 text-xs uppercase leading-5 tracking-[0.18em] text-white/54">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function About({ revealProps }: { revealProps: MotionProps }) {
  return (
    <section id="about" className="relative border-y border-white/8 bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0 fine-grid opacity-40" aria-hidden="true" />
      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <motion.div {...revealProps}>
          <SectionHeader
            eyebrow="About"
            title="A systems engineer shaped by drones that actually have to fly."
            description="My work sits where UAV autonomy, embedded electronics, computer vision, product constraints, and field validation meet."
          />
        </motion.div>
        <motion.div
          {...revealProps}
          className="grid gap-4 sm:grid-cols-2"
          variants={stagger}
        >
          <InfoPanel
            title="Professional summary"
            text={profile.summary}
          />
          <InfoPanel
            title="Technical interests"
            text="Autonomous UAVs, robot perception, motion planning, sensor fusion, vision-based navigation, embedded AI, and resilient field robotics."
          />
          <InfoPanel
            title="Career direction"
            text="I am targeting software engineering, AI/ML, robotics, and autonomy roles where product quality and technical depth both matter."
          />
          <InfoPanel
            title="Personal story"
            text="From electronics benches to rooftop flight tests, I enjoy building the connective tissue between hardware, software, and real-world behavior."
          />
        </motion.div>
      </div>
    </section>
  );
}

function TimelineSection({
  id,
  eyebrow,
  title,
  description,
  items,
  revealProps,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: TimelineItem[];
  revealProps: MotionProps;
}) {
  return (
    <section id={id} className="relative bg-ink py-24 sm:py-32">
      <div className="section-shell">
        <motion.div {...revealProps}>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </motion.div>
        <div className="mt-14 grid gap-5">
          {items.map((item, index) => (
            <TimelineCard key={`${item.title}-${item.period}`} item={item} index={index} revealProps={revealProps} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills({ revealProps }: { revealProps: MotionProps }) {
  return (
    <section id="skills" className="relative border-y border-white/8 bg-charcoal py-24 sm:py-32">
      <div className="section-shell">
        <motion.div {...revealProps}>
          <SectionHeader
            eyebrow="Skills"
            title="A practical stack for autonomous systems."
            description="Updated from the latest resume and organized across programming languages, AI/ML, frontend, backend, databases, cloud/devops, and engineering tools."
          />
        </motion.div>
        <motion.div
          className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
        >
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Projects({ revealProps }: { revealProps: MotionProps }) {
  return (
    <section id="projects" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent" />
      <div className="section-shell">
        <motion.div {...revealProps}>
          <SectionHeader
            eyebrow="Featured projects"
            title="Project work presented like engineered products."
            description="The strongest signal: autonomous UAVs, embedded intelligence, perception, telemetry, and practical system integration."
          />
        </motion.div>
        <div className="mt-14 grid gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} revealProps={revealProps} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ revealProps }: { revealProps: MotionProps }) {
  return (
    <section id="contact" className="relative bg-charcoal py-24 sm:py-32">
      <div className="section-shell">
        <motion.div {...revealProps} className="mx-auto max-w-4xl text-center [&>div]:mx-auto">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s talk robotics, AI, software, or autonomous systems."
            description="Available for software engineering, AI/ML, robotics, autonomy, and graduate internship opportunities."
          />
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-2">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="focus-ring group inline-flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-left text-white/78 transition hover:border-cyan/45 hover:bg-cyan/10 hover:text-white"
              >
                <link.icon size={18} className="shrink-0 text-cyan" />
                <span>{link.label}</span>
              </a>
            ))}
            <ContactFact icon={Phone} label={profile.phone} />
            <ContactFact icon={MapPin} label={profile.location} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-ink py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-white/54 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ninad Deshmukh. Robotics, UAV systems, and AI engineering.</p>
        <div className="flex items-center gap-2">
          <IconLink href={profile.github} label="GitHub" icon={Github} />
          <IconLink href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
          <IconLink href={`mailto:${profile.email}`} label="Email" icon={Mail} />
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-pretty text-base leading-8 text-white/62 sm:text-lg">{description}</p>
    </div>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <motion.article variants={fadeUp} className="glass-line rounded-sm p-5 transition hover:border-cyan/35 hover:bg-white/8">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/62">{text}</p>
    </motion.article>
  );
}

function TimelineCard({
  item,
  index,
  revealProps,
}: {
  item: TimelineItem;
  index: number;
  revealProps: MotionProps;
}) {
  return (
    <motion.article
      {...revealProps}
      className="group grid gap-5 rounded-sm border border-white/10 bg-white/[0.045] p-5 shadow-line transition hover:border-cyan/40 hover:bg-white/[0.07] sm:grid-cols-[148px_1fr] sm:p-6"
    >
      <div className="flex items-start gap-3 sm:block">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-cyan/35 bg-cyan/10 text-cyan">
          <CalendarDays size={19} />
        </div>
        <div className="sm:mt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/44">0{index + 1}</p>
          <p className="mt-1 text-sm leading-6 text-cyan">{item.period}</p>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-2xl font-semibold leading-tight text-white">{item.title}</h3>
            <p className="mt-2 text-base text-white/72">
              {item.organization}
              {item.location ? <span className="text-white/38"> · {item.location}</span> : null}
            </p>
          </div>
        </div>
        {item.subtitle ? <p className="mt-4 text-sm leading-7 text-white/56">{item.subtitle}</p> : null}
        <ul className="mt-5 grid gap-3">
          {item.details.map((detail) => (
            <li key={detail} className="flex gap-3 text-sm leading-7 text-white/68">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
        {item.technologies ? <TagList tags={item.technologies} /> : null}
      </div>
    </motion.article>
  );
}

function SkillCard({ group }: { group: SkillGroup }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group rounded-sm border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-cyan/45 hover:bg-cyan/10"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-white/8 text-cyan ring-1 ring-white/10">
          <group.icon size={20} />
        </div>
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white">{group.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span key={skill} className="rounded-sm border border-white/10 bg-black/20 px-2.5 py-1.5 text-xs text-white/64">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function ProjectCard({
  project,
  index,
  revealProps,
}: {
  project: Project;
  index: number;
  revealProps: MotionProps;
}) {
  return (
    <motion.article
      {...revealProps}
      className="relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan/45 sm:p-7 lg:p-8"
    >
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/2 bg-radial-grid opacity-60" />
      <div className="relative grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-cyan/35 bg-cyan/10 text-cyan">
              <project.icon size={22} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/42">Project 0{index + 1}</p>
              <p className="mt-1 text-sm text-cyan">{project.period}</p>
            </div>
          </div>
          <h3 className="mt-6 text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 text-base leading-8 text-white/68">{project.impact}</p>
          <TagList tags={project.stack} />
        </div>
        <div className="grid gap-5">
          <div className="rounded-sm border border-white/10 bg-black/22 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan">Challenge solved</p>
            <p className="mt-3 text-sm leading-7 text-white/66">{project.challenge}</p>
          </div>
          <ul className="grid gap-3">
            {project.details.map((detail) => (
              <li key={detail} className="flex gap-3 text-sm leading-7 text-white/68">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
          <a
            href={project.githubUrl}
            className="focus-ring group inline-flex w-fit items-center gap-2 rounded-sm border border-cyan/40 bg-cyan/10 px-4 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan hover:text-ink"
          >
            <Github size={17} />
            Project GitHub
            <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function TagList({ tags }: { tags: string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-sm border border-cyan/20 bg-cyan/10 px-3 py-1.5 text-xs font-medium text-cyan">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ContactFact({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 rounded-sm border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/68">
      <Icon size={18} className="text-cyan" />
      <span>{label}</span>
    </div>
  );
}

function IconLink({ href, label, icon: Icon }: { href: string; label: string; icon: LucideIcon }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/6 text-white/72 transition hover:border-cyan/45 hover:bg-cyan/10 hover:text-cyan"
    >
      <Icon size={18} />
    </a>
  );
}

function PrimaryLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-white px-5 text-sm font-semibold text-ink transition hover:bg-cyan"
    >
      <Icon size={18} />
      {label}
    </a>
  );
}

function SecondaryLink({ href, icon: Icon, label }: { href: string; icon: LucideIcon; label: string }) {
  return (
    <a
      href={href}
      className="focus-ring inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-white/14 bg-white/8 px-5 text-sm font-semibold text-white transition hover:border-cyan/45 hover:bg-cyan/10 hover:text-cyan"
    >
      <Icon size={18} />
      {label}
    </a>
  );
}

type MotionProps = {
  initial: false | "hidden";
  whileInView: "visible";
  viewport: { once: boolean; margin: string };
  variants: Variants;
  transition: { duration: number; ease: "easeOut" };
};
