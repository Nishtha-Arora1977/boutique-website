export default function ProductArt({ icon: Icon, tone, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${tone[0]}, ${tone[1]})` }}
    >
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
      <span className="relative z-10 flex items-center justify-center rounded-full bg-white/60 p-5 backdrop-blur-sm">
        <Icon className="h-9 w-9 text-ink/70" strokeWidth={1.5} />
      </span>
    </div>
  );
}