"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function CursorGlow() {
  const { theme } = useTheme();
  const [coords, setCoords] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    if (theme !== "dark") return;

    const handleMouseMove = (e: MouseEvent) => {
      setCoords({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block cursor-glow"
      style={{
        "--x": `${coords.x}px`,
        "--y": `${coords.y}px`,
      } as React.CSSProperties}
    />
  );
}
