import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  BrainCircuit,
  Cpu,
  Rocket,
  Workflow,
  FolderGit2,
  ExternalLink,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Cloud,
  Wrench,
  Layers,
  Database,
  PlugZap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ---- Helper: smooth anchor scrolling ----
const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

// ---- Reusable animation presets ----
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// ---- Data ----
const LINKS = {
  github: "https://github.com/rajo69",
  linkedin: "https://www.linkedin.com/in/rajarshi-nandi/",
  email: "mailto:rajarshin264@gmail.com",
};

const SKILLS = [
  { label: "Python", icon: <BrainCircuit className="h-4 w-4" /> },
  { label: "LangChain", icon: <Workflow className="h-4 w-4" /> },
  { label: "LangGraph", icon: <Layers className="h-4 w-4" /> },
  { label: "RAG", icon: <Database className="h-4 w-4" /> },
  { label: "Pinecone", icon: <Database className="h-4 w-4" /> },
  { label: "HuggingFace", icon: <Sparkles className="h-4 w-4" /> },
  { label: "Tool Calling", icon: <Wrench className="h-4 w-4" /> },
  { label: "MCP", icon: <PlugZap className="h-4 w-4" /> },
  { label: "LLM Evals", icon: <BarChart3 className="h-4 w-4" /> },
  { label: "Fine-Tuning", icon: <ShieldCheck className="h-4 w-4" /> },
  { label: "Streamlit", icon: <Rocket className="h-4 w-4" /> },
  { label: "GCP", icon: <Cloud className="h-4 w-4" /> },
];

const PROJECTS = [
  {
    title: "Job Lens AI",
    blurb:
      "End-to-end LLM app for resume↔JD semantic fit + interview prep. LangChain, Llama 3.1 via Groq, Streamlit on GCP.",
    tags: ["LangChain", "Groq", "Streamlit", "GCP", "RAG"],
    link: "https://github.com/rajo69/job_lens_ai",
  },
  {
    title: "RESNET-18 Robustness",
    blurb:
      "Hybrid adversarial training on CIFAR-10 yielding ~88% accuracy with dramatic robustness gains.",
    tags: ["Deep Learning", "Robustness", "MATLAB"],
    link: "https://github.com/rajo69/Enhancing-Neural-Network-Robustness-using-Hybrid-Adversarial-Training",
  },
  {
    title: "Time-Series + Text Analytics",
    blurb:
      "Forecasting U.S. consumer spend + hotel review NLP with R and Shiny dashboard.",
    tags: ["Time-Series", "NLP", "R", "Shiny"],
    link: "https://github.com/rajo69/Time-Series-Forecasting-Text-Analytics",
  },
  {
    title: "BidBrief",
    blurb:
      "Prototype tendering platform for UK SMEs; streamlines bid workflows and reporting.",
    tags: ["Python", "Product", "Data"],
    link: "https://github.com/rajo69/BidBrief",
  },
];

// ---- Interactive, mouse-reactive dark background ----
const Background = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 20 });
  const sy = useSpring(my, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const glowX = useTransform(sx, (v) => `calc(${v}px - 50vmin)`);
  const glowY = useTransform(sy, (v) => `calc(${v}px - 50vmin)`);

  return (
    <div className="fixed inset-0 -z-10 dark bg-[#0b0f17]">
      {/* mouse-following spotlight */}
      <motion.div
        className="pointer-events-none absolute h-[100vmin] w-[100vmin] rounded-full"
        style={{
          left: glowX,
          top: glowY,
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.18), rgba(14,165,233,0.14), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* parallax gradient layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 10% 10%, rgba(99,102,241,0.12), transparent), radial-gradient(900px 500px at 80% 15%, rgba(236,72,153,0.12), transparent), radial-gradient(900px 500px at 50% 85%, rgba(16,185,129,0.12), transparent)",
        }}
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* subtle starfield */}
      <svg className="absolute inset-0 h-full w-full opacity-30" role="img">
        {Array.from({ length: 120 }).map((_, i) => (
          <circle key={i} cx={(i * 97) % 1920} cy={(i * 71) % 1080} r={(i % 3) + 0.5} fill="white" />
        ))}
      </svg>
    </div>
  );
};

const Nav = () => (
  <div className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0b0f17]/60 backdrop-blur">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <div className="flex items-center gap-2 font-semibold">
        <Cpu className="h-5 w-5 text-fuchsia-400" /> <span className="text-white">Rajarshi Nandi</span>
      </div>
      <div className="hidden gap-1 md:flex">
        {[
          { id: "about", label: "About" },
          { id: "work", label: "Work" },
          { id: "projects", label: "Projects" },
          { id: "contact", label: "Contact" },
        ].map((i) => (
          <Button
            key={i.id}
            variant="ghost"
            className="text-sm text-white/80 hover:text-white"
            onClick={() => scrollToId(i.id)}
          >
            {i.label}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          <Button
            variant="ghost"
            size="icon"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-[#0b0f17] text-white hover:bg-[#0b0f17]/80 focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
          >
            <Github className="h-4 w-4 text-white" />
          </Button>
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          <Button
            variant="ghost"
            size="icon"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-[#0b0f17] text-white hover:bg-[#0b0f17]/80 focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
          >
            <Linkedin className="h-4 w-4 text-white" />
          </Button>
        </a>
        <a href={LINKS.email}>
          <Button className="gap-2 bg-fuchsia-600 hover:bg-fuchsia-500">
            Contact <ArrowRight className="h-4 w-4" />
          </Button>
        </a>
      </div>
    </div>
  </div>
);

// ---- 3D tilt card ----
const Tilt: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useTransform(y, [0, 1], [12, -12]);
  const ry = useTransform(x, [0, 1], [-12, 12]);
  const tX = useSpring(ry, { stiffness: 150, damping: 12 });
  const tY = useSpring(rx, { stiffness: 150, damping: 12 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    x.set(px);
    y.set(py);
  };

  const onLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: tY, rotateY: tX, transformStyle: "preserve-3d" }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const Hero = () => (
  <section className="mx-auto max-w-6xl px-4 pt-16 text-white" id="about">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <motion.div variants={staggerContainer} initial="hidden" animate="show" className="space-y-6">
        <motion.h1 variants={fadeUp} className="text-4xl font-bold leading-tight md:text-5xl">
          Building
          <span className="bg-gradient-to-r from-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
            {" "}production-ready LLM apps
          </span>
        </motion.h1>
        <motion.p variants={fadeUp} className="text-white/70 text-lg">
          AI Engineer focused on rapid prototyping, RAG systems, tool/function calling, MCP servers, fine-tuning & evals — deployed on GCP with clean, reproducible code.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
          <Badge className="bg-fuchsia-600/90 text-white">14% cost reduction</Badge>
          <Badge className="bg-emerald-600/90 text-white">6% revenue lift</Badge>
          <Badge className="bg-amber-600/90 text-white">9% churn reduction</Badge>
        </motion.div>
        <motion.div variants={fadeUp} className="flex gap-3 pt-2">
          <a href={LINKS.github} target="_blank" rel="noreferrer">
            <Button className="gap-2 bg-sky-600 hover:bg-sky-500">
              <Github className="h-4 w-4" /> View GitHub
            </Button>
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
            <Button variant="secondary" className="gap-2 bg-white/10 text-white hover:bg-white/20">
              <Linkedin className="h-4 w-4" /> Connect
            </Button>
          </a>
        </motion.div>
      </motion.div>

      <Tilt>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-fuchsia-500/40 to-sky-500/40 blur-2xl" />
          <Card className="relative overflow-hidden rounded-3xl border-white/10 bg-white/5 backdrop-blur">
            <CardContent className="p-0">
              {/* Decorative hero graphic */}
              <div className="aspect-[4/3] w-full">
                <svg viewBox="0 0 600 450" className="h-full w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#06B6D4" />
                    </linearGradient>
                  </defs>
                  <g fill="none" stroke="url(#g)" strokeWidth="2">
                    {Array.from({ length: 26 }).map((_, i) => (
                      <path
                        key={i}
                        d={`M10 ${20 + i * 16} C 160 ${40 + i * 8}, 320 ${-10 + i * 24}, 580 ${30 + i * 12}`}
                        opacity={0.25 + ((i % 5) as number) * 0.12}
                      />
                    ))}
                  </g>
                </svg>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Tilt>
    </div>
  </section>
);

const SkillPills = () => (
  <section className="mx-auto max-w-6xl px-4 py-12 text-white" id="work">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid gap-3 sm:grid-cols-2 md:grid-cols-3"
    >
      {SKILLS.map((s) => (
        <motion.div key={s.label} variants={fadeUp} whileHover={{ y: -3 }}>
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-sm backdrop-blur transition hover:shadow-md">
            {s.icon}
            <span className="text-sm font-medium">{s.label}</span>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

const Projects = () => (
  <section className="mx-auto max-w-6xl px-4 py-16 text-white" id="projects">
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={staggerContainer}>
      <motion.h2 variants={fadeUp} className="mb-6 text-3xl font-bold">
        Featured Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <motion.div key={p.title} variants={fadeUp}>
            <Tilt>
              <Card className="group relative overflow-hidden border-white/10 bg-white/5 backdrop-blur">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    {/* FIX: closed string + self-closed icon tag */}
                    <FolderGit2 className="h-5 w-5 text-sky-300" /> {p.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-white/70">{p.blurb}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="secondary" className="bg-white/10 text-white">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={p.link} target="_blank" rel="noreferrer">
                      {/* Match Open Repo to app bg + focus ring */}
                      <Button
                        variant="ghost"
                        className="gap-2 rounded-full border border-white/10 bg-[#0b0f17] px-5 text-white hover:bg-[#0b0f17]/80 focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
                      >
                        <Github className="h-4 w-4 text-white" /> Open Repo
                        <ExternalLink className="h-4 w-4 text-white" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-fuchsia-500 to-sky-500 opacity-0 transition group-hover:opacity-100" />
              </Card>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

const Contact = () => (
  <section className="mx-auto max-w-6xl px-4 pb-24 text-white" id="contact">
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
    >
      <motion.h2 variants={fadeUp} className="text-3xl font-bold">
        Let’s build something impactful
      </motion.h2>
      <motion.p variants={fadeUp} className="mt-2 max-w-2xl text-white/70">
        Open to AI Engineering roles and collaborations in the UK/EU. If you’re exploring AI apps that move business metrics, I’d love to help.
      </motion.p>
      <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
        <a href={LINKS.email}>
          <Button className="gap-2 bg-fuchsia-600 hover:bg-fuchsia-500">
            <Mail className="h-4 w-4" /> Email Me
          </Button>
        </a>
        <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
          <Button
            variant="ghost"
            className="gap-2 rounded-full border border-white/10 bg-[#0b0f17] px-5 text-white hover:bg-[#0b0f17]/80 focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
          >
            <Linkedin className="h-4 w-4 text-white" /> LinkedIn
          </Button>
        </a>
        <a href={LINKS.github} target="_blank" rel="noreferrer">
          <Button
            variant="ghost"
            className="gap-2 rounded-full border border-white/10 bg-[#0b0f17] px-5 text-white hover:bg-[#0b0f17]/80 focus-visible:ring-2 focus-visible:ring-fuchsia-500/50"
          >
            <Github className="h-4 w-4 text-white" /> GitHub
          </Button>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

// ---- Development smoke tests (non-blocking) ----
function runSmokeTests() {
  try {
    // Basic checks on PROJECTS shape and unique titles
    const titles = new Set<string>();
    for (const p of PROJECTS) {
      if (typeof p.title !== "string" || typeof p.link !== "string") {
        console.error("[TEST] Project item has invalid shape:", p);
        return;
      }
      if (titles.has(p.title)) {
        console.warn("[TEST] Duplicate project title:", p.title);
      }
      titles.add(p.title);
    }
    console.log("[TEST] Smoke tests passed: PROJECTS array looks OK.");
  } catch (e) {
    console.error("[TEST] Smoke tests failed:", e);
  }
}

export default function Portfolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") runSmokeTests();
  }, []);

  return (
    <div className="dark min-h-screen bg-[#0b0f17] text-white">
      <Background />
      <Nav />
      <main className="space-y-6">
        <Hero />
        <SkillPills />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/5 py-8 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Rajarshi Nandi • Built with React, Tailwind, shadcn/ui & Framer Motion
      </footer>
    </div>
  );
}
