const items = [
  'New season drop',
  'Free shipping over ₹2,000',
  'Ethnic · Western · Accessories',
  'Order on WhatsApp',
  'Handpicked fabrics',
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-line bg-paper-2 py-3.5" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((item, index) => (
          <span
            key={index}
            className="flex items-center gap-10 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.3em] text-muted"
          >
            {item}
            <span className="text-accent">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}