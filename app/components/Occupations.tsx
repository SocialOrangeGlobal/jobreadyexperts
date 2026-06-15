"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  Hammer, BrickWall, LayoutGrid, Home, DoorOpen, PaintBucket,
  Building2, Armchair, Mountain, Wrench, Truck, Bike, Car,
  Cog, ChefHat, ChevronLeft, ChevronRight, CheckCircle2,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type LucideIcon = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

type Trade = { Icon: LucideIcon; name: string; desc: string };
type Category = { id: string; label: string; count: number; trades: Trade[] };

const categories: Category[] = [
  {
    id: "construction",
    label: "Construction & Building",
    count: 9,
    trades: [
      { Icon: Hammer,      name: "Carpenter",         desc: "Residential & commercial builds" },
      { Icon: BrickWall,   name: "Bricklayer",        desc: "Bricklaying & blocklaying" },
      { Icon: LayoutGrid,  name: "Wall & Floor Tiler", desc: "Wall, floor & mosaic tiling" },
      { Icon: Home,        name: "Roof Tiler",         desc: "Residential & commercial" },
      { Icon: DoorOpen,    name: "Joiner",             desc: "Doors, windows & fitouts" },
      { Icon: PaintBucket, name: "Painting Trades",    desc: "Interior & exterior painting" },
      { Icon: Building2,   name: "Plasterer",          desc: "Solid & fibrous plastering" },
      { Icon: Armchair,    name: "Cabinet Maker",      desc: "Kitchens, furniture & fitouts" },
      { Icon: Mountain,    name: "Stonemason",         desc: "Stone cutting & masonry" },
    ],
  },
  {
    id: "automotive",
    label: "Automotive",
    count: 4,
    trades: [
      { Icon: Wrench, name: "Motor Mechanic",      desc: "Light vehicle servicing & repair" },
      { Icon: Truck,  name: "Diesel Mechanic",     desc: "Heavy vehicle & diesel engines" },
      { Icon: Bike,   name: "Motorcycle Mechanic", desc: "Motorcycle servicing & repair" },
      { Icon: Car,    name: "Panelbeater",         desc: "Panel & body repair" },
    ],
  },
  {
    id: "metal",
    label: "Metal Trades",
    count: 1,
    trades: [
      { Icon: Cog, name: "Metal Fabricator", desc: "Steel fabrication & welding" },
    ],
  },
  {
    id: "food",
    label: "Food Trades",
    count: 1,
    trades: [
      { Icon: ChefHat, name: "Commercial Cook / Chef", desc: "Restaurants, hotels & catering" },
    ],
  },
];

export default function Occupations() {
  const [activeTab, setActiveTab] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const autoScrollTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const tabTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = 220;
    carouselRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  // Auto-scroll carousel left → right, then jump back
  const startCarouselScroll = useCallback(() => {
    if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
    autoScrollTimer.current = setInterval(() => {
      if (isPaused.current || !carouselRef.current) return;
      const el = carouselRef.current;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 216, behavior: "smooth" });
      }
    }, 2200);
  }, []);

  // Auto-advance tabs every 8s
  const startTabAdvance = useCallback(() => {
    if (tabTimer.current) clearInterval(tabTimer.current);
    tabTimer.current = setInterval(() => {
      if (isPaused.current) return;
      setActiveTab((prev) => {
        const next = (prev + 1) % categories.length;
        // reset carousel scroll on tab change
        setTimeout(() => {
          carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
        }, 50);
        return next;
      });
    }, 8000);
  }, []);

  useEffect(() => {
    startCarouselScroll();
    startTabAdvance();
    return () => {
      if (autoScrollTimer.current) clearInterval(autoScrollTimer.current);
      if (tabTimer.current) clearInterval(tabTimer.current);
    };
  }, [startCarouselScroll, startTabAdvance]);

  // When user manually changes tab, reset scroll & restart timers
  const handleTabChange = (i: number) => {
    setActiveTab(i);
    carouselRef.current?.scrollTo({ left: 0, behavior: "smooth" });
    startCarouselScroll();
    startTabAdvance();
  };

  const handleArrow = (dir: "left" | "right") => {
    scroll(dir);
    startCarouselScroll(); // restart timer after manual scroll
  };

  const current = categories[activeTab];

  return (
    <section className="occ-section" id="trades">
      <div className="occ-inner">
        {/* Header */}
        <div className="occ-header">
          <div className="eyebrow" style={{ color: "rgba(245,166,35,0.8)" }}>
            What we cover
          </div>
          <h2 className="sec-title" style={{ color: "#fff" }}>
            16 occupations.{" "}
            <em style={{ color: "var(--gold)", fontStyle: "normal" }}>
              Verified employers ready.
            </em>
          </h2>
          <p className="sec-sub" style={{ color: "rgba(255,255,255,0.5)" }}>
            TRA-compliant employers across every occupation below, in multiple states.
          </p>
        </div>

        {/* Tabs */}
        <div className="occ-tabs">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              className={`occ-tab${activeTab === i ? " active" : ""}`}
              onClick={() => handleTabChange(i)}
            >
              {cat.label}
              <span className="occ-tab-badge">{cat.count}</span>
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div
          className="occ-carousel-wrap"
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
        >
          <button
            className="occ-arrow occ-arrow-left"
            onClick={() => handleArrow("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          <div className="occ-carousel" ref={carouselRef}>
            {current.trades.map((trade) => (
              <div className="occ-card" key={trade.name}>
                <div className="occ-card-icon">
                  <trade.Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="occ-card-title">{trade.name}</h3>
                <p className="occ-card-desc">{trade.desc}</p>
                <div className="occ-card-badge">
                  <CheckCircle2 size={12} strokeWidth={2.5} />
                  TRA Verified
                </div>
              </div>
            ))}
          </div>

          <button
            className="occ-arrow occ-arrow-right"
            onClick={() => handleArrow("right")}
            aria-label="Scroll right"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="occ-dots">
          {categories.map((_, i) => (
            <button
              key={i}
              className={`occ-dot${activeTab === i ? " active" : ""}`}
              onClick={() => handleTabChange(i)}
              aria-label={`Go to category ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="occ-cta">
          <a href="#enquire" className="btn-gold">
            My trade is listed — Enquire now →
          </a>
        </div>
      </div>
    </section>
  );
}
