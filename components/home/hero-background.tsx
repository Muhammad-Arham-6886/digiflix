"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  accent: boolean;
};

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = Math.min(110, Math.floor((width * height) / 11000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        r: Math.random() * 2.2 + 0.9,
        accent: Math.random() > 0.82,
      }));
    };

    const frame = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 130;
          if (d2 < max * max) {
            const t = 1 - d2 / (max * max);
            ctx.strokeStyle = `rgba(148,130,210,${t * 0.28})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20 || p.x > width + 20) p.vx *= -1;
        if (p.y < -20 || p.y > height + 20) p.vy *= -1;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const max = 160;
          if (d2 < max * max && d2 > 0.001) {
            const f = ((max * max - d2) / (max * max)) * 0.02;
            p.x += dx * f;
            p.y += dy * f;
          }
        }

        ctx.fillStyle = p.accent
          ? "rgba(213,176,88,0.85)"
          : "rgba(181,163,236,0.75)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mouse.active) {
        const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 140);
        glow.addColorStop(0, "rgba(181,163,236,0.16)");
        glow.addColorStop(1, "rgba(181,163,236,0)");
        ctx.fillStyle = glow;
        ctx.fillRect(mouse.x - 140, mouse.y - 140, 280, 280);
      }

      if (!prefersReduced) raf = requestAnimationFrame(frame);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    frame();
    if (prefersReduced) cancelAnimationFrame(raf);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReduced]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
