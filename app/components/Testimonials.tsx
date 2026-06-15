import { Star, Quote } from "lucide-react";

const reviews = [
  {
    initials: "RK",
    name: "Rajesh K.",
    role: "Carpenter",
    location: "Melbourne, VIC",
    quote:
      "I searched for months on my own with no luck at all. Job Ready Experts connected me with a construction employer and I was able to start my JRP hours. Now I'm well into my 52 weeks.",
  },
  {
    initials: "SP",
    name: "Sanjay P.",
    role: "Commercial Cook",
    location: "Sydney, NSW",
    quote:
      "My 485 visa was running out and I was desperate. They found me a verified chef employer and guided me through all the TRA paperwork. I don't know what I would have done without them.",
  },
  {
    initials: "BT",
    name: "Binod T.",
    role: "Motor Mechanic",
    location: "Brisbane, QLD",
    quote:
      "Being new to Australia I had no contacts at all. Job Ready Experts placed me with a mechanic workshop and supported me with documentation. My skills assessment is now complete.",
  },
  {
    initials: "AM",
    name: "Arjun M.",
    role: "Metal Fabricator",
    location: "Perth, WA",
    quote:
      "The team was transparent and professional throughout the entire process. They matched me with the right employer and kept me informed every step of the way. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="sec testi-sec">
      <div className="sec-inner">
        <div className="eyebrow">Success stories</div>
        <h2 className="sec-title">Students now on their way to PR</h2>
        <p className="sec-sub">
          Real outcomes from real people who used our placement service.
        </p>

        <div className="testi-grid">
          {reviews.map((r) => (
            <div className="tc-card" key={r.name}>
              {/* Quote icon */}
              <div className="tc-quote-icon">
                <Quote size={18} strokeWidth={1.5} />
              </div>

              {/* Stars */}
              <div className="tc-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Review text */}
              <blockquote className="tc-text">&ldquo;{r.quote}&rdquo;</blockquote>

              {/* Author */}
              <div className="tc-author">
                <div className="av">{r.initials}</div>
                <div className="tc-author-info">
                  <div className="av-name">{r.name}</div>
                  <div className="av-role">
                    {r.role} &mdash; {r.location}
                  </div>
                </div>
              </div>

              {/* Verified badge */}
              <div className="tc-verified">✓ Verified placement</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
