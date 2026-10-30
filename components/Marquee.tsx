const items = ["Renewables", "Plumbing", "Heating", "Renewables", "Plumbing", "Heating"];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center gap-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.32em] text-forest-950">
            {item}
          </span>
          <span aria-hidden="true" className="text-sm text-forest-950/40">
            ✦
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-forest-950/10 bg-moss py-4">
      <div className="flex w-max animate-marquee">
        <Row />
        <div aria-hidden="true" className="flex">
          <Row />
        </div>
      </div>
    </div>
  );
}
