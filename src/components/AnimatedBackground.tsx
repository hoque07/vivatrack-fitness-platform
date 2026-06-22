const orbitItems = [
  { className: "top-[10%] left-[8%] h-24 w-24 bg-viva-green/20", delay: "0s" },
  { className: "top-[18%] right-[12%] h-32 w-32 bg-viva-cyan/20", delay: "1.4s" },
  { className: "bottom-[16%] left-[16%] h-28 w-28 bg-viva-lime/20", delay: "2.2s" },
  { className: "bottom-[10%] right-[18%] h-20 w-20 bg-viva-green/15", delay: "3s" }
];

const particles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${(index * 17) % 100}%`,
  top: `${(index * 29) % 100}%`,
  delay: `${index * 0.35}s`
}));

export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 soft-grid animated-grid opacity-60" />

      {orbitItems.map((item, index) => (
        <div
          key={index}
          className={`floating-orb absolute rounded-full blur-3xl ${item.className}`}
          style={{ animationDelay: item.delay }}
        />
      ))}

      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-viva-green/10 orbit-ring" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-viva-cyan/10 orbit-ring-reverse" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle-dot absolute h-1.5 w-1.5 rounded-full bg-viva-green/50"
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.delay
          }}
        />
      ))}
    </div>
  );
}