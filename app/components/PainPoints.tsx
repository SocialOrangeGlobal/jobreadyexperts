import { FileX2, Timer, ShieldAlert, Globe } from "lucide-react";

const painPoints = [
  {
    Icon: FileX2,
    title: "Applying everywhere, hearing nothing",
    desc: "Most employers don't understand what the JRP is. Explaining it in every application wastes weeks of valuable time.",
  },
  {
    Icon: Timer,
    title: "Your visa clock is ticking",
    desc: "Every week without a placement is a week lost from your 52-week requirement. Time is not on your side.",
  },
  {
    Icon: ShieldAlert,
    title: "Is this employer actually TRA compliant?",
    desc: "One non-compliant employer and TRA can reject your hours entirely. Starting again from scratch is devastating.",
  },
  {
    Icon: Globe,
    title: "No contacts, no network in Australia",
    desc: "You just arrived. You don't know who to trust, who understands the JRP, or where to even start looking.",
  },
];

export default function PainPoints() {
  return (
    <section className="sec sec-bg">
      <div className="sec-inner">
        <div className="eyebrow">Sound familiar?</div>
        <h2 className="sec-title">
          Finding a JRP employer
          <br />
          is the hardest part
        </h2>
        <p className="sec-sub">
          Most students spend months searching — and every week without an
          employer is a week your visa clock is running.
        </p>
        <div className="pain-grid">
          {painPoints.map((item) => (
            <div className="pain-card" key={item.title}>
              <div className="p-icon">
                <item.Icon size={26} strokeWidth={1.8} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
