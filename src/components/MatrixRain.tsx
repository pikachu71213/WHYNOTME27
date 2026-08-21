"use client";

import { useEffect, useRef } from "react";

interface MatrixRainProps {
  color?: string;
  fontSize?: number;
  speed?: number;
  opacity?: number;
}

export default function MatrixRain({
  color = "#22c55e", // green-500
  fontSize = 14,
  speed = 1.5,
  opacity = 0.15,
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters: mix of katakana, numbers, and symbols
    const chars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%&*+-/<>:;[]{}".split("");

    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array(columns).fill(1);

    // Re-calculate columns if size changes
    const observer = new ResizeObserver(() => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
        columns = Math.floor(canvas.width / fontSize);
        drops = Array(columns).fill(1);
      }
    });
    if (canvas.parentElement) {
      observer.observe(canvas.parentElement);
    }

    let animationFrameId: number;
    let lastTime = 0;
    const interval = 33 / speed; // Aim for ~30fps divided by speed factor

    const draw = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(draw);

      if (timestamp - lastTime < interval) return;
      lastTime = timestamp;

      // Draw semi-transparent background to create tail effect
      ctx.fillStyle = `rgba(5, 5, 5, 0.1)`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const text = chars[Math.floor(Math.random() * chars.length)];
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        // Reset drop when it reaches bottom or randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [color, fontSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity }}
    />
  );
}
