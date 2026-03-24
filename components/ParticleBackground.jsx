"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });
    window.addEventListener("mouseleave", () => {
      mouse.x = null;
      mouse.y = null;
    });

    // ── Particles ──────────────────────────────────────────────
    const COUNT = 80;

    function makeParticle() {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 0.3 + 0.05;
      // Colour palette matching screenshot: warm white, amber, soft orange, pale pink
      const palette = [
        { h: 40, s: "70%", l: "80%" },   // amber-white
        { h: 30, s: "80%", l: "70%" },   // orange
        { h: 20, s: "60%", l: "75%" },   // warm
        { h: 0,  s: "50%", l: "80%" },   // pale pink
        { h: 50, s: "40%", l: "85%" },   // yellow-white
      ];
      const col = palette[Math.floor(Math.random() * palette.length)];
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 1.6 + 0.5,
        alpha: Math.random() * 0.5 + 0.3,
        h: col.h, s: col.s, l: col.l,
        phase: Math.random() * Math.PI * 2,
        twinkle: Math.random() * 0.025 + 0.008,
      };
    }

    const particles = Array.from({ length: COUNT }, makeParticle);

    // ── Connection lines ────────────────────────────────────────
    function drawLines() {
      const MAX = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX) {
            const op = (1 - dist / MAX) * 0.22;
            ctx.beginPath();
            // Line colour: warm amber tint
            ctx.strokeStyle = `rgba(200, 140, 60, ${op})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    // ── Shooting stars ──────────────────────────────────────────
    const shooters = [];
    let shootTimer = 0;

    function spawnShooter() {
      shooters.push({
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        len: Math.random() * 70 + 40,
        speed: Math.random() * 5 + 3,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
        alpha: 0.9,
        decay: 0.02,
      });
    }

    function drawShooters() {
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        const tail = ctx.createLinearGradient(
          s.x - Math.cos(s.angle) * s.len,
          s.y - Math.sin(s.angle) * s.len,
          s.x, s.y
        );
        tail.addColorStop(0, "transparent");
        tail.addColorStop(1, `rgba(220,170,80,${s.alpha})`);
        ctx.save();
        ctx.strokeStyle = tail;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(s.x - Math.cos(s.angle) * s.len, s.y - Math.sin(s.angle) * s.len);
        ctx.lineTo(s.x, s.y);
        ctx.stroke();
        ctx.restore();
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.alpha -= s.decay;
        if (s.alpha <= 0) shooters.splice(i, 1);
      }
    }

    // ── Main loop ───────────────────────────────────────────────
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background — very dark warm brown/black like the screenshot
      const bg = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.35, 0,
        canvas.width * 0.5, canvas.height * 0.35, canvas.width * 0.8
      );
      bg.addColorStop(0, "#1c0c03");
      bg.addColorStop(0.5, "#0e0601");
      bg.addColorStop(1, "#000000");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lines first (behind particles)
      drawLines();

      // Shooting stars
      shootTimer++;
      if (shootTimer > 260) { spawnShooter(); shootTimer = 0; }
      drawShooters();

      // Particles
      particles.forEach((p) => {
        p.phase += p.twinkle;
        const a = p.alpha * (0.65 + 0.35 * Math.sin(p.phase));

        // Mouse repulsion
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 100) {
            const f = (100 - d) / 100;
            p.vx += (dx / d) * f * 0.055;
            p.vy += (dy / d) * f * 0.055;
          }
        }

        // Speed dampen
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > 1.0) { p.vx *= 0.95; p.vy *= 0.95; }

        // Glow halo
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 4);
        glow.addColorStop(0, `hsla(${p.h},${p.s},${p.l},${a * 0.8})`);
        glow.addColorStop(1, "transparent");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.h},${p.s},95%,${a})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      animId = requestAnimationFrame(tick);
    }

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
