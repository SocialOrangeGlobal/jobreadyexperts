import { CheckCircle2 } from "lucide-react";

export default function WhyUs() {
  const points = [
    {
      title: "Employers ready and waiting",
      desc: "We have an established network of verified, TRA-compliant employers across all 16 trade occupations. No cold applications, no dead ends.",
    },
    {
      title: "We remove the biggest obstacle",
      desc: "Finding a compliant employer is the hardest part of the JRP. We handle that so you can focus on completing your hours and building your career.",
    },
    {
      title: "Full TRA documentation support",
      desc: "We guide you through hour logs, employer verification letters and everything TRA requires. No gaps, no rejected applications.",
    },
    {
      title: "We understand the JRP inside out",
      desc: "Our team knows exactly what TRA requires at every stage. No guesswork, no wasted months, no costly mistakes that set your PR back.",
    },
    {
      title: "Australia-wide employer network",
      desc: "NSW, VIC, QLD, SA and WA. Tell us your preferred state and we'll find the right match for your trade and situation.",
    },
  ];

  return (
    <section className="sec sec-bg">
      <div className="sec-inner">
        <div className="eyebrow">Why Job Ready Experts</div>
        <h2 className="sec-title">
          We&apos;ve done the hard work so you don&apos;t have to
        </h2>
        <div className="why-grid">
          <div className="why-img">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop"
              alt="Australian tradespeople at work"
              loading="lazy"
            />
            <div className="why-img-badge">
              <div className="wib-icon">
                <CheckCircle2 size={20} strokeWidth={2} color="#F5A623" />
              </div>
              <div>
                <div className="wib-text">TRA Verified Employers</div>
                <div className="wib-sub">Every employer in our network</div>
              </div>
            </div>
          </div>
          <div className="why-points">
            {points.map((pt) => (
              <div className="wp" key={pt.title}>
                <div className="wp-check">
                  <CheckCircle2 size={15} strokeWidth={2.2} color="#F5A623" />
                </div>
                <div>
                  <h4>{pt.title}</h4>
                  <p>{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
