import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  life: number;
  maxLife: number;
  hue: number;
  glitter: boolean;
};

const CursorGlow = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const followRef = useRef({ x: -100, y: -100 });
  const lastEmitRef = useRef({ x: -100, y: -100 });
  const frameRef = useRef(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const spawnParticle = (x: number, y: number, count: number) => {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 1.8 + 0.2;
        const glitter = Math.random() > 0.45;

        particlesRef.current.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.25,
          size: glitter ? Math.random() * 1.8 + 0.8 : Math.random() * 3 + 1.5,
          alpha: 1,
          life: 0,
          maxLife: glitter ? 24 + Math.random() * 18 : 42 + Math.random() * 30,
          hue: Math.random() > 0.75 ? 338 + Math.random() * 18 : 35 + Math.random() * 16,
          glitter,
        });
      }

      if (particlesRef.current.length > 220) {
        particlesRef.current = particlesRef.current.slice(-180);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -100, y: -100 };
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseout", onMouseLeave);

    const animate = () => {
      frameRef.current += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Slight delay so glow and glitter trail follow the cursor smoothly.
      followRef.current.x += (mouseRef.current.x - followRef.current.x) * 0.12;
      followRef.current.y += (mouseRef.current.y - followRef.current.y) * 0.12;

      const followX = followRef.current.x;
      const followY = followRef.current.y;

      const moveX = followX - lastEmitRef.current.x;
      const moveY = followY - lastEmitRef.current.y;
      const movement = Math.hypot(moveX, moveY);

      if (movement > 3) {
        const count = Math.min(7, 2 + Math.floor(movement / 3));
        spawnParticle(followX, followY, count);
        lastEmitRef.current = { x: followX, y: followY };
      } else if (frameRef.current % 8 === 0 && mouseRef.current.x > 0) {
        spawnParticle(followX, followY, 1);
      }

      const outer = ctx.createRadialGradient(followX, followY, 0, followX, followY, 170);
      outer.addColorStop(0, "hsla(42, 95%, 66%, 0.09)");
      outer.addColorStop(0.4, "hsla(33, 88%, 56%, 0.035)");
      outer.addColorStop(1, "hsla(33, 88%, 56%, 0)");
      ctx.fillStyle = outer;
      ctx.beginPath();
      ctx.arc(followX, followY, 170, 0, Math.PI * 2);
      ctx.fill();

      const inner = ctx.createRadialGradient(followX, followY, 0, followX, followY, 45);
      inner.addColorStop(0, "hsla(44, 96%, 74%, 0.24)");
      inner.addColorStop(0.65, "hsla(347, 72%, 64%, 0.08)");
      inner.addColorStop(1, "hsla(347, 72%, 56%, 0)");
      ctx.fillStyle = inner;
      ctx.beginPath();
      ctx.arc(followX, followY, 45, 0, Math.PI * 2);
      ctx.fill();

      particlesRef.current = particlesRef.current.filter((particle) => {
        particle.life += 1;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.97;
        particle.vy *= 0.97;

        const progress = particle.life / particle.maxLife;
        particle.alpha = progress < 0.2 ? progress / 0.2 : 1 - (progress - 0.2) / 0.8;

        if (particle.life >= particle.maxLife) return false;

        ctx.save();
        ctx.globalAlpha = Math.max(particle.alpha, 0);

        if (particle.glitter) {
          ctx.strokeStyle = `hsla(${particle.hue}, 95%, 82%, ${particle.alpha * 0.9})`;
          ctx.lineWidth = 0.8;
          const s = particle.size * (1.8 - progress * 0.6);

          ctx.beginPath();
          ctx.moveTo(particle.x - s, particle.y);
          ctx.lineTo(particle.x + s, particle.y);
          ctx.moveTo(particle.x, particle.y - s);
          ctx.lineTo(particle.x, particle.y + s);
          ctx.stroke();

          ctx.fillStyle = `hsla(${particle.hue}, 95%, 75%, ${particle.alpha})`;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          const grad = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size,
          );

          grad.addColorStop(0, `hsla(${particle.hue}, 90%, 65%, ${particle.alpha})`);
          grad.addColorStop(1, `hsla(${particle.hue}, 90%, 50%, 0)`);

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * (1 - progress * 0.3), 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
        return true;
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" />;
};

export default CursorGlow;
