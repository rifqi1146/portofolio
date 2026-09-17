export default function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* Top-right ambient subtle radial glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)] transition-opacity duration-500 ease-out" />

      {/* Bottom-left ambient subtle radial glow */}
      <div className="absolute -bottom-32 -left-24 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.02)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.04)_0%,transparent_70%)] transition-opacity duration-500 ease-out" />

      {/* Subtle dot pattern texture */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025] transition-opacity duration-500 ease-out"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
