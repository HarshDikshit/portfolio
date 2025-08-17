"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { log } from "console";

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
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
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

export default function ContactFormUI() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const title = formData.get("title");
    const description = formData.get("description");

    try {
      await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "harshdixit15031975@gmail.com",
          email,
          title,
          description,
        }),
      });

      
      form.reset();
    } catch (err) {
      console.log(err);
      
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="min-h-[60vh] w-full text-zinc-100 p-6 md:p-10 flex items-center justify-center">
      <div className="mx-auto max-w-2xl w-full">
        <TiltCard>
          <Card className="relative overflow-hidden border-violet-700/40 bg-zinc-900/60 backdrop-blur-sm shadow-xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-600/15 to-indigo-600/10" />
            <CardHeader className="relative z-10">
              <CardTitle className="text-xl font-semibold text-zinc-100 flex items-center gap-2">
                <Send className="h-5 w-5 text-violet-300" /> Get in Touch
              </CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <Input
                  required
                  name="email"
                  placeholder="Your Email"
                  type="email"
                  className="bg-zinc-800/80 border-violet-700/40 text-zinc-100"
                />
                <Input
                  required
                  name="title"
                  placeholder="Subject"
                  className="bg-zinc-800/80 border-violet-700/40 text-zinc-100"
                />
                <Textarea
                  required
                  name="description"
                  placeholder="Your Message"
                  className="bg-zinc-800/80 border-violet-700/40 text-zinc-100 min-h-[120px]"
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-violet-600 hover:bg-violet-700 text-white rounded-xl shadow-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
            <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl transition-opacity group-hover:opacity-40 bg-violet-600/30" />
          </Card>
        </TiltCard>
      </div>
    </section>
  );
}
