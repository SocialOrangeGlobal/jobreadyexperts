import { MessageSquare, ChevronRight, CheckCircle2, MapPin, BadgeCheck, Sparkles } from "lucide-react";

const trustItems = [
  { Icon: Sparkles, label: "16 occupations covered" },
  { Icon: BadgeCheck, label: "TRA compliant employers" },
  { Icon: MapPin, label: "NSW · VIC · QLD · SA · WA" },
  { Icon: CheckCircle2, label: "Free to enquire" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-overlay"></div>
      <div className="hero-inner">
        <div className="hero-badge">
          <BadgeCheck size={14} strokeWidth={2.5} />
          JRP Employer Placement Specialists
        </div>
        <h1>
          Your JRP employer,
          <br />
          <em>found for you.</em>
        </h1>
        <p className="hero-sub">
          We connect JRP trade graduates with verified, TRA-compliant Australian
          employers. Stop the months of searching — we have employers ready
          across 16 occupations, Australia-wide.
        </p>
        <div className="hero-ctas">
          <a href="#enquire" className="btn-gold">
            <MessageSquare size={18} strokeWidth={2} />
            Enquire Now — It&apos;s Free
          </a>
          <a href="#how" className="btn-outline">
            See How It Works
            <ChevronRight size={18} strokeWidth={2} />
          </a>
        </div>
        <div className="hero-trust">
          {trustItems.map(({ Icon, label }) => (
            <div className="trust-pill" key={label}>
              <Icon size={14} strokeWidth={2.2} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
