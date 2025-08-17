"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, GitBranch, Server, Palette, Cpu, Cloud, Database, Wrench } from "lucide-react";

/**
 * Tech Stack Showcase
 * - Dark + violet theme
 * - Three containers: Frontend, Backend, Dev Tools (you can duplicate to add more)
 * - Subtle 3D hover/tilt on desktop, tap animation on mobile
 * - Clean, responsive grid with badges
 */

const tech = {
  frontend: [
    "React", "Next.js", "React Native", "TypeScript", "JavaScript",
    "Tailwind CSS", "shadcn/ui", "Aceternity UI", "Redux Toolkit",
    "TanStack Query", "Expo", "Zod", 
  ],
  backend: [
    "Node.js", "Express", "Prisma", "Convex", "Firebase",
    "Appwrite", "REST", 
  ],
  databases: [
    "PostgreSQL", "MongoDB"
  ],
  devtools: [
    "Git", "GitHub", "Docker", "ESLint",
    "Prettier", "Vercel",  "Render", "Postman"
  ],
};

// 3D Tilt Card wrapper
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  function handleMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    x.set(px);
    y.set(py);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      style={{ perspective: 1000 }}
      className="group"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="transform-gpu"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const Section = ({
  title,
  icon,
  items,
  accent = "from-violet-500/20 to-fuchsia-500/10",
}: {
  title: string;
  icon: React.ReactNode;
  items: string[];
  accent?: string;
}) => (
  <TiltCard>
    <Card className={`relative overflow-hidden border-violet-700/40 bg-zinc-900/60 backdrop-blur-sm shadow-xl transition-colors hover:border-violet-500/60`}> 
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent}`} />
      <CardHeader className="relative z-10 flex flex-row items-center gap-2">
        {icon}
        <CardTitle className="text-lg font-semibold text-zinc-100">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="flex flex-wrap gap-2">
          {items.map((t) => (
            <Badge key={t} variant="secondary" className="bg-zinc-800/80 text-zinc-100 border border-violet-700/40 hover:bg-zinc-800/90">
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
      {/* Glow on hover */}
      <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity group-hover:opacity-40 bg-violet-600/30" />
    </Card>
  </TiltCard>
);

export default function TechStacksShowcase() {
  return (
    <div className="min-h-[60vh] w-full  text-zinc-100 p-6 md:p-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-700/40 bg-zinc-900/60 px-3 py-1 text-xs uppercase tracking-wider">
            <Cpu className="h-3.5 w-3.5" />
            <span>Tech Stack</span>
          </div>
          <h1 className="mt-3 text-2xl md:text-4xl font-bold leading-tight">
            Building with a modern, <span className="text-purple-400">performance-first</span> stack
          </h1>
          <p className="mt-2 text-sm md:text-base text-zinc-400">
            React • Next.js • React Native • TypeScript • Prisma • PostgreSQL • MongoDB • Express • Firebase • Appwrite • Convex • Tailwind • shadcn
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Section
            title="Frontend"
            icon={<Palette className="h-5 w-5 text-violet-300" />}
            items={tech.frontend}
            accent="from-violet-600/15 to-indigo-600/10"
          />

          <Section
            title="Backend"
            icon={<Server className="h-5 w-5 text-violet-300" />}
            items={tech.backend}
            accent="from-fuchsia-600/15 to-violet-600/10"
          />

          <Section
            title="Databases"
            icon={<Database className="h-5 w-5 text-violet-300" />}
            items={tech.databases}
            accent="from-indigo-600/15 to-sky-600/10"
          />

          <Section
            title="Dev Tools & Ops"
            icon={<Wrench className="h-5 w-5 text-violet-300" />}
            items={tech.devtools}
            accent="from-violet-600/15 to-purple-600/10"
          />

          <Section
            title="Version Control"
            icon={<Github className="h-5 w-5 text-violet-300" />}
            items={["Git", "GitHub",]}
            accent="from-purple-600/15 to-fuchsia-600/10"
          />

          <Section
            title="Cloud & Hosting"
            icon={<Cloud className="h-5 w-5 text-violet-300" />}
            items={["Vercel", "Netlify", "Render"]}
            accent="from-violet-600/15 to-emerald-600/10"
          />

          <Section
            title="State & Data"
            icon={<GitBranch className="h-5 w-5 text-violet-300" />}
            items={["Redux Toolkit", "TanStack Query", "Zustand",]}
            accent="from-fuchsia-600/15 to-pink-600/10"
          />
        </div>

        
      </div>
    </div>
  );
}
