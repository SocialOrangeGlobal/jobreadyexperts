export default function PhotoGallery() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&auto=format&fit=crop",
      alt: "Construction workers on scaffolding",
      label: "Construction",
      cls: "bento-a"
    },
    {
      src: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80&auto=format&fit=crop",
      alt: "Carpenter using power drill on timber",
      label: "Carpentry",
      cls: "bento-b"
    },
    {
      src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&auto=format&fit=crop",
      alt: "Chef working in a professional kitchen",
      label: "Commercial Cook",
      cls: "bento-c"
    },
    {
      src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=700&q=80&auto=format&fit=crop",
      alt: "Automotive mechanic working on engine",
      label: "Motor Mechanic",
      cls: "bento-d"
    },
    {
      src: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80&auto=format&fit=crop",
      alt: "Metal fabricator welding steel",
      label: "Metal Fabrication",
      cls: "bento-e"
    }
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-inner">
        <div className="gallery-header">
          <div className="eyebrow">Trades we place</div>
          <h2 className="sec-title">Real work.{" "}
            <em style={{ color: "var(--gold)", fontStyle: "normal" }}>
              Real employers.
            </em>
          </h2>
        </div>
        <div className="bento-grid">
          {images.map((img, i) => (
            <div className={`bento-item ${img.cls}`} key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="bento-label">
                <span>{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
