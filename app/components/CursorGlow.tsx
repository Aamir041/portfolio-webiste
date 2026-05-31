interface CursorGlowProps {
  x: number;
  y: number;
}

export function CursorGlow({ x, y }: CursorGlowProps) {
  return (
    <div
      className="cursor-glow"
      style={{ left: x, top: y }}
    />
  );
}
